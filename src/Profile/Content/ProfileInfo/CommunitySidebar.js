import React from "react";
import styled from "styled-components";
import Artefacts from "./Artefacts";
import SharedFollowers from "./SharedFollowers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export default () => (
  <Container>
    <Container>
      <SharedFollowers />
    </Container>
    <Container>
      <Artefacts />
    </Container>
  </Container>
);
