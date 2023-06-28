import React from "react";
import { useState } from "react";

export default function useContactList() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [PhoneValue, setPhoneValue] = useState("");
  const setNameValueHandler = (vlue) => {
    setNameValue(vlue);
  };
  const setEmailValueHandler = (vlue) => {
    setEmailValue(vlue);
  };
  const setPhoneValueHandler = (vlue) => {
    setPhoneValue(vlue);
  };
  const [searchterm, setSearchterm] = useState("");
  const setSearchtermhandler = (term) => {
    setSearchterm(term);
  };
  const [listContact, setlistContact] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    if (nameValue.trim() && emailValue.trim() && PhoneValue.trim()) {
      let newList = {
        id: listContact.length + 1,
        name: nameValue,
        Phone: PhoneValue,
        email: emailValue,
      };
      setlistContact([...listContact, newList]);
      setNameValue("");
      setEmailValue("");
      setPhoneValue("");
    }
  };
  const deleteContactHandler = (delID) => {
    const nwlist = listContact.filter(({ id }) => id !== delID);
    setlistContact(nwlist);
  };
  return {
    deleteContactHandler,
    submitForm,
    setSearchtermhandler,
    setEmailValueHandler,
    setPhoneValueHandler,
    setNameValueHandler,
    nameValue,
    emailValue,
    PhoneValue,
    listContact,
    searchterm,
  };
}
