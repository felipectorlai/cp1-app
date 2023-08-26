// RM550253 Felipe Cardoso Torlai - Cayque Pereira RM551353 - Alef Gabriel RM99487 - Jean Carlos RM550430 - Matheus Estevo RM550913

// src/app/page.js
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <title name="Title" />
      <Button>Button Home</Button>
      <Link href="/sobre">Sobre</Link>
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