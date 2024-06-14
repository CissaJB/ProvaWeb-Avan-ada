import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'App de receitas',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '10px' }}>
          <h1 style={{ color: 'white' }}>App de Receitas</h1>
        </header>
        <main style={{ padding: '20px' }}>{children}</main>
        <footer style={{ backgroundColor: 'lightgray', padding: '10px' }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
