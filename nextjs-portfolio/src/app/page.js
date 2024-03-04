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

      <section className="bg-gray-800 min-w-screen min-h-screen font-inter">
        <div className="text-center p-8 text-4xl font-extrabold">
          <h1>PROJECTS</h1>
        </div>

        <a href="https://github.com/abaheer/yt-to-drive" target="_blank">
          <div className="p-5 m-5 shadow-lg bg-gradient-to-l from-gray-800 to-gray-900 ">
            <h1 className="font-medium text-2xl text-center">dlpToDrive (Python/Tkinter/GoogleAuth)</h1>
            <h2 className="mt-3"> 
              dlpToDrive is a simple graphical interface I made for yt-dlp. 
              It allows users to download videos or playlists to their computer or google drive by utilizing Google Auth.
            </h2>
            <div className="flex justify-center text-5xl p-5 gap-5">
                <AiFillGithub/>
            </div>
          </div>
        </a>

        <a href="https://github.com/abaheer/scrape-project" target="_blank">
          <div className="p-5 m-5 shadow-lg bg-gradient-to-l from-gray-800 to-gray-900 ">
            <h1 className="font-medium text-2xl text-center">GamerPay Scraper (Python/Selenium)</h1>
            <h2 className="mt-3"> 
              This is a script that scrapes the website GamerPay.gg and notes listings in a CSV file. The script can also send an email to the user containing details about new listings.
            </h2>
            <div className="flex justify-center text-5xl p-5 gap-5">
                <AiFillGithub/>
            </div>
          </div>
        </a>
        
        <a href="https://github.com/abaheer/scrape-project" target="_blank">
          <div className="p-5 m-5 shadow-lg bg-gradient-to-l from-gray-800 to-gray-900 ">
            <h1 className="font-medium text-2xl text-center">GamerPay Scraper (Python/Selenium)</h1>
            <h2 className="mt-3"> 
              This is a script that scrapes the website GamerPay.gg and notes listings in a CSV file. The script can also send an email to the user containing details about new listings.
            </h2>
            <div className="flex justify-center text-5xl p-5 gap-5">
                <AiFillGithub/>
            </div>
          </div>
        </a>

      </section>

    </main>
    </div>
  );
}
