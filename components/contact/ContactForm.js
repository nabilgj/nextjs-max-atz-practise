import React, { useState, useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  const sendContactData = async (contactDetails) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
  };

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    // optionoal: add client side validation

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("");
    } catch (error) {
      setRequestStatus("error");
      setRequestError(error.message);
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Hurrah!",
      message: "Message saved successfully!!!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Oops",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1> How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">You email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
              required
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="name">You Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message"> Your Message</label>
          <textarea
            id="message"
            name="message"
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
            rows="5"
            required
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>

      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

// into ContactPage
export default ContactForm;
