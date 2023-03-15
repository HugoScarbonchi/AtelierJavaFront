import axios from "axios";

import { BASE_URL } from "../config";

export class FeteDeLaMusique {
  // ============================= Events methodes =============================
  static async fetchAllEvents() {
    const response = await axios.get(`${BASE_URL}/events`);
    console.log(response.data);
    return response.data;
  }

  static async fetchEventById(eventId) {
    const response = await axios.get(`${BASE_URL}/event?id=${eventId}`);
    return response.data;
  }

  static async createEvent(formValues) {
    return (await axios.post(`${BASE_URL}/event`, formValues)).data;
  }

  static async deleteEventById(eventIdToDelete) {
    const response = await axios.delete(
      `${BASE_URL}/event?id=${eventIdToDelete}`
    );
    return response.data;
  }

  // ============================= Product method =============================
  static async fetchAllProducts() {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  }

  static async fetchProductById(productId) {
    const response = await axios.get(`${BASE_URL}/product?id=${productId}`);
    return response.data;
  }

  static async createProduct(newProduct) {
    return (await axios.post(`${BASE_URL}/product`, newProduct)).data;
  }

  static async updateProductById(productToUpdate) {
    const response = await axios.patch(`${BASE_URL}/product`, productToUpdate);
    return response.data;
  }

  static async deleteProductById(productIdToDelete) {
    const response = await axios.delete(
      `${BASE_URL}/product?id=${productIdToDelete}`
    );
    return response.data;
  }

  // ============================= Cart methodes =============================
  static async fetchCartDetailstByUserId(userId) {
    try {
      const response = await axios.get(
        `${BASE_URL}/cartDetailsByUserId?id=${userId}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
