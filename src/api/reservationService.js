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


export const getAvailableDates = async () => {
  try {
    const mockDates = [
      "2025-09-22T00:00:00.000Z",
      "2025-09-23T00:00:00.000Z",
      "2025-09-24T00:00:00.000Z",
      "2025-09-25T00:00:00.000Z",
      "2025-09-26T00:00:00.000Z",
      "2025-09-27T00:00:00.000Z",
    ];

    const formattedDates = mockDates.map(dateStr => new Date(dateStr));
    return formattedDates;

    // const response = await axios.get("/api/available-dates");
    // return response.data;
  } catch (error) {
    console.error("Error fetching available dates:", error);
    return [];
  }
};
