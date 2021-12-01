export const userNode = 'user';

export interface UserState {
  user: string;
}

const initialState: UserState = {
  user: 'ale',
}

export const userReducer = (state = initialState) => {
  return state;
}