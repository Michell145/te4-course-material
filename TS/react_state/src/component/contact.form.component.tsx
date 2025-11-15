import React, { useState } from "react";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Example - object - useState - contact form</h2>
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={form.firstname}
      />
      <br />
      <label htmlFor="lastname">Last Name:</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={form.lastname}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={form.message}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </div>
  );
};

export default ContactForm;
