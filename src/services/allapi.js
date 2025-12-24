import axiosConfig from "./axiosconfig";
import { BaseUrl } from "./baseurl";

export const getItems = async () => {
  return await axiosConfig('get', `${BaseUrl}/items`);
};

export const getCart = async () => {
  return await axiosConfig('get', `${BaseUrl}/cart`);
};

export const addToCart = async (item) => {
  return await axiosConfig('post', `${BaseUrl}/cart`, item);
};

export const updateCart = async (item) => {
  return await axiosConfig('put', `${BaseUrl}/cart/${item.id}`, item);
};

export const removeCart = async (id) => {
  return await axiosConfig('delete', `${BaseUrl}/cart/${id}`);
};
