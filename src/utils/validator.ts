export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
};
