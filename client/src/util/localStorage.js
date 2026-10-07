export const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};
export const setData = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};
