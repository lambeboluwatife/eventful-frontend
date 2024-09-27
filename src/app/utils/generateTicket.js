import axios from "axios";

export async function generateTicket(id) {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You must be logged in to generate a ticket.");
    return;
  }

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `https://altschool-eventful-backend.onrender.com/api/tickets/${id}/generate-ticket`,
      {},
      config
    );

    alert(response.data.message);
    console.log(response);
  } catch (err) {
    alert(err.response.data.error);
    console.log(response);
  }
}
