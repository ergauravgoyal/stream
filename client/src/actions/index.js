import { SIGN_OUT, SIGN_IN } from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = userId => {
  return {
    type: SIGN_OUT,
    payload: userId
  };
};
