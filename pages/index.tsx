import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="">
     <Head>
      <title>Spotify 2.0</title>
     </Head>

     <h1>This a DOPE spotify 2.0 build</h1>
     <main>
      <Sidebar/>
     </main>

     <div></div>
    </div>
  )
}

export default Home
