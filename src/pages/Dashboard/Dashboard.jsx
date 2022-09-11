import React from "react";
import "./Dashboard.css";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Field1 from "../../components/Fields/Field1";
import { chakra } from "@chakra-ui/react";

function Dashboard() {
  const Headerc = chakra(Header);
  return (
    <div className="Dashboard">
      <Navbar />
      <Headerc />
      <Field1 />
    </div>
  );
}

export default Dashboard;
