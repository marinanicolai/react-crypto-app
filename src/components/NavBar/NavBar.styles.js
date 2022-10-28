import styled from "styled-components";
import { Row, Col } from "antd";

export const Nav = styled.nav`
  ul {
    margin: 1.5rem 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
  margin-top: -2rem;
`;

export const Container = styled(Row)`
  background-color: rgb(91, 72, 106);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  border-radius: 0.75rem;
  padding-top: 2rem;
  padding-bottom: 0.3rem;
`;
