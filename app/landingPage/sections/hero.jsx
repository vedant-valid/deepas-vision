

"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from "@/components/navbar";
import Paper from "../../../public/assets/border.png";
import Pic2 from "../../../public/assets/pic2.png";
import Pic3 from "../../../public/assets/newborder.png";
// import newf from "../../../public/assets/first.png";


export default function DeepasVisionWebsite() {
    const words = ["loop?", "doubt?", "guilt?"];
    const [currentWord, setCurrentWord] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex];
        const typingSpeed = deleting ? 40 : 90;

        const timeout = setTimeout(() => {
            if (!deleting) {
                if (charIndex < current.length) {
                    setCurrentWord((prev) => prev + current[charIndex]);
                    setCharIndex((prev) => prev + 1);
                } else {
                    setTimeout(() => setDeleting(true), 1400);
                }
            } else {
                if (charIndex > 0) {
                    setCurrentWord((prev) => prev.slice(0, -1));
                    setCharIndex((prev) => prev - 1);
                } else {
                    setDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, deleting, wordIndex]);

    return (
        <div id='home' className="relative min-h-screen bg-white">
<div className="relative w-full">
  {/* Torn Border Image (at bottom) */}
  <div className="w-full">
    <Image
      src={Paper}
      alt="Torn Border"
      className="w-full h-auto"
      priority
    />
  </div>
  </div>
  
  {/* <div className="absolute bottom-0 left-4 z-10 w-[170px] md:w-[210px]">
    <Image
      src={Pic3}
      alt="Golden Person Image"
      className="w-full h-auto object-contain"
      priority
    />
  </div> */}

  

  

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4">
                <Navbar />
                <main className="flex flex-col md:flex-row mt-10 md:mt-20 items-center">
                    <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-5xl md:text-7xl text-red-800 mb-4 md:mb-8">
  Stuck in a{" "}
  <span className="min-w-[11ch] text-left animate-pulse">
    {currentWord}
  </span>
</h2>

                        <p className="text-xl md:text-2xl text-red-800">
                            दौड़ का ये फेरा, कौन सा रास्ता है मेरा?
                        </p>
                    </div>
{/* 
                    <div className="w-full md:w-1/2">
                        <video
                            src="/videos/hero-medi-21 (1).mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto md:h-[80%] object-cover max-w-md mx-auto"
                        />
                    </div> */}
                    <div className="w-full md:w-1/2">
  <video
    src="/videos/hero-medi-21 (1).mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-auto object-cover max-w-lg mx-auto"
  />
</div>




                </main>
            </div>
        </div>
    );
}
