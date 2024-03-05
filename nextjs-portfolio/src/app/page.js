import Head from "next/head";
import Navbar from "./components/navbar";
import Project from "./components/project";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { RiFlutterFill } from "react-icons/ri";
import {
  SiFirebase,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiSelenium,
  SiGoogledrive,
  SiFigma,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Home() {
  return (
    <div className="bg-gray-800">
      <Head>
        <title>Baheer Ahmadzai</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <main className="min-w-screen min-h-screen font-inter md:ml-20 md:mr-20 xl:ml-60 xl:mr-60">
        <section className="min-w-screen min-h-screen">
          <Navbar />

          <div className="text-center p-12 leading-10">
            <div className=" py-4">
              <h1 className="text-4xl font-extrabold font bg-gradient-to-r from-sky-600 to-sky-400 text-transparent bg-clip-text">
                Baheer Ahmadzai
              </h1>
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
              <AiFillGithub />
              <AiFillLinkedin />
              <AiOutlineMail />
            </div>

            <p className="leading-5 mt-2">
              Hi, I'm Baheer! I am deeply intrigued by software development and
              automation tools. My passion lies in creating automation tools and
              crafting solutions that enhance efficiency. With a strong
              background in software and web development, I immerse myself in
              designing innovative applications and systems that streamline
              processes and solve everyday challenges.
            </p>
          </div>
        </section>

        <section id="my-projects">
          <div className="text-center p-8 text-4xl font-extrabold ">
            <h1>
              <span className="font-light">Featured</span> Projects
            </h1>
          </div>

          <div className="text-center mx-auto">
            <Project
              name="dlpToDrive"
              link="https://github.com/abaheer/yt-to-drive"
              desc="dlpToDrive is a simple graphical interface I made for yt-dlp. 
                      It allows users to download videos or playlists to their computer or 
                      google drive by utilizing Google Auth."
              logos={[<AiFillGithub />, <SiPython />, <SiGoogledrive />]}
            />

            <Project
              name="GamerPay Scraper"
              link="https://github.com/abaheer/scrape-project"
              desc="This is a script that scrapes the website GamerPay.gg and notes listings in a 
                      CSV file. The script can also send an email to the user containing details 
                      about new listings."
              logos={[<AiFillGithub />, <SiPython />, <SiSelenium />]}
            />

            <Project
              name="GamerPay Scraper"
              link="https://github.com/abaheer/scrape-project"
              desc="InnerPeace was developed by in a group of 6 as a University Capstone project for our 
                      client. InnerPeace is a cross platform mobile app developed using Flutter and Firebase. 
                      It offers users many different interventions to encourage relaxation."
              logos={[
                <AiFillGithub />,
                <RiFlutterFill />,
                <SiFirebase />,
                <SiFigma />,
              ]}
            />

            <Project
              name="Personal Portfolio"
              link="https://github.com/abaheer/portfolio"
              desc="A simple portfolio to showcase some projects I have created."
              logos={[
                <AiFillGithub />,
                <SiReact />,
                <SiTailwindcss />,
                <TbBrandNextjs />,
              ]}
            />
          </div>
        </section>
      </main>
      <footer className="ml-6">@Baheer Ahmadzai</footer>
    </div>
  );
}
