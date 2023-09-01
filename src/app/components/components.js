import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #0046C0;
  color: #fffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0046C0;
  }
`;
<StyledButton>Leia mais</StyledButton>

export const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
<StyledLink href="https://github.com/danvitoriano/danvitoriano">Meu Link</StyledLink>

export const StyledImage = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('./images/dev-image.jpg');
  background-size: cover;
`;
<StyledImage />

export const StyledHeading = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;