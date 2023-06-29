export const checkEmail = (email: string) => {
  return email.includes('@') ? true : false;
};

export const checkPassword = (password: string) => {
  return password.length < 8 ? false : true;
};
