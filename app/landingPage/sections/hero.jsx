// "use client";
// import { useState } from 'react';
// import Image from 'next/image';
// import Navbar from "@/components/navbar";
// import Paper from "../../../public/assets/paper1.png";


// export default function DeepasVisionWebsite() {
//     return (
//         <div className="relative min-h-screen">
       
            
      
//             {/* <div className="absolute top-0 left-0 w-full h-16">
//                 <Image
//                     src={Paper}
//                     alt="Torn Paper Top"
//                     objectFit='cover'
//                     className='w-full h-full'
//                 />
//             </div> */}
//             <div className="absolute bottom-0 left-0 w-full h-16">
//                 <Image
//                     src={Paper}
//                     alt="Torn Paper Top"
//                     objectFit='cover'
//                     className='w-full h-full rotate-180'
//                 />
//             </div>
            
//             {/* Main content container */}
//             <div className="relative max-w-7xl mx-auto px-4">
//                 <Navbar />
                
//                 <main className="flex flex-col md:flex-row mt-10 md:mt-20 items-center">
//                     {/* Left side content */}
//                     <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 ">
//                         <h2 className="text-4xl md:text-6xl font-serif text-red-800 mb-4 md:mb-8 text-amber-900">Stuck In A Doubt?</h2>
//                         <p className="text-xl md:text-2xl text-amber-900 font-normal">
//                             दौड़ का ये फेरा, कौन सा रास्ता है मेरा?
//                         </p>
                        
//                         {/* Illustration */}
//                         <div className="mt-12 md:mt-24">
//                         </div>
//                     </div>
                    
//                     <div className="w-full md:w-1/2">
//                         <video
//                             src="/videos/herov.mp4"
//                             autoPlay
//                             muted
//                             loop
//                             playsInline
//                             className="w-full h-auto md:h-[80%] object-cover rounded-full max-w-md mx-auto"
//                         />
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// }

"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from "@/components/navbar";
import Paper from "../../../public/assets/paper1.png";
import Pic2 from "../../../public/assets/pic2.png";

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
        <div id='home' className="relative min-h-screen">
             <div className="absolute bottom-0 left-0 w-full h-16">
                <Image
                    src={Paper}
                    alt="Torn Paper Bottom"
                    objectFit='cover'
                    className='w-full h-full rotate-180'
                />
            </div>
            <div className="absolute bottom-8 left-0 h-60 z-10">
        <Image
            src={Pic2}
            alt="Pic2 Bottom Left"
            objectFit='cover'
            className='w-full h-full'
        />
    </div>

             <div className="relative max-w-7xl mx-auto px-4">
                <Navbar />

                <main className="flex flex-col md:flex-row mt-10 md:mt-20 items-center">
                     <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <h2 className="text-4xl md:text-6xl   text-red-800 mb-4 md:mb-8">
                            Stuck in a{" "}
                            <span className=" min-w-[11ch] text-left animate-pulse">
                                {currentWord}
                            </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-red-800  ">
                            दौड़ का ये फेरा, कौन सा रास्ता है मेरा?
                        </p>
                      
                    </div>

                     <div className="w-full md:w-1/2">
                        <video
                            src="/videos/herov.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto md:h-[80%] object-cover rounded-full max-w-md mx-auto"
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}
