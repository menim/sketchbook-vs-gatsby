import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, FormattedTime} from 'react-intl';

import Cart from '../Cart';
import Footer from './footer';

import {InterfaceContext} from '../../context/interfaceContext';
import {StoreContext} from '../../context/storeContext';

import Backdrop from '../shared/backdrop';
import Modal from './modal';

import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
  getProductItemsInStore,
} from '../../helpers';

class Layout extends Component {
  state = {
    store: {
      productItems: [],
      totalPrice: 0,

      addItem: product => {
        let productInStoreIndex = getProductItemsInStore(
          this.state.store.productItems,
          product
        );

        let newTotalPrice =
          this.state.store.totalPrice + product.count * product.price;

        productInStoreIndex < 0
          ? this.setState(prevState => {
              let newProductItems = prevState.store.productItems.concat(
                product
              );
              let localStorageData = [newProductItems, newTotalPrice];
              addDataToLocalStorage('localStorageData', localStorageData);
              return {
                ...prevState,
                store: {
                  ...prevState.store,
                  totalPrice: newTotalPrice,
                  productItems: newProductItems,
                },
              };
            })
          : this.setState(prevState => {
              let productItemInStore = {
                ...prevState.store.productItems[productInStoreIndex],
              };
              productItemInStore.count += product.count;

              let newProductItems = prevState.store.productItems.map(
                (item, index) => {
                  if (index === productInStoreIndex) {
                    item = productItemInStore;
                  }
                  return item;
                }
              );

              let localStorageData = [newProductItems, newTotalPrice];
              addDataToLocalStorage('localStorageData', localStorageData);

              return {
                ...prevState,
                store: {
                  ...prevState.store,
                  totalPrice: newTotalPrice,
                  productItems: newProductItems,
                },
              };
            });
      },
      removeItem: product => {
        let productInStoreIndex = getProductItemsInStore(
          this.state.store.productItems,
          product
        );

        let newTotalPrice =
          this.state.store.totalPrice - product.price * product.count;

        this.setState(prevState => {
          let newProductItems = prevState.store.productItems.filter(
            (productItem, index) => index !== productInStoreIndex
          );
          let localStorageData = [newProductItems, newTotalPrice];
          addDataToLocalStorage('localStorageData', localStorageData);
          return {
            ...prevState,
            store: {
              ...prevState.store,
              productItems: newProductItems,
              totalPrice: newTotalPrice,
            },
          };
        });
      },
      removeAllItems: () => {
        this.setState(prevState => ({
          ...prevState,
          store: {...prevState.store, productItems: []},
        }));
        localStorage.clear();
      },
      updateItem: () => {},
      getProductsInCart: () => {
        return this.state.store.productItems.reduce(
          (count, productItem) => (count += productItem.count),
          0
        );
      },
    },
    interface: {
      cartStatus: false,
      modalStatus: false,
      hideScroll: () => {
        document.body.classList.contains('modal-open')
          ? document.body.classList.remove('modal-open')
          : document.body.classList.add('modal-open');
      },
      cartToggle: () => {
        this.setState(prevState => ({
          interface: {
            ...prevState.interface,
            cartStatus: !prevState.interface.cartStatus,
          },
        }));
        this.state.interface.hideScroll();
      },
      cartIsEmpty: () => {
        return this.state.store.productItems.length === 0;
      },
      modalToggle: () => {
        this.setState(prevState => ({
          interface: {
            ...prevState.interface,
            modalStatus: !prevState.interface.modalStatus,
          },
        }));
        this.state.interface.hideScroll();
      },
    },
  };

  componentDidMount() {
    this.setState(prevState => {
      let [productItems, totalPrice] = getDataFromLocalStorage(
        'localStorageData'
      ) || [[], 0];
      return {
        store: {
          ...prevState.store,
          productItems: productItems,
          totalPrice: totalPrice,
        },
      };
    });
  }

  render() {
    return (
      <InterfaceContext.Provider value={this.state.interface}>
        <StoreContext.Provider value={this.state.store}>
          <Cart
            appInterface={this.state.interface}
            store={this.state.store}
            locale={this.props.intl.locale}
          />
          {this.props.children}
          <Footer />
          <Modal
            appInterface={this.state.interface}
            locale={this.props.intl.locale}
          />
          <Backdrop
            isVisible={this.state.interface.cartStatus}
            closeModal={this.state.interface.cartToggle}
          />
        </StoreContext.Provider>
      </InterfaceContext.Provider>
    );
  }
}

export default injectIntl(Layout);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  intl: PropTypes.object.isRequired,
};
