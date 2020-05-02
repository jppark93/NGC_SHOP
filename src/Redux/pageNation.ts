//초기화
export const initialState: State = {
  notesState: [],
};

//액션 타입
export const SET_NOTES = "SET_NOTES" as const;

//액션 생성 함수
export const setNotesData = (payload: Array<INote>) => ({
  type: SET_NOTES,
  payload,
});

type NextAction = ReturnType<typeof setNotesData>;

export default (prev: State = initialState, next: NextAction): State => {
  switch (next.type) {
    default: {
      return {
        ...prev,
      };
    }
  }
};

export interface State {
  notesState: Array<INote>;
}

export interface INote {
  id: string;
}
