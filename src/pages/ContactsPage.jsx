import Contacts from "../components/Contacts/Contacts";
import phoneIco from "/phone-favicon.ico";
import { useEffect } from "react";

const ContactsPage = () => {
  useEffect(() => {
    let link = document.querySelector("link[rel='shortcut icon']");
    link.href = phoneIco;
  }, []);

  return <Contacts />;
};

export default ContactsPage;
