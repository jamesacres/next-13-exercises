import { produce } from 'immer';

function reducer(state, action) {
  return produce(state, (draftState) => {
    if (!draftState.items) {
      draftState.items = [];
    }
    switch (action.type) {
      case 'restore': {
        draftState.items = action.cart;
        return;
      }
      case 'add-item': {
        const itemIndex = draftState.items.findIndex(
          (item) => item.id === action.item.id
        );

        if (itemIndex !== -1) {
          draftState.items[itemIndex].quantity += 1;
          return;
        }

        draftState.items.push({
          ...action.item,
          quantity: 1,
        });
        return;
      }

      case 'delete-item': {
        const itemIndex = draftState.items.findIndex(
          (item) => item.id === action.item.id
        );

        draftState.items.splice(itemIndex, 1);
        return;
      }
    }
  });
}

export default reducer;
