import axios from "axios";

export async function applyToEvent(id) {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You must be logged in to apply for an event.");
    return;
  }

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `https://altschool-eventful-backend.onrender.com/api/attendee/${id}/apply`,
      {},
      config
    );

    alert(response.data.message);
  } catch (err) {
    alert(err.response.data.error);
  }
}
