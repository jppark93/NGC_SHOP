//초기화
export const initialState: State = {
    loginState: false,
    userId: '',
  };
  
  //액션 타입
  export const LOG_IN = "LOG_IN" as const;
  export const LOG_OUT = "LOG_OUT" as const;
  export const CHANGE_ID = "CHANGE_ID" as const;
  
  //액션 생성 함수
  export const setLogIn = () => ({
    type: LOG_IN,
  });
  
  export const setLogOut = () => ({
    type: LOG_OUT,
  });

  export const changeId = (userId : string) => ({
    type: CHANGE_ID,
    payload: userId,
  });

  type NextAction = ReturnType<typeof setLogIn>
                | ReturnType<typeof setLogOut>
                | ReturnType<typeof changeId>;
  
  export default (prev: State = initialState, next: NextAction): State => {
    switch (next.type) {
        case LOG_IN:
            return {...prev, loginState: true};
        case LOG_OUT:
            return {...prev, loginState: false};
        case CHANGE_ID:
            return {...prev, userId: next.payload};
      default: {
        return {
          ...prev,
        };
      }
    }
  };
  
  export interface State {
    loginState: boolean,
    userId: string,
  };
  