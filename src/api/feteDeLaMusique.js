import axios from "axios";
import { BASE_URL } from "../config";
import {showAddCart} from "../App";

export class FeteDeLaMusique {
  static async fetchAllEvents() {
    const response = await axios.get(`${BASE_URL}/events`);
    console.log(response.data);
    return response.data;
  }

  static async fetchEventById(eventId) {
    const response = await axios.get(`${BASE_URL}/event?id=${eventId}`);
    return response.data;
  }

  static async fetchAllProducts() {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data
  }

  static async createEvent(formValues) {
    return (await axios.post(`${BASE_URL}/`, formValues)).data;
  }

  static async fetchCartDetailstByUserId(userId) {
    try {
      const response = await axios.get(`${BASE_URL}/cartDetailsByUserId?id=${userId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }

  }

  static async addProductToCart(product, userId, quantity) {
    try {
      const response = await axios.post(`${BASE_URL}/addProductToCart?userId=${userId}&quantity=${quantity}`,
          product
      );
      showAddCart()
      return true;
    } catch (error) {
      console.error(error);
      return false
    }

  }

  static async addTicketToCart(ticket, userId, quantity) {
    try {
      const response = await axios.post(`${BASE_URL}/addTicketToCart?userId=${userId}&quantity=${quantity}`,
          ticket
      );
      showAddCart()
      return true;
    } catch (error) {
      console.error(error);
      return false
    }

  }

  static async getDIscounts() {
    try {
      const response = await axios.get(`${BASE_URL}/discounts`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }

  }

}
