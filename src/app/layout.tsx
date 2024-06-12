"use client";
import { Inter, Goldman, Iceland } from "next/font/google";
import "./global.scss";
import logo from "@/../public/Logo.svg";
import arrowDown from "@/assets/arrowDown.svg";
import lnkdin from "@/assets/lnkdin.svg";
import github from "@/assets/github.svg";
import twitter from "@/assets/twitter.svg";
import Image from "next/image";
import Link from "next/link";
import useMainLayout from "@/hooks/useMainLayout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const goldman = Goldman({ weight: "400", subsets: ["latin"] });
const iceland = Iceland({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { onClick } = useMainLayout();
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href={logo.src} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`Ashish's Portfolio`}</title>
      </head>
      <body className={iceland.className}>
        <main id="main">
          <div id="right-pannel">
            <Image id="logo" src={logo} alt="logo" />
            <ul id="menu" className={goldman.className}>
              <li id="about" onClick={onClick}>
                <Link href="/about">About</Link>
              </li>
              <li id="skills" onClick={onClick}>
                <Link href="/skills">Skills</Link>
              </li>
              <li id="works" onClick={onClick}>
                <Link href="/works">Works</Link>
              </li>
              <li id="experience" onClick={onClick}>
                <Link href="/experience">Experience</Link>
              </li>
              <li id="contact" onClick={onClick}>
                <Link href="/contact">Contact</Link>
              </li>
              <li id="resume">
                Resume <Image src={arrowDown} alt="arrowDown" />
              </li>
            </ul>
            <ul id="socials">
              <li id="linkedin">
                <Link
                  href="https://www.linkedin.com/in/ashishup1999/"
                  target="_blank"
                >
                  <Image src={lnkdin} alt="lnkdin" />
                </Link>
              </li>
              <li id="github">
                <Link href="https://github.com/ashishup1999" target="_blank">
                  <Image src={github} alt="github" />
                </Link>
              </li>
              <li id="twitter">
                <Link href="https://x.com/ashishup03" target="_blank">
                  <Image src={twitter} alt="twitter" />
                </Link>
              </li>
            </ul>
          </div>
          <div id="content-pannel">{children}</div>
        </main>
      </body>
    </html>
  );
}
