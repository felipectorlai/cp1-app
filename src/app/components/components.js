import styled from 'styled-components';

const StyledButton = styled.button`
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

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledImage = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('caminho/para/sua/imagem.jpg');
  background-size: cover;
`;