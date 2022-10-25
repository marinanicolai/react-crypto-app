import React from "react";
import { Link } from "react-router-dom";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import { Nav, Container } from "./NavBar.styles";
import { Col } from "antd";

const NavBar = () => {
  return (
    <>
      <Nav>
        <Container>
          <Col
            xs={{ span: 5 }}
            sm={{ span: 7 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
            xl={{ span: 9 }}
          >
            <CurrencySelect />
          </Col>
        </Container>
      </Nav>
    </>
  );
};

export default NavBar;
