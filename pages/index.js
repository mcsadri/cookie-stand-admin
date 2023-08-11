import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <header class="flex items-center justify-between bg-green-500 text-black p-5">
        <h1>Cookie Stand Admin</h1>
        <p>X locations added</p>
      </header>

      <main className="flex flex-col items-center py-4 space-y-8">
        <p>Sample Test. Create Cookie Stand</p>
      </main>

      <footer class="flex items-center justify-between bg-green-500 text-black p-5">
        <p>&copy;2023</p>
      </footer>

    </>
  );
}
