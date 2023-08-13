import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [cookieStands, setCookieStands] = useState([]);
  
  function createCookieStandHandler(event) {
    event.preventDefault();

    const location = event.target.location.value;
    const min_cust = event.target.min_cust.value;
    const max_cust = event.target.max_cust.value;
    const hourly = event.target.hourly.value;

    // console.log('Location:', location);
    // console.log('Minimum Customers per Hour:', min_cust);
    // console.log('Maximum Customers per Hour:', max_cust);
    // console.log('Average Cookies per Sale:', hourly);

    // console.log("cookieStands is: ", cookieStands);
    setCookieStands([...cookieStands, location]);
    console.log("cookieStands is: ", cookieStands);
    // alert(location);

  }

  return (
    <>

      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <header className="flex items-center justify-between bg-green-500 text-black text-4xl font-sans font-semibold p-5">
        <p>Cookie Stand Admin</p>
        <p>X locations added</p>
      </header>

      <main className="flex flex-col items-center justify-center font-sans text-black p-5">

        <form onSubmit={createCookieStandHandler} className="flex flex-col items-center justify-evenly w-3/4 p-2 my-4 bg-green-300 rounded-lg">

          <div className="flex items-center justify-center text-3xl p-4">
              Create Cookie Stand
          </div>

          <div className="flex items-center flex-col w-full p-2 text-xl">

            <div className="flex items-center flex-row w-full">
              <label className="flex p-2">Location</label>
              <input type="text" name="location" id="id_location" className="flex-auto pl-1 "/>
            </div>

            <div className="flex flex-row p-4 w-full justify-evenly text-center">

              <div className="flex flex-col align-center items-center p-2 w-1/4">
                <label>Minimum Customers per Hour</label>
                <input type="number" min="0" name="min_cust" id="id_min_cust"></input>
              </div>

              <div className="flex flex-col align-center items-center p-2 w-1/4">
                <label>Maximum Customers per Hour</label>
                <input type="number" min="1" name="max_cust" id="id_max_cust"></input>
              </div>

              <div className="flex flex-col align-center items-center p-2 w-1/4">
                <label>Average Cookies per Sale</label>
                <input type="number" step="0.1" min="0.0" name="hourly" id="id_hourly"></input>
              </div>

              <div className="flex flex-col items-center p-2 w-1/4 cursor-pointer">
                <button name="createCookieStand" className="px-20 py-8 bg-green-500">
                  Create
                </button>
              </div>   
              
            </div>

          </div>

        </form>

        <div className="text-xl p-10">
          <p>Report Table Coming Soon...</p>
        </div>

      </main>

      <footer className="flex items-center justify-between bg-green-500 text-black p-5">
        <p>&copy;2023</p>
      </footer>

    </>
  );
}
