import styled from "styled-components";

export default function testBtn() {
  return (
    <Wrapper>
      <Section>
        <Title>Hi Meisam</Title>
        <Title primary>This is test for props</Title>
      </Section>
      <Section second>
        <Button>Normal</Button>
        <TomatoButton>TomatoButton</TomatoButton>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: yellowgreen;
  justify-content: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.second ? "row" : "column")};
`;

const Title = styled.h1`
  font-size: ${(props) => (props.primary ? "1.4em" : "1.8em")};
  color: ${(props) => (props.primary ? "blue" : "Green")};
  font-weight: ${(props) => (props.primary ? "500" : "700")};
  letter-spacing: ${(props) => (props.primary ? "5px" : "10px")};
`;

const Button = styled.button`
  padding: 1.1em;
  margin: 0.8em;
  color: black;
  background: yellow;
  border: 2px solid pink;
  border-radius: 0.8em;
`;

const TomatoButton = styled(Button)`
  background: red;
  color: white;
`;
