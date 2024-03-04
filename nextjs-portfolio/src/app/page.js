import Head from 'next/head';
import Navbar from "./components/navbar";
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Baheer Ahmadzai</title>
      </Head>
      <main>
        <section className="bg-gray-800 min-w-screen min-h-screen font-inter">
          <Navbar/>
          <div className="text-center p-12 leading-10">
          <div className=" py-4">
              <h1 className="text-4xl font-extrabold font bg-gradient-to-r from-sky-600 to-sky-400 text-transparent bg-clip-text">Baheer Ahmadzai</h1>
              <h3 className="text-l text-white ml-1">
                Degree in <span className="font-bold">Computer Science</span> at
                UoA
              </h3>
            </div>
            <div className="flex justify-center">
              <Image
                src="/headshot-crop.jpg"
                alt="me"
                width={300}
                height={300}
                className="rounded-full border-white border-4 mt-2"
              />
            </div>
            <div className="flex justify-center text-5xl p-5 gap-5">
              <AiFillGithub/>
              <AiFillLinkedin/>
              <AiOutlineMail/>
            </div>
            <p className='leading-5 mt-2'>
            I'm Baheer Ahmadzai! I am deeply intrigued by software development and automation tools. 
            My passion lies in creating automation tools and crafting solutions that enhance efficiency. 
            With a strong background in software and web development, 
            I immerse myself in designing innovative applications and systems that streamline processes and solve everyday challenges.
            </p>
          </div>
      </section>

    </main>
    </div>
  );
}
