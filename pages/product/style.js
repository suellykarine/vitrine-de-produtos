import styled from "styled-components";

export const Container = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Imagem = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

export const Info = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: #b35e8b;
  }

  p {
    color: #3a3a3a;
    line-height: 1.5;
  }

  strong {
    color: #6ab99d;
    font-size: 1.2rem;
  }
`;

export const Naviagation = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled.button`
  margin-top: 2rem;
  background-color: #b35e8b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #6ab99d;
  }
`;
