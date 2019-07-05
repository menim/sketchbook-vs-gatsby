import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, FormattedTime} from 'react-intl';

import Cart from '../Cart';
import Footer from './footer';

import {ModalContext} from '../../context/modalContext';
import {CartContext} from '../../context/cartContext';
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
    },
    cart: {
      cartStatus: false,
      toggle: () => {
        this.setState (prevState => ({
          cart: {
            ...prevState.cart,
            cartStatus: !prevState.cart.cartStatus,
          },
        }));
        this.state.interface.hideScroll ();
      },
      isEmpty: () => {
        return this.state.store.productItems.length === 0;
      },
    },
    interface: {
      hideScroll: () => {
        document.body.classList.contains ('modal-open')
          ? document.body.classList.remove ('modal-open')
          : document.body.classList.add ('modal-open');
      },
    },
    modal: {
      isShow: false,
      toggle: () => {
        this.setState (prevState => ({
          modal: {
            ...prevState.modal,
            isShow: !prevState.modal.isShow,
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
          <ModalContext.Provider value={this.state.modal}>
            <CartContext.Provider value={this.state.cart}>
              <Cart cart={this.state.cart} locale={this.props.intl.locale} />
              {this.props.children}
              <Footer />
              <Modal
                isShow={this.state.modal.isShow}
                close={this.state.modal.toggle}
                locale={this.props.intl.locale}
              />
              <Backdrop isVisible={this.state.cart.cartStatus} />
            </CartContext.Provider>
          </ModalContext.Provider>
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
