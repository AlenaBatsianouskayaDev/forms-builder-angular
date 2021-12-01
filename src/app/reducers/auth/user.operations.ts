export const logIn = () => {
 

  try {
    const { data } = await axios.post('./users/login', credentials);
    token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};