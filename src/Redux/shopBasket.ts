export const BasketState: State = {
  basket: [],
  basketBoolean: false,
};

export interface State {
  basket: Array<arrType>;
  basketBoolean: boolean;
}
export interface arrType {
  img: string;
  name: string;
  size: string;
  EA: number;
  price: number;
  totalPrice: number;
}
export const BASKET_PUSH = "BASKET_PUSH" as const;
export const BASKET_DEL = "BASKET_DEL" as const;

export const basketArr = (basket: any) => ({
  type: BASKET_PUSH,
  payload: basket,
});

type action = ReturnType<typeof basketArr>;

export default (state: State = BasketState, act: action): State => {
  switch (act.type) {
    case BASKET_PUSH:
      return {
        ...state,
        basket: act.payload,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};
