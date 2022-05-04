export const getAllItems = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos?albumId=1";
  const data = await fetch(url, { method: "get" });
  const items = await data.json();
  return items;
};
