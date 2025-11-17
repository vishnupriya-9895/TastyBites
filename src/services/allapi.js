import axiosConfig from "./axiosconfig";

export const addToCart = async (reqbody) => {
  return await axiosConfig("post", "http://localhost:3000/cart", reqbody);
};

export const getCart = async () => {
  return await axiosConfig("get", "http://localhost:3000/cart");
};

export const updateCart = async (item) => {
  return await axiosConfig("put", `http://localhost:3000/cart/${item.id}`, item);
};



export const removeCart = async (id) => {
  return await axiosConfig("delete", `http://localhost:3000/cart/${id}`);
};

