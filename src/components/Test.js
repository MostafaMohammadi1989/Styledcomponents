import styled from "styled-components";

export default function Test() {
  return (
    <Wrapper>
      <Title>Hi Meisam</Title>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palegoldenrod;
`;
