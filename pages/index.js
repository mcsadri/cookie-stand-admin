import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [cookieStands, setCookieStands] = useState([]);
  
  function createCookieStandHandler(event) {
    event.preventDefault();

    const cookieStand = {
      location: event.target.location.value,
      min_cust: event.target.min_cust.value,
      max_cust: event.target.max_cust.value,
      hourly: event.target.hourly.value,
      id: cookieStands.length
    };

    setCookieStands([...cookieStands, cookieStand]);
    // console.log("cookieStands is: ", cookieStands);

  }

  function getLatestCookieStand() {
    if (cookieStands.length === 0) {
      return 'Create a cookie stand...'
    }
    return `You just added the ${cookieStands[cookieStands.length - 1].location} cookie stand`;
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
          <p>{getLatestCookieStand()}</p>
        </div>

        {cookieStands.length > 0 && 
          <table className="w-1/2 mx-auto my-4 border border-collapse border-slate-500">

            <thead>
              <tr>
                <th className="border border-slate-500">id</th>
                <th className="border border-slate-500">Location</th>
                <th className="border border-slate-500">Min Custs/Hr</th>
                <th className="border border-slate-500">Max Custs/Hr</th>
                <th className="border border-slate-500">Avg Cookies Sold</th>
              </tr>
            </thead>

            <tbody>
              {cookieStands.map((stand) => {
                  return (
                    <tr key={stand.id}>
                      <td className="text-center border border-slate-500">{stand.id}</td>
                      <td className="pl-2 border border-slate-500">{stand.location}</td>
                      <td className="text-center border border-slate-500">{stand.min_cust}</td>
                      <td className="text-center border border-slate-500">{stand.max_cust}</td>
                      <td className="text-center border border-slate-500">{stand.hourly}</td>
                    </tr>
                  )
                })
              }
            </tbody>

            <tfoot>
            </tfoot>

          </table>
        }

      </main>

      <footer className="flex items-center justify-between bg-green-500 text-black p-5">
        <p>&copy;2023</p>
      </footer>

    </>
  );
}
