import React from "react";
import styled from "styled-components";

interface Props {}

const SignUpModal: React.FC = (props: Props) => {
  return <Container>Sign Up</Container>;
};

const Container = styled.div`
  width: 568px;
  height: 614px;
  background-color: white;
  z-index: 11;
`;

export default SignUpModal;
