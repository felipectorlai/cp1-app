import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledImage = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('caminho/para/sua/imagem.jpg');
  background-size: cover;
`;

export const StyledHeading = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;