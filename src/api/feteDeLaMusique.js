import axios from "axios";

import { BASE_URL } from "../config";

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

  static async createEvent(formValues) {
    return (await axios.post(`${BASE_URL}/`, formValues)).data;
  }
}
