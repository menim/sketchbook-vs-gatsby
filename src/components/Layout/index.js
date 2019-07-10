import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, FormattedTime} from 'react-intl';

import Cart from '../Cart';
import Footer from './footer';

import {InterfaceContext} from '../../context/interfaceContext';
import {StoreContext} from '../../context/storeContext';

import Backdrop from '../shared/backdrop';
import Modal from './modal';

import {addDataToLocalStorage, getDataFromLocalStorage} from '../../helpers';

class Layout extends Component {
  state = {
    store: {
      productItems: [],
      addItem: product => {
        let productInStoreIndex = this.state.store.productItems.findIndex (
          productItem =>
            productItem.lang === product.lang &&
            productItem.cover === product.cover
        );

        productInStoreIndex < 0
          ? this.setState (prevState => {
              let newProductItems = prevState.store.productItems.concat (
                product
              );
              addDataToLocalStorage ('productItems', newProductItems);
              return {
                ...prevState,
                store: {...prevState.store, productItems: newProductItems},
              };
            })
          : this.setState (prevState => {
              let productItemInStore = {
                ...prevState.store.productItems[productInStoreIndex],
              };
              productItemInStore.count += product.count;

              let newProductItems = prevState.store.productItems.map (
                (item, index) => {
                  if (index === productInStoreIndex) {
                    item = productItemInStore;
                  }
                  return item;
                }
              );

              addDataToLocalStorage ('productItems', newProductItems);
              return {
                ...prevState,
                store: {
                  ...prevState.store,
                  productItems: newProductItems,
                },
              };
            });
      },
      removeItem: (itemLang, itemCover) => {
        let productInStoreIndex = this.state.store.productItems.findIndex (
          productItem =>
            productItem.lang === itemLang && productItem.cover === itemCover
        );

        this.setState (prevState => {
          let newProductItems = prevState.store.productItems.filter (
            (productItem, index) => index !== productInStoreIndex
          );
          addDataToLocalStorage ('productItems', newProductItems);
          return {
            ...prevState,
            store: {...prevState.store, productItems: newProductItems},
          };
        });
      },
      updateItem: () => {},
      getProductsInCart: () => {
        return this.state.store.productItems.reduce (
          (count, productItem) => (count += productItem.count),
          0
        );
      },
    },
    interface: {
      cartStatus: false,
      modalStatus: false,
      hideScroll: () => {
        document.body.classList.contains ('modal-open')
          ? document.body.classList.remove ('modal-open')
          : document.body.classList.add ('modal-open');
      },
      cartToggle: () => {
        this.setState (prevState => ({
          interface: {
            ...prevState.interface,
            cartStatus: !prevState.interface.cartStatus,
          },
        }));
        this.state.interface.hideScroll ();
      },
      cartIsEmpty: () => {
        return this.state.store.productItems.length === 0;
      },
      modalToggle: () => {
        this.setState (prevState => ({
          interface: {
            ...prevState.interface,
            modalStatus: !prevState.interface.modalStatus,
          },
        }));
        this.state.interface.hideScroll ();
      },
    },
  };

  componentDidMount () {
    this.setState (prevState => {
      return {
        store: {
          ...prevState.store,
          productItems: getDataFromLocalStorage ('productItems') || [],
        },
      };
    });
  }

  render () {
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
          <Backdrop isVisible={this.state.interface.cartStatus} />
        </StoreContext.Provider>
      </InterfaceContext.Provider>
    );
  }
}

export default injectIntl (Layout);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  intl: PropTypes.object.isRequired,
};
