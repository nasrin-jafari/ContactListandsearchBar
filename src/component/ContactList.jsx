import React from "react";
import "./../App.scss";
import ContactItem from "./ContactItem";
import ContactListSearch from "./ContactListSearch";

export default function ContactList({
  listContact,
  searchterm,
  setSearchterm,
  deleteContact,
}) {
  return (
    <div className="ContactList">
      <div className="conatactForm__header">
        <h1>contact list</h1>
      </div>
      <div className="conatactForm__content">
        <ContactListSearch
          searchterm={searchterm}
          setSearchterm={setSearchterm}
        ></ContactListSearch>
        {listContact
          .filter(({ name }) => name.includes(searchterm))
          .map(({ name, email, Phone, id }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                email={email}
                Phone={Phone}
                ondelete={() => deleteContact(id)}
              ></ContactItem>
            );
          })}
      </div>
    </div>
  );
}
