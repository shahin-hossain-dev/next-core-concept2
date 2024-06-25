//posts api function organize রাখার জন্য services এর মধ্যে রাখা হয়েছে, যেন component গুলো readable থাকে।
//next.js data fetching method. যেহেতু server side data fetching করতে হয় তাই async-await function দিয়ে করতে হয় এবং component function কেও async-await function করতে হয়।
export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

// dynamic data fetching function
export const getDataWithId = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};
