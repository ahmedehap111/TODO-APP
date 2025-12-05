export const fetchData = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return Array.isArray(data) ? data : [];
};
