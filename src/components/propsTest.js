import styled from "styled-components";

export default function propsTest() {
  return (
    <Wrapper>
      <Title>Hi Meisam</Title>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </Wrapper>
  );
}

const Button = styled.button`
  background: ${(props) => (props.primary ? "blue" : "white")};
  color: ${(props) => (props.primary ? "white" : "blue")};
  padding: 2em;
  font-size: 1.4em;
  margin: 1.2em;
  border: 2px solid red;
  border-radius: 0.6em;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: slategray;
`;

const Title = styled.h1`
  font-size: 2em;
  align-items: center;
  color: blue;
`;
