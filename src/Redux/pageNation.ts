//초기화
export const initialState: State = {
  startIndex: 0,
  endPage: 10,
  currentPage: 1,
};

//액션 타입
export const CURRENT_PAGE = "CURRENT_PAGE" as const;
export const UPDATE_START_END = "UPDATE_START_END" as const;
export const END_PAGE = "END_PAGE" as const;

//액션 생성 함수
export const setCurrentPage = (current: number) => ({
  type: CURRENT_PAGE,
  payload: current + 1,
});
export const setStartEndPage = (startIndex: number, endPage: number) => ({
  type: UPDATE_START_END,
  payload: { startIndex, endPage },
});

type NextAction = ReturnType<typeof setCurrentPage | typeof setStartEndPage>;

export default (prev: State = initialState, next: NextAction): State => {
  switch (next.type) {
    case CURRENT_PAGE:
      return {
        ...prev,
        currentPage: next.payload,
      };

    case UPDATE_START_END:
      return {
        ...prev,
        startIndex: next.payload.startIndex,
        endPage: next.payload.endPage,
      };
    default: {
      return {
        ...prev,
      };
    }
  }
};

export interface State {
  currentPage: number;
  startIndex: number;
  endPage: number;
}

export interface INote {
  id: string;
}
