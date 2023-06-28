import React from "react";
import "./../App.scss";

export default function ContactListSearch({ setSearchterm, searchterm }) {
  return (
    <div className="ContactListSearch">
      <input
        type="search"
        placeholder="search contact here..."
        value={searchterm}
        onChange={({ target }) => setSearchterm(target.value)}
      />
    </div>
  );
}
