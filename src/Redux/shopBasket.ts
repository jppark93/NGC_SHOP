export const BasketState: State = {
  basket: [],
  totalPrice: 0,
};

export interface State {
  basket: Array<arrType>;
  totalPrice: number;
}

export interface arrType {
  img: string;
  name: string;
  size: string;
  ea: number;
  price: number;
  Checked: false,
}

export const BASKET_PUSH = "BASKET_PUSH" as const;
export const BASKET_DEL = "BASKET_DEL" as const;
export const BASKET_CLEAR = "BASKET_CLEAR" as const;

export const pushBasket = (goods: any) => ({
  type: BASKET_PUSH,
  payload: goods,
});

export const delBasket = (goods: any) => ({
  type: BASKET_DEL,
  payload: goods,
});

export const clearBasket = () => ({
  type: BASKET_CLEAR,
});

type action = ReturnType<
  typeof pushBasket | typeof delBasket | typeof clearBasket
>;

export default (state: State = BasketState, act: action): State => {
  let prev_basket = state.basket;
  let next_basket;

  switch (act.type) {
    case BASKET_PUSH: {
      let findResult: number = prev_basket.findIndex((goods: any) => goods.name === act.payload.name && goods.size === act.payload.size);
      if (findResult !== -1) {
        next_basket = prev_basket[findResult].ea += act.payload.ea;
      }
      else
        next_basket = state.basket.concat(act.payload);
      return {
        ...state,
        basket: next_basket,
        totalPrice: state.totalPrice + (act.payload.price * act.payload.ea),
      };
    }
    case BASKET_DEL: {
      next_basket = state.basket.filter((goods: any) => goods.name !== act.payload.name || goods.size !== act.payload.size);
      return {
        ...state,
        basket: next_basket,
        totalPrice: (prev_basket.length - 1 === next_basket.length) ?
          state.totalPrice - (act.payload.price * act.payload.ea) :
          state.totalPrice,
      };
    }
    case BASKET_CLEAR: {
      return { ...state, basket: [], totalPrice: 0 };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
