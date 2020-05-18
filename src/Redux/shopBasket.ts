export const BasketState: State = {
  basket: [],
  basketTotalPrice: 0,
};

export interface State {
  basket: Array<goodsType>;
  basketTotalPrice: number;
}

export interface goodsType {
  img: string;
  name: string;
  size: string;
  ea: number;
  price: number;
}

export const BASKET_PUSH = "BASKET_PUSH" as const;
export const BASKET_DEL = "BASKET_DEL" as const;
export const BASKET_CLEAR = "BASKET_CLEAR" as const;
export const BASKET_PRINT = "BASKET_PRINT" as const;

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

export const printBasket = () => ({
  type: BASKET_PRINT,
});

type action = ReturnType<
  typeof pushBasket | typeof delBasket | typeof clearBasket | typeof printBasket
>;

export default (state: State = BasketState, act: action): State => {
  let prev_basket = state.basket;
  let next_basket;

  switch (act.type) {
    case BASKET_PUSH: {
      let findResult: number = prev_basket.findIndex((goods: any) => goods.name === act.payload.name && goods.size === act.payload.size);
      if (findResult !== -1) {
        next_basket = prev_basket;
        next_basket[findResult].ea += act.payload.ea;
      }
      else
        next_basket = state.basket.concat(act.payload);
      return {
        ...state,
        basket: next_basket,
        basketTotalPrice: state.basketTotalPrice + (act.payload.price * act.payload.ea),
      };
    }
    case BASKET_DEL: {
      next_basket = state.basket.filter((goods: any) => goods.name !== act.payload.name || goods.size !== act.payload.size);
      return {
        ...state,
        basket: next_basket,
        basketTotalPrice: (prev_basket.length - 1 === next_basket.length) ?
          state.basketTotalPrice - (act.payload.price * act.payload.ea) :
          state.basketTotalPrice,
      };
    }
    case BASKET_CLEAR: {
      return { ...state, basket: [], basketTotalPrice: 0 };
    }
    case BASKET_PRINT: {
      console.log(state.basket, state.basketTotalPrice);
      return { ...state };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
