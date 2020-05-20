//초기화
export const initialState: State = {
  product: [],
  pageArray: [],
  slide: 16,
  currentPage: 1,
};
export interface State {
  product: Array<Product>;
  pageArray: Array<number>;
  slide: number;
  currentPage: number;
}

export interface Product {
  img: string;
  name: string;
  price: string;
  sale: string;
}
//액션 타입
export const SET_PRODUCT = "SET_PRODUCT" as const;
export const CURRENT_PAGE = "CURRENT_PAGE" as const;
export const UPDATE_START_END = "UPDATE_START_END" as const;
export const END_PAGE = "END_PAGE" as const;

//액션 생성 함수
export const setProduct = (product: Array<Product>) => ({
  type: SET_PRODUCT,
  payload: product,
});
export const setCurrentPage = (pageArr: number) => ({
  type: CURRENT_PAGE,
  payload: pageArr,
});
export const setStartEndPage = (num: number) => ({
  type: UPDATE_START_END,
  payload: num,
});

type NextAction = ReturnType<
  typeof setCurrentPage | typeof setStartEndPage | typeof setProduct
>;

export default (prev: State = initialState, next: NextAction): State => {
  switch (next.type) {
    case SET_PRODUCT: {
      return {
        ...prev,
        product: next.payload,
      };
    }
    case CURRENT_PAGE: {
      return {
        ...prev,
      };
    }
    case UPDATE_START_END: {
      return {
        ...prev,
        slide: next.payload,
      };
    }
    default: {
      return {
        ...prev,
      };
    }
  }
};

export interface State {
  currentPage: number;
  slide: number;
}

export interface INote {
  id: string;
}
