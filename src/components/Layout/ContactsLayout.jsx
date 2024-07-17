import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const ContactsLayout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default ContactsLayout;
