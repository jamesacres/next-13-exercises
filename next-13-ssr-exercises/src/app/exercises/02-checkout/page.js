'use client';
import React from 'react';

import DATA from './data';
import reducer from './reducer';
import StoreItem from './StoreItem';
import CheckoutFlow from './CheckoutFlow';
import './styles.css';

function CheckoutExercise() {
  const [state, dispatch] = React.useReducer(
    reducer,
    {}
  );
  React.useEffect(() => {
    if (state.items) {
      window.localStorage.setItem('cart', JSON.stringify(state.items));
    }
  }, [state.items])
  React.useEffect(() => {
    const savedCart = window.localStorage.getItem('cart');
    if (savedCart) {
      dispatch({
        type: 'restore',
        cart: JSON.parse(savedCart),
      })
    }
  }, [])

  return (
    <>
      <h1>Neighborhood Shop</h1>

      <main>
        <div className="items">
          {DATA.map((item) => (
            <StoreItem
              key={item.id}
              item={item}
              handleAddToCart={(item) => {
                dispatch({
                  type: 'add-item',
                  item,
                });
              }}
            />
          ))}
        </div>

        <CheckoutFlow
          items={state.items}
          taxRate={0.15}
          handleDeleteItem={(item) =>
            dispatch({
              type: 'delete-item',
              item,
            })
          }
        />
      </main>
    </>
  );
}

export default CheckoutExercise;
