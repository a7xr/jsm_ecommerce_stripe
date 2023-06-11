import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';


const Layout = () => {
  return (
    <div className='layout'>
        <Head>
            <title>
                JS Mastery Store
            </title>
        </Head>
        <header>
            <Navbar></Navbar>
        </header>
        <main className='main-container'>

        </main>
    </div>
  )
}

export default Layout