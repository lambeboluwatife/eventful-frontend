"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { getToken } from "@/utils/tokenUtils";
import Link from "next/link";
import AlertMessage from "@/components/AlertMessages";
import axios from "axios";

const CreateEvent = () => {
  const router = useRouter();
  const decodedToken = useAuth("/sign-in");
  const [minDate, setMinDate] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    category: "",
    description: "",
    date: "",
    time: "",
    price: "",
    capacity: "",
    reminders: "",
  });
  const [backdrop, setBackdrop] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");

    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleFileChange = (event) => {
    setBackdrop(event.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "capacity" || name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("title", formData.title);
      formDataToSubmit.append("location", formData.location);
      formDataToSubmit.append("category", formData.category);
      formDataToSubmit.append("description", formData.description);
      formDataToSubmit.append("date", formData.date);
      formDataToSubmit.append("time", formData.time);
      formDataToSubmit.append("price", formData.price);
      formDataToSubmit.append("capacity", formData.capacity);
      formDataToSubmit.append("reminders", formData.reminders);
      formDataToSubmit.append("backdrop", backdrop);

      const token = getToken();

      const response = await axios.post(
        "https://altschool-eventful-backend.onrender.com/api/events/create-event",
        formDataToSubmit,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "multipart/form-data",
          },
        }
      );

      setLoading(false);
      setSuccessMessage("Event created successfully!");
      setErrorMessage("");

      setFormData({
        title: "",
        location: "",
        category: "",
        description: "",
        date: "",
        time: "",
        price: "",
        capacity: "",
        reminders: "",
      });
      setBackdrop(null);

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.error("Server Error:", error.response);
        setErrorMessage(
          `Creating event failed: ${error.response.data || "An error occurred"}`
        );
      } else if (error.request) {
        console.error("Network Error:", error.request);
        setErrorMessage("Network error. Please try again later.");
      } else {
        console.error("Error:", error.message);
        setErrorMessage(`Error: ${error.message}`);
      }
      setSuccessMessage("");
    }
  };

  return (
    <section className="create-event">
      <div className="container">
        <h2>ADD EVENT</h2>
        <AlertMessage
          message={successMessage}
          type="success"
          onClose={() => setSuccessMessage("")}
        />
        <AlertMessage
          message={errorMessage}
          type="error"
          onClose={() => setErrorMessage("")}
        />
        <form onSubmit={handleSubmit}>
          <div className="container grid">
            {/* Input fields for event details */}
            <div className="form-group">
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Event Name/Event Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                id="capacity"
                name="capacity"
                placeholder="Numbers of capacity"
                value={formData.capacity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                required
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Select Category
                </option>
                <option value="speaker session">Speaker Session</option>
                <option value="networking session">Networking Session</option>
                <option value="conference">Conference</option>
                <option value="technology">Technology</option>
                <option value="seminar">Seminar</option>
                <option value="arts">Arts</option>
                <option value="workshop">Workshop</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="trade show">Trade Show</option>
                <option value="award and competition">
                  Award and Competition
                </option>
                <option value="festival or party">Festival or Party</option>
                <option value="webinars">Webinars</option>
                <option value="product launch">Product Launch</option>
                <option value="corporate meeting">Corporate Meeting</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                required
                name="description"
                id="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <input
                required
                className="mb-1"
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                min={minDate}
              />
              <input
                required
                className="mb-1"
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
              />
              <select
                required
                name="reminders"
                id="reminders"
                value={formData.reminders}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Select Reminder
                </option>
                <option value="a day before">A Day Before</option>
                <option value="a week before">A Week Before</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Price(N)"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mt-2 text-center">
              <label htmlFor="backdrop" className="file-upload">
                <input
                  type="file"
                  accept="image/png, image/webp, image/jpg, image/gif, image/jpeg"
                  id="backdrop"
                  className="file"
                  name="backdrop"
                  onChange={handleFileChange}
                  placeholder="Backdrop"
                />
                <small className="text-danger mt-2">Upload Backdrop</small>
              </label>
            </div>
          </div>
          <hr className="bg-danger" />

          <Link href="/dashboard" className="cancel">
            Cancel
          </Link>

          <button className="button" type="submit">
            {loading ? <h4>Creating event...</h4> : <h4>Create Event</h4>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateEvent;
