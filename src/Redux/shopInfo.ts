export const ShopState: State = {
  ShopInfoData: {
    img: "",
    name: "",
    price: "",
    sale: "",
  },
};

export interface State {
  ShopInfoData: Info;
}

export interface Info {
  img: string;
  name: string;
  price: string;
  sale: string;
}

export const SET_PUSH_INFO = "SET_PUSH_INFO" as const;

export const setPushInfo = (infoData: Info) => ({
  type: SET_PUSH_INFO,
  payload: infoData,
});

type Action = ReturnType<typeof setPushInfo>;

export default (state: State = ShopState, act: Action): State => {
  switch (act.type) {
    case SET_PUSH_INFO: {
      return {
        ShopInfoData: act.payload,
      };
    }

    default: {
      return { ...state };
    }
  }
};
