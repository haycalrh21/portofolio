/**
 * v0 by Vercel.
 * @see https://v0.dev/t/d5zz7snsar8
 */
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from 'next/image'



export default function Component() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const videoRef = useRef(null);

  useEffect(() => {
    // Mendapatkan elemen video dari referensi
    const videoElement = videoRef.current;

    // Setelah video dimuat, jalankan video
    videoElement.addEventListener('loadedmetadata', () => {
      videoElement.play();
    });

    // Setelah beberapa detik (contoh: 5 detik), hentikan video
    const stopVideoTimeout = setTimeout(() => {
      videoElement.pause();
    }, 5000); // Ganti angka ini dengan jumlah detik yang diinginkan

    // Membersihkan event listener dan timeout ketika komponen dibongkar
    return () => {
      videoElement.removeEventListener('loadedmetadata', () => {});
      clearTimeout(stopVideoTimeout);
    };
  }, []);

  return (
    <div key="1" className="min-h-screen bg-white">
    <nav className="bg-transparent py-5">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="font-bold text-xl text-blue-600">HyclRyhnsyh</div>
        <div className={`space-x-8 ${isMobile ? 'hidden' : 'lg:flex'}`}>
          <a className="text-gray-600 hover:text-gray-800" href="#header">
            Home
          </a>
          <a className="text-gray-600 hover:text-gray-800" href="#skills">
            Skills
          </a>
          <a className="text-gray-600 hover:text-gray-800" href="#portfolio">
            Portfolio
          </a>
          <a className="text-gray-600 hover:text-gray-800" href="#contact">
            Contact
          </a>
        </div>
        <div className={`${isMobile ? 'block' : 'hidden'} lg:hidden relative`}>
          <button aria-label="Open menu" className="text-black hover:text-black" onClick={toggleDropdown}>
            <MenuIcon className="h-6 w-6" />
          </button>
          {/* Tambahkan logika dropdown di sini */}
          {isMobile && isDropdownOpen && (
            <div className="lg:hidden absolute right-0 mt-2">
              {/* Isi dropdown menu di sini */}
              <div className="dropdown-content" style={{ backgroundColor: 'blue', textAlign: 'right' }}>
                <a className="block text-white py-2 px-4" href="#header">
                  Home
                </a>

                <a className="block text-white py-2 px-4" href="#skills">
                  Skills
                </a>
                <a className="block text-white py-2 px-4" href="#portfolio">
                  Portfolio
                </a>
                <a className="block text-white py-2 px-4" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
      <header id="header" className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex flex-col items-start space-y-8">
          <h1 className="font-bold text-4xl lg:text-5xl max-w-xl text-gray-900">
            Hello I'm
            <br />
            <span className="text-blue-600">Haycal Rayhansyah</span>
          </h1>
          <p className="font-light text-gray-800 text-lg">Junior Web Developer</p>
          <p className="font-light text-gray-800 text-lg">Im 25 years old, im freshgraduate from Indrapasta University, I have good adapbility, creative, and have
good interpersonal skills.I love working with you to create great web projects together.</p>
          <div className="flex space-x-4">
            <a aria-label="Instagram" href="#">
              <InstagramIcon className="h-8 w-8 text-blue-600" />
            </a>
            <a aria-label="Facebook" href="#">
              <FacebookIcon className="h-8 w-8 text-blue-600" />
            </a>

            <a aria-label="LinkedIn" href="#">
              <LinkedinIcon className="h-8 w-8 text-blue-600" />
            </a>
            <a aria-label="GitHub" href="#">
              <GithubIcon className="h-8 w-8 text-blue-600" />
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <img
            alt="Muhamad Fajar Ramadhan"
            className="rounded-full"
            height="240"
            src="/haycal.png"
            style={{
              aspectRatio: "240/240",
              objectFit: "cover",
            }}
            width="240"
          />
        </div>
      </header>
      <section id="skills" className="bg-gray-50 py-20 mt-20" >
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Skills</h2>
          <div className="flex flex-wrap justify-center mt-10">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white shadow rounded p-5 text-center">
                <Heading5Icon className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-700">HTML</h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white shadow rounded p-5 text-center">
                <CatIcon className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-700">CSS</h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white shadow rounded p-5 text-center">
                <ChromeIcon className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-700">Laravel</h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white shadow rounded p-5 text-center">
                <ComponentIcon className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-700">React</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="bg-blue-600 py-20 mt-20 lg:mt-60">
        <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-black">Portfolio</h2>

          <div className="flex flex-wrap -m-4">
            
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full overflow-hidden">
              <video ref={videoRef} width="640" height="360" controls autoPlay>
          <source src="/mobil.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
                <div className="p-6">
                  <h2 className="text-xl font-medium text-gray-900 mb-1">Booking Mobil</h2>
                  <p className="leading-relaxed mb-5">Website yang berisi untuk booking mobil dengan sistem pebayaran COD, dikemabang bersama tim saya.</p>
                  <div className="flex items-center flex-wrap ">

                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full overflow-hidden">
              <video ref={videoRef} width="640" height="360" controls autoPlay>
          <source src="/forum.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
                <div className="p-6">
                  <h2 className="text-xl font-medium text-gray-900 mb-1">Forum</h2>
                  <p className="leading-relaxed mb-5">Webisite dimana berisi orang yang bisa nanya apapun di forum ini.</p>
                  <div className="flex items-center flex-wrap">
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/3">
      <div className="h-full overflow-hidden">
        <video ref={videoRef} width="640" height="360" controls autoPlay>
          <source src="/layanan.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-1">Layanan</h2>
          <p className="leading-relaxed mb-5">Halaman ini sedang di kembangkan bersama tim saya.</p>
          <div className="flex items-center flex-wrap">
            {/* Konten lainnya */}
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Contact Me</h2>
          <p className="text-xl text-gray-600 mt-4">Have a question or want to work together?</p>
          <p className="text-xl text-gray-600 mt-4">This feature is not yet functional</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
            </div>
            <Button style={{ backgroundColor:'black' }}>Send message</Button>
          </div>
        </div>
      </section>
      <footer className="bg-blue-600 py-10 text-white mt-20">
        <div className="container mx-auto text-center">
          <p className="text-xl">© Haycal Rayhansyah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function CatIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  )
}


function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function Heading5Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M17 13v-3h4" />
      <path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
