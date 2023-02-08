import styled from "styled-components";

export default function propsTest() {
  return (
    <Wrapper>
      <Title>Hi Meisam</Title>
      <Button>Normar</Button>
      <Button primary>Primary</Button>
    </Wrapper>
  );
}

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
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
