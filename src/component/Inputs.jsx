import React from "react";
import "./../App.scss";

export default function Inputs({
  id,
  label,
  type,
  placeholder,
  value,
  onchang,
}) {
  return (
    <div className="input__Group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => onchang(target.value)}
      />
    </div>
  );
}
