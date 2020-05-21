export const ShopState: State = {
  ShopInfoData: [],
  productIndex: 0,
};

export interface State {
  ShopInfoData: Array<Info>;
  productIndex: number;
}

export interface Info {
  img: string;
  name: string;
  price: string;
  sale: string;
}

export const SET_PUSH_INFO = "SET_PUSH_INFO" as const;
export const SET_PUSH_INDEX = "SET_PUSH_INDEX" as const;

export const setPushInfo = (infoData: Array<Info>) => ({
  type: SET_PUSH_INFO,
  payload: infoData,
});
export const setPushIndex = (num: number) => ({
  type: SET_PUSH_INDEX,
  payload: num,
});
type Action = ReturnType<typeof setPushInfo | typeof setPushIndex>;

export default (state: State = ShopState, act: Action): State => {
  switch (act.type) {
    case SET_PUSH_INFO: {
      let copyInfo = state.ShopInfoData;
      copyInfo = copyInfo.concat(act.payload);
      return {
        ...state,
        ShopInfoData: copyInfo,
      };
    }
    case SET_PUSH_INDEX: {
      return {
        ...state,
        productIndex: act.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};
