import styled from "styled-components";

export const Main = styled.main`
  padding: 2rem;
  h1 {
    color: #b35e8b;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export const Title = styled.h2`
  font-size: 1rem;
  color: #b35e8b;
`;

export const Price = styled.p`
  font-weight: bold;
  color: #6ab99d;
`;

export const Button = styled.button`
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
