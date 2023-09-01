// RM550253 Felipe Cardoso Torlai - Cayque Pereira RM551353 - Alef Gabriel RM99487 - Jean Carlos RM550430 - Matheus Estevo RM550913

'use client'
import React from 'react'
export { button, a, div, h1} from './components/components';
import Imagem from './images/dev-image.jpg';

export default function Home() {
  return (
      <main> <h1>Porto Seguro</h1>
          <StyledButton>Meu Botão</StyledButton>
          <StyledLink href="https://github.com/danvitoriano/danvitoriano">Meu Link</StyledLink>
          <StyledImage />
      </main>
  );
}