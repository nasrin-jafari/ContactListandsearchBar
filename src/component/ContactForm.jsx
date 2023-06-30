import React, { useState } from "react";
import Inputs from "./Inputs";
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
  const inputs = [
    {
      id: "name",
      label: "contact name ",
      type: "text",
      placeholder: "Enter conatact name",
      value: nameValue,
      onchang: setNameValue,
    },
    {
      id: "Email",
      label: "Email : ",
      type: "mail",
      placeholder: "Email@test.com",
      value: emailValue,
      onchang: setEmailValue,
    },
    {
      id: "Phone",
      label: "Phone : ",
      type: "tel",
      placeholder: "+98 .......",
      value: PhoneValue,
      onchang: setPhoneValue,
    },
  ];
  return (
    <div className="conatactForm">
      <div className="conatactForm__header">
        <h1>contact form</h1>
      </div>
      <div className="conatactForm__content">
        <h1>add new contact</h1>
      </div>
      <form onSubmit={submitForm}>
        {inputs.map(
          ({ id, label, type, placeholder, value, onchang }, index) => {
            return (
              <Inputs
                key={`${index} ${id}`}
                id={id}
                label={label}
                type={type}
                placeholder={placeholder}
                value={value}
                onchang={onchang}
              ></Inputs>
            );
          }
        )}
        <button type="submit" className="btn">
          save contact
        </button>
      </form>
    </div>
  );
}
