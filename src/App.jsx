import { useState } from "react";
import "./App.scss";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";
import useContactList from "./Hook/useContactList";

function App() {
  const {
    submitForm,
    nameValue,
    setNameValueHandler,
    emailValue,
    setEmailValueHandler,
    PhoneValue,
    setPhoneValueHandler,
    listContact,
    setSearchtermhandler,
    searchterm,
    deleteContactHandler,
  } = useContactList();

  return (
    <div className="App">
      <ContactForm
        submitForm={submitForm}
        nameValue={nameValue}
        setNameValue={setNameValueHandler}
        emailValue={emailValue}
        setEmailValue={setEmailValueHandler}
        PhoneValue={PhoneValue}
        setPhoneValue={setPhoneValueHandler}
      ></ContactForm>
      <ContactList
        listContact={listContact}
        setSearchterm={setSearchtermhandler}
        searchterm={searchterm}
        deleteContact={deleteContactHandler}
      ></ContactList>
    </div>
  );
}

export default App;
