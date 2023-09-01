// RM550253 Felipe Cardoso Torlai - Cayque Pereira RM551353 - Alef Gabriel RM99487 - Jean Carlos RM550430 - Matheus Estevo RM550913

'use client'
import React from 'react'
export { button, a, div, h1, nav, input } from './components/components';

export default function Home() {
  return (
    <main> 
      <h1>Porto Seguro</h1>

      <div class="search-container">
        <i class="search-icon fas fa-search"></i>
        <input class="search-input" type="text" placeholder="Pesquisar..." />
      </div>
      <br></br>
      <button class="styled-button">Olá</button>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </main>
  );
}
