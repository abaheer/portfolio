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
      <div>
          <img
            src="headshot-crop.jpg"
            alt="me"
            width={250}
            height={250}
            className="mr-4 rounded-full border-white border-4"
          />
            <h1 className="text-4xl font-extralight bg-gradient-to-r from-sky-600 to-sky-400 text-transparent bg-clip-text">
              Baheer <span className="font-bold">Ahmadzai</span>
            </h1>
            <h3 className="text-l text-white ml-1">
              Degree in <span className="font-bold">Computer Science</span> at
              The University of Auckland
            </h3>
      </div>
      </section>
    </main>
    </div>
  );
}
