export const saveTODB = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
