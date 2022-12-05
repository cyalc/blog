import Head from "next/head";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { codify } from "../apps/speller/models";

const VerticalLayout = styled("div")<{ alignItems: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
`;

const Theme = createGlobalStyle`
  body {
    background: #272822;
  }
`;

function Speller() {
  const [uiState, setUiState] = useState<UiState>({ codes: [] });

  return (
    <>
      <Head>
        <title>Spelling Alphabet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Theme />
      <VerticalLayout alignItems="center">
        <VerticalLayout alignItems="flex-start">
          <input
            type="text"
            onChange={(e) =>
              setUiState(
                buildState({ character: e.target.value.toLowerCase() })
              )
            }
          />

          <ul>
            {uiState.codes.map((code, index) => (
              <li key={index}>{code}</li>
            ))}
          </ul>
        </VerticalLayout>
      </VerticalLayout>
    </>
  );
}

function buildState(action: Action): UiState {
  return {
    codes: codify(action.character),
  };
}

type Action = {
  character: string;
};

type UiState = {
  codes: string[];
};

export default Speller;
