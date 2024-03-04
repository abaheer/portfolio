import Head from 'next/head';
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Baheer Ahmadzai</title>
      </Head>
    <main>
      <section className="bg-gray-800 flex flex-col w-screen h-screen font-inter">
        <Navbar/>
      </section>
    </main>
    </div>
  );
}
