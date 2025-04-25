import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: sans-serif;
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: skyblue;
  padding: 1rem;
  color: white;
`;

export const TextBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Title = styled.p`
  font-size: 1.25rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 5rem;
`;

export const Text = styled.h1`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
`;

export const AdminWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const AdminTableDiv = styled.div`
  display: flex;
  gap: 3rem;
`;

export const AdminTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AdminListDiv = styled.div`
  display: flex;
  padding: 1rem;
  background-color: skyblue;
`;

export const Table = styled.div`
  display: flex;
  gap: 1rem;
  border: 1px solid gray;
  padding: 0.5rem;
`;

export const ID = styled.p`
  display: flex;
  width: 7rem;
`;

export const Name = styled.p`
  display: flex;
  width: 15rem;
`;

export const Gwonhan = styled.p`
  display: flex;
  width: 15rem;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
