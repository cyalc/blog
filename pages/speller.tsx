import Head from "next/head";
import styled from "styled-components";

const StyledComponent = styled.div`
  background: black;
  color: white;
`;

function Speller() {
  return (
    <>
      <Head>
        <title>Spelling Alphabet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StyledComponent></StyledComponent>
    </>
  );
}

export default Speller;
