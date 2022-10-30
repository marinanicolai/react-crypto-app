import React from "react";
import { Link } from "react-router-dom";
import CurrencySelect from "../CurrencySelect/index";
import Search from "../Search/index";
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
          <Col>
            <Search />
          </Col>
          <Col>
            <ul>
              <li>
                <Link to="/">Explore</Link>
              </li>{" "}
              <li>
                <Link to="/favorite">Favorite</Link>
              </li>{" "}
            </ul>
          </Col>
        </Container>
      </Nav>
    </>
  );
};

export default NavBar;
