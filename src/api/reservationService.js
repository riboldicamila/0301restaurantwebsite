import axios from "axios";

export const createReservation = async (reservationData) => {
  //   const response = await axios.post("/api/reservations", reservationData);
  //   return response.data;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 201 });
    }, 500);
  });
};
