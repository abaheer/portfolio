import Head from 'next/head';
import Navbar from "./components/navbar";
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { RiFlutterFill } from "react-icons/ri";
import { SiFirebase, SiReact, SiTailwindcss, SiPython, SiSelenium, SiGoogledrive, SiFigma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Home() {
  return (
    <div className="bg-gray-800 min-h-screen min-w-screen">
      <Head>
        <title>Baheer Ahmadzai</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <main>
        <section className="bg-gray-800 min-w-screen min-h-screen font-inter md:ml-20 md:mr-20 xl:ml-60 xl:mr-60">
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
            I'm Baheer! I am deeply intrigued by software development and automation tools. 
            My passion lies in creating automation tools and crafting solutions that enhance efficiency. 
            With a strong background in software and web development, 
            I immerse myself in designing innovative applications and systems that streamline processes and solve everyday challenges.
            </p>
          </div>

          </section>
          <section>

        <div className="text-center p-8 text-4xl font-extrabold ">
          <h1><span className="font-light">Featured</span> Projects</h1>
        </div>
        <div className="text-center">
        <div className="p-5 m-5 shadow-lg bg-gradient-to-l from-sky-900 to-gray-900 rounded-2xl center-text">
          <a href="https://github.com/abaheer/yt-to-drive" target="_blank">
              <h1 className="font-medium text-2xl text-center">dlpToDrive (Python/Tkinter/GoogleAuth)</h1>
              <h2 className="mt-3"> 
                dlpToDrive is a simple graphical interface I made for yt-dlp. 
                It allows users to download videos or playlists to their computer or google drive by utilizing Google Auth.
              </h2>
              <div className="flex justify-center text-2xl p-5 gap-5">
                  <AiFillGithub/>
                  <SiPython/>
                  <SiGoogledrive/>
              </div>
            </a>
          </div>

          <div className="p-5 m-5 shadow-lg bg-gradient-to-l  from-sky-900 to-gray-900 rounded-2xl">
            <a href="https://github.com/abaheer/scrape-project" target="_blank">
              <h1 className="font-medium text-2xl text-center">GamerPay Scraper (Python/Selenium)</h1>
              <h2 className="mt-3"> 
                This is a script that scrapes the website GamerPay.gg and notes listings in a CSV file. The script can also send an email to the user containing details about new listings.
              </h2>
              <div className="flex justify-center text-2xl p-5 gap-5">
                  <AiFillGithub/>
                  <SiPython/> 
                  <SiSelenium/>
              </div>
            </a>
          </div>
        
          <div className="p-5 m-5 shadow-lg bg-gradient-to-l  from-sky-900 to-gray-900 rounded-2xl">
            <a href="https://www.canva.com/design/DAFwD91CLfI/lmNXpFmMLeZTPBqG4DvwyA/edit?utm_content=DAFwD91CLfI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">
              <h1 className="font-medium text-2xl text-center">InnerPeace Mobile App</h1>
              <h2 className="mt-3"> 
                InnerPeace was developed by our group of 6 as a University Capstone project for our client, Allan Fowler. InnerPeace is a cross platform mobile app developed using Flutter and Firebase. It offers users many different interventions relax users. 
              </h2>
              <div className="flex justify-center text-2xl p-5 gap-5">
                  <AiFillGithub/>
                  <RiFlutterFill/>
                  <SiFirebase/>
                  <SiFigma/>
              </div>
            </a>
          </div>

          <div className="p-5 m-5 shadow-lg bg-gradient-to-l  from-sky-900 to-gray-900 rounded-2xl">
            <a href="https://github.com/abaheer/portfolio" target="_blank">
              <h1 className="font-medium text-2xl text-center">Personal Portfolio</h1>
              <h2 className="mt-3"> 
                This is a script that scrapes listings from the website GamerPay.gg using Selenium and notes listings in a CSV file. The script can also send an email to the user containing details about new listings.
              </h2>
              <div className="flex justify-center text-2xl p-5 gap-5">
                  <AiFillGithub/>
                  <SiReact/>
                  <SiTailwindcss/>
                  <TbBrandNextjs/>
              </div>
            </a>
          </div>
          </div>
          
    </section>
    </main>
    <footer className='ml-6'>@Baheer Ahmadzai</footer>
    </div>
  );
}
