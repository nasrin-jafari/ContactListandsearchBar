import React, { useState } from "react";
import "./../App.scss";

export default function ContactForm({
  submitForm,
  nameValue,
  setNameValue,
  PhoneValue,
  emailValue,
  setEmailValue,
  setPhoneValue,
}) {
  return (
    <div className="conatactForm">
      <div className="conatactForm__header">
        <h1>contact form</h1>
      </div>
      <div className="conatactForm__content">
        <h1>add new contact</h1>
      </div>
      <form onSubmit={submitForm}>
        <div className="input__Group">
          <label htmlFor="name">contact name : </label>
          <input
            type="text"
            id="name"
            placeholder="Enter conatact name"
            value={nameValue}
            onChange={({ target }) => setNameValue(target.value)}
          />
        </div>
        <div className="input__Group">
          <label htmlFor="Email">Email : </label>
          <input
            type="mail"
            id="Email"
            placeholder="Email@test.com"
            value={emailValue}
            onChange={({ target }) => setEmailValue(target.value)}
          />
        </div>
        <div className="input__Group">
          <label htmlFor="Phone">Phone :</label>
          <input
            type="tel"
            id="Phone"
            placeholder="+98 ......."
            value={PhoneValue}
            onChange={({ target }) => setPhoneValue(target.value)}
          />
        </div>
        <button type="submit" className="btn">
          save contact
        </button>
      </form>
    </div>
  );
}
