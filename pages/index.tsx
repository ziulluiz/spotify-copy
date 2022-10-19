import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
     <main>
      <Sidebar/>
     </main>

     <div></div>
    </div>
  )
}

export default Home
