import React from "react";
import "./../App.scss";

export default function ContactItem({ name, email, Phone, ondelete }) {
  return (
    <div className="ContactItem">
      <div className="ContactItem__group">
        <div>{name}</div>
        <div className="close-btn" onClick={ondelete}>
          ❌
        </div>
      </div>
      <div className="ContactItem__group">
        <div>{email}</div>
        <div>{Phone}</div>
      </div>
    </div>
  );
}
