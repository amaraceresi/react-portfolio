import "./Contact.css";
import "./Contact.css";
import React, { useState } from "react";

function ContactForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(state);
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={state.name}
          onChange={onInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={state.email}
          onChange={onInputChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={state.message}
          onChange={onInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;

