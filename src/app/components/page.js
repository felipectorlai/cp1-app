// RM550253 Felipe Cardoso Torlai - Cayque Pereira RM551353 - Alef Gabriel RM99487 - Jean Carlos RM550430 - Matheus Estevo RM550913

// src/app/page.js
import Link from 'next/link';
import './globals.css';

import React from 'react';

import Button from '../src/app/components/Button';

import Link from '../src/app/components/Title';

import './globals.css';

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <title name="Title" />
      <h1>LIVE TECH</h1>
      <input type="text" placeholder="Digite sua pesquisa" />
      <Button>Home</Button>
      <Link href="/sobre">sobre</Link>
      <p>   Olá, somos a Live Tech! <br/>

Utilizamos um programa de inteligência artificial para conversar com os usuários, oferecendo informações e serviços relacionados a guinchos e serviços de reboque.</p>

    </main>
  );
}

export function Button({children, ...props}) {
  return (
    <button className='rounded-lg border border-gray-300 bg-white px-5 py-4'>
      {children}
    </button>
  );
}

export function Text(props) {
  return (
    <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">
      {props.name}
    </p>
  );
}