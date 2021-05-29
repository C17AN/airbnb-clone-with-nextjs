import React from "react";
import styled from "styled-components";

interface Props {}

const Container = styled.div`
  font-size: 21px;
  color: gray;
  background-color: #407513;
`;

const index: React.FC = () => {
  return <Container>Hello, World!</Container>;
};

export default index;
