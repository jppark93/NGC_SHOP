//초기화
export const initialState: State = {
  pageArray: [],
  slide: 16,
  currentPage: 1,
};
export interface State {
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
export const SET_PAGEARRAY = "SET_PAGEARRAY" as const;
export const SET_SLIDE = "SET_SLIDE" as const;
export const SET_PAGE = "SET_PAGE" as const;

//액션 생성 함수
export const setPageArray = (dataLength: number) => ({
  type: SET_PAGEARRAY,
  payload: dataLength,
});
export const setSlide = (slide: number) => ({
  type: SET_SLIDE,
  payload: slide,
});
export const setCurrentPage = (current: number) => ({
  type: SET_PAGE,
  payload: current,
});

type NextAction = ReturnType<
    typeof setPageArray
  | typeof setSlide
  | typeof setCurrentPage
>;

export default (prev: State = initialState, next: NextAction): State => {
  switch (next.type) {
    case SET_PAGEARRAY:
      let new_pageArray: Array<number> = [];
      for (let i : number = 1; i <= Math.ceil(next.payload / prev.slide); i++) 
        new_pageArray.push(i);
      return {
        ...prev,
        pageArray: new_pageArray,
      };

    case SET_SLIDE:
      return {
        ...prev,
        slide: next.payload,
      };

    case SET_PAGE:
      return {
        ...prev,
        currentPage: prev.pageArray.findIndex((page) => page === next.payload) !== -1 ? next.payload : prev.currentPage,
      };

    default: {
      return {
        ...prev,
      };
    }
  }
};
