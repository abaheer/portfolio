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
    <div className=" bg-gradient-to-b to-gray-900 from-gray-700 text-white">
      <Head>
        <title>Baheer Ahmadzai</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <main className="min-w-screen min-h-screen font-inter md:ml-20 md:mr-20 lg:mr-36 lg:ml:36 xl:mr-44 xl:ml-44 2xl:ml-80 2xl:mr-80">
        <section className="min-w-screen min-h-screen">
          <Navbar />

          <div className="text-center py-12 md:px-0 leading-10">
            <div className=" py-4">
              <h1 className="text-5xl font-extrabold font bg-gradient-to-r from-sky-600 to-sky-400 text-transparent text-white bg-clip-text lg:text-6xl xl:text-7xl">
                Baheer Ahmadzai
              </h1>
              <h3 className="text-l text-white ml-0 lg:text-xl">
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
                className=" rounded-3xl  mt-2 drop-shadow"
              />
            </div>

            <div className="flex justify-center text-5xl p-5 gap-5 text-white">
              <a href="https://github.com/abaheer" target="_blank">
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/baheer-ahmadzai-0568b02b8/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </div>

            <p className="leading-5 mt-2 lg:text-xl text-left m-10">
              Hi, I'm Baheer! I am deeply intrigued by software development and
              task automation. In particular, I enjoy developing solutions to
              save time for my friends and me and improve our quality of life.
              With a solid software and web development background, I hope to
              contribute to practical solutions on a larger scale. Regarding
              creative pursuits and other hobbies, I enjoy music production and
              video editing.
            </p>
          </div>
        </section>

        <section id="my-projects">
          <div className="text-center p-8 text-7xl font-extrabold ">
            <h1>
              <span className="font-light">Featured</span> Projects
            </h1>
          </div>

          <div className="flex flex-wrap justify-center mx-auto">
            <Project
              name="dlpToDrive"
              link="https://github.com/abaheer/yt-to-drive"
              desc="dlpToDrive is an intuitive graphical interface I developed to streamline video downloading through yt-dlp. With its user-friendly design, users can effortlessly download videos or playlists directly to their device or Google Drive. The integration of Google Authentication ensures seamless access to Google Drive, enhancing user convenience and security. dlpToDrive simplifies the process of managing and organizing downloaded content, offering a hassle-free solution for users seeking efficient video retrieval. Whether for personal use or professional projects, dlpToDrive empowers users with a reliable tool for accessing and storing multimedia content effortlessly."
              logos={[<AiFillGithub />, <SiPython />, <SiGoogledrive />]}
            />

            <Project
              name="GamerPay Scraper"
              link="https://github.com/abaheer/scrape-project"
              desc="The GamerPay-Scraper, an adept Python script utilizing Selenium, extracts data from GamerPay.gg, compiling listings into a CSV file. This versatile tool enables simultaneous querying of multiple links and filters listings based on specific sticker types, such as holo or foil, enhancing item valuation insights. Users receive detailed emails highlighting new listings meeting predefined criteria, ensuring timely updates on market trends. The script's output includes essential details like sale price, BUFF price, and stickers influencing item value. With configurable options to customize sticker preferences and email configurations, the GamerPay-Scraper offers a comprehensive solution for efficiently tracking and analyzing listings in the GamerPay marketplace."
              logos={[<AiFillGithub />, <SiPython />, <SiSelenium />]}
            />

            <Project
              name="InnerPeace Mobile App"
              link="https://www.capitalise.space/projects/6550cea11d6ecfc86ae8b0d6"
              desc="
              
InnerPeace, a collaborative effort by a team of six for a university capstone project, clinched the Capstone Community Impact Award. Designed to assist users in managing stress and anxiety, InnerPeace offers focused interventions via a mobile app built using Flutter and Firebase. Backed by scientific research, the app serves as a trusted digital companion, promoting mental clarity amidst chaos. With a minimalist design, InnerPeace stands out from cluttered mental health apps. It aspires to offer practical solutions on a larger scale, enabling users to achieve tranquility and enhanced mental well-being, a recognition reflected in winning the prestigious Capstone Community Impact Award."
              logos={[
                <AiFillGithub />,
                <RiFlutterFill />,
                <SiFirebase />,
                <SiFigma />,
              ]}
            />

            <Project
              name="abaheer.com"
              link="https://github.com/abaheer/portfolio"
              desc="
              The website creation began with planning the layout and design. Next.js, React, and Tailwind CSS were used to build the site, focusing on simplicity and functionality. Testing was conducted to ensure smooth performance across different devices. Vercel served as the hosting platform, making the site accessible online. Throughout the process, adjustments were made to enhance the overall user experience. The outcome is a straightforward website that effectively displays projects, adhering to modern web development practices."
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
      <footer className="ml-6">...</footer>
    </div>
  );
}
