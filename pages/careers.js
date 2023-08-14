import Link from 'next/link';
import Head from 'next/head';

export default function Careers() {
    return (
      <>
        <Head>
          <title>Cookie Stand Careers</title>
        </Head>

        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <h1 className="text-2xl">A new life awaits you in the Off-world colonies. The chance to begin again in a golden land of opportunity and adventure.</h1>
            <h1 className="text-4xl"> Careers Page Coming Soon</h1>
            <Link href="/" className="p-4 m-4 text-2xl bg-green-500 rounded-lg">Back to Home</Link>
        </div>
      </>
    );
}