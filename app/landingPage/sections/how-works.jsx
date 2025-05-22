// "use client"
// import { useState, useRef, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export default function StickyLayout() {
//   // Sample data for the cards
//   const [cards] = useState([
//     { 
//       id: 1, 
//       title: 'Digital Innovation', 
//       content: 'Transforming ideas into digital experiences that resonate with your audience and drive engagement.',
//       icon: '✨'
//     },
//     { 
//       id: 2, 
//       title: 'Creative Solutions', 
//       content: 'Solving complex problems with elegant, intuitive designs that prioritize user experience.',
//       icon: '💡'
//     },
//     { 
//       id: 3, 
//       title: 'Responsive Design', 
//       content: 'Creating seamless experiences across all devices with adaptive layouts and interactions.',
//       icon: '📱'
//     },
//     { 
//       id: 4, 
//       title: 'Performance Optimization', 
//       content: 'Enhancing speed and efficiency to deliver lightning-fast experiences that users love.',
//       icon: '⚡'
//     },
//     { 
//       id: 5, 
//       title: 'Future Technology', 
//       content: 'Adopting emerging technologies to keep your digital presence ahead of the curve.',
//       icon: '🚀'
//     },
//   ]);

//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef
//   });

//   // Parallax effects
//   const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
//   const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
//   const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

//   // GSAP-like animation on component mount
//   useEffect(() => {
//     const animateElements = document.querySelectorAll('.animate-in');

//     animateElements.forEach((el, index) => {
//       setTimeout(() => {
//         el.classList.add('animated');
//       }, index * 120);
//     });
//   }, []);

//   return (
//     <div className="flex w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800" ref={containerRef}>
//       {/* Left sticky div with parallax effect */}
//       <div className="w-2/5 sticky top-0 h-screen overflow-hidden flex items-center">
//         <div className="relative w-full h-full flex items-center justify-center">
//           {/* Background gradient circles with parallax */}
//           <motion.div 
//             className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl"
//             style={{ y: backgroundY, x: -50 }}
//           />
//           <motion.div 
//             className="absolute w-64 h-64 rounded-full bg-purple-500 opacity-20 blur-3xl"
//             style={{ y: backgroundY, x: 120 }}
//           />

//           {/* Content with parallax */}
//           <div className="relative z-10 text-center px-12">
//             <motion.div style={{ y: titleY }}>
//               <h1 className="text-5xl font-bold mb-2 text-white animate-in opacity-0">
//                 Interactive
//               </h1>
//               <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-in opacity-0" style={{ animationDelay: '100ms' }}>
//                 Experiences
//               </h1>
//             </motion.div>

//             <motion.div style={{ y: subtitleY }}>
//               <p className="text-lg text-gray-300 max-w-xs mx-auto mb-8 animate-in opacity-0" style={{ animationDelay: '200ms' }}>
//                 Scroll to discover our innovative digital solutions
//               </p>

//               <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg animate-in opacity-0" style={{ animationDelay: '300ms' }}>
//                 Explore Now
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Right scrollable section with animated cards */}
//   {/* Right scrollable stacking section */}
// <div className="w-3/5 relative">
//   <div className="relative h-[500vh]">
//     {cards.map((card, index) => {
//       const start = index / cards.length;
//       const end = (index + 1) / cards.length;

//       const cardY = useTransform(scrollYProgress, [start, end], [100, 0]);

//       return (
//         <motion.div 
//           key={card.id}
//           className="sticky top-0 h-screen flex items-center justify-center"
//           style={{ y: cardY }}
//         >
//           <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl border border-gray-700 w-4/5 h-[80%] flex flex-col justify-center hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300">
//             <div className="text-center">
//               <div className="text-4xl mb-4">{card.icon}</div>
//               <h3 className="text-2xl font-bold mb-3 text-white">{card.title}</h3>
//               <p className="text-gray-300 mb-6 max-w-lg mx-auto">{card.content}</p>
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
//               >
//                 Learn More
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       );
//     })}
//   </div>
// </div>


//       {/* CSS for entry animations */}
//       <style jsx>{`
//         .animate-in {
//           transform: translateY(20px);
//           transition: opacity 0.8s ease-out, transform 0.8s ease-out;
//           transition-delay: var(--delay, 0ms);
//         }

//         .animate-in.animated {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </div>
//   );
// }


// "use client"
// import { useState, useRef, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export default function StickyLayout() {
//   const [cards] = useState([
//     { id: 1, title: 'Zodiac Insights', content: 'Explore the core traits and cosmic forces that define your zodiac sign.', icon: '♈' },
//     { id: 2, title: 'Daily Horoscope', content: 'Start your day with personalized astrological guidance tailored just for you.', icon: '🔮' },
//     { id: 3, title: 'Compatibility Match', content: 'Uncover your ideal matches in love, friendship, and business through the stars.', icon: '💞' },
//     { id: 4, title: 'Moon Phases', content: 'Understand the influence of lunar cycles on your emotions and decisions.', icon: '🌙' },
//     { id: 5, title: 'Astrological Forecast', content: 'Look ahead with celestial predictions to navigate your life path with clarity.', icon: '✨' },
//   ]);

//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: containerRef });

//   const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
//   const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
//   const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

//   useEffect(() => {
//     const animateElements = document.querySelectorAll('.animate-in');
//     animateElements.forEach((el, index) => {
//       setTimeout(() => {
//         el.classList.add('animated');
//       }, index * 120);
//     });
//   }, []);

//   return (
//     <div className="flex w-full min-h-screen bg-white text-gray-900" ref={containerRef}>

//       {/* Left Section */}
//       <div className="w-2/5 sticky top-0 h-screen overflow-hidden flex items-center">
//         <div className="relative w-full h-full flex items-center justify-center">
//           {/* Decorative motion elements */}
//           <motion.div 
//             className="absolute w-96 h-96 rounded-full bg-red-200 opacity-30 blur-3xl"
//             style={{ y: backgroundY, x: -50 }}
//           />
//           <motion.div 
//             className="absolute w-64 h-64 rounded-full bg-red-300 opacity-30 blur-3xl"
//             style={{ y: backgroundY, x: 120 }}
//           />

//           <div className="relative z-10 text-center px-12">
//             <motion.div style={{ y: titleY }}>
//               <h1 className="text-5xl font-bold mb-2 text-red-800 animate-in opacity-0">
//                 Celestial
//               </h1>
//               <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600 animate-in opacity-0">
//                 Astrology
//               </h1>
//             </motion.div>

//             <motion.div style={{ y: subtitleY }}>
//               <p className="text-lg text-gray-700 max-w-xs mx-auto mb-8 animate-in opacity-0">
//                 Scroll through the stars to unveil your cosmic story
//               </p>

//               <button className="bg-red-800 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium shadow-md animate-in opacity-0">
//                 Discover Now
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Right Cards Section */}
//       <div className="w-3/5 relative">
//         <div className="relative h-[500vh]">
//           {cards.map((card, index) => {
//             const start = index / cards.length;
//             const end = (index + 1) / cards.length;
//             const cardY = useTransform(scrollYProgress, [start, end], [100, 0]);

//             return (
//               <motion.div 
//                 key={card.id}
//                 className="sticky top-0 h-screen flex items-center justify-center"
//                 style={{ y: cardY }}
//               >
//                 <div className="bg-white p-8 rounded-xl shadow-xl   w-4/5 h-[60%] flex flex-col justify-center hover:shadow-2xl hover:border-red-300 transition-all duration-300">
//                   <div className="text-center">
//                     <div className="text-4xl mb-4">{card.icon}</div>
//                     <h3 className="text-2xl font-bold mb-3 text-red-800">{card.title}</h3>
//                     <p className="text-gray-700 mb-6 max-w-lg mx-auto">{card.content}</p>
//                     <motion.button 
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
//                     >
//                       Learn More
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Entry Animation Styles */}
//       <style jsx>{`
//         .animate-in {
//           transform: translateY(20px);
//           transition: opacity 0.8s ease-out, transform 0.8s ease-out;
//         }

//         .animate-in.animated {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client"
// import { useState, useRef, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export default function StickyLayout() {
//   const [cards] = useState([
//     { 
//       id: 1, 
//       title: 'Your Zodiac Sign', 
//       content: 'Discover how your astrological sign influences your personality, relationships, and life path based on celestial alignments at your birth.',
//       icon: '♈',
//       extra: [
//         "Aries (Mar 21 - Apr 19): Bold & ambitious",
//         "Taurus (Apr 20 - May 20): Practical & sensual",
//         "Gemini (May 21 - Jun 20): Adaptable & curious",
//         "Cancer (Jun 21 - Jul 22): Intuitive & emotional"
//       ]
//     },
//     { 
//       id: 2, 
//       title: 'Planetary Transits', 
//       content: 'Understand how current planetary movements affect your zodiac sign and what cosmic energies you should harness this month.',
//       icon: '🪐',
//       extra: [
//         "Mercury Retrograde: Communication challenges",
//         "Venus in Leo: Bold romantic expressions",
//         "Mars in Gemini: Mental energy boost",
//         "Jupiter in Taurus: Financial growth"
//       ]
//     },
//     { 
//       id: 3, 
//       title: 'Daily Horoscope', 
//       content: 'Your personalized forecast for today based on the Moon phase and planetary aspects influencing your sign.',
//       icon: '🔮',
//       extra: [
//         "Love: Unexpected connections likely",
//         "Career: New opportunities emerging",
//         "Health: Focus on hydration",
//         "Luck: 4/5 stars - take calculated risks"
//       ]
//     },
//     { 
//       id: 4, 
//       title: 'Birth Chart Analysis', 
//       content: 'Deep dive into your unique astrological blueprint showing planetary positions at your exact time and place of birth.',
//       icon: '🌌',
//       extra: [
//         "Sun Sign: Core identity",
//         "Moon Sign: Emotional nature",
//         "Ascendant: Outer personality",
//         "Midheaven: Career path"
//       ]
//     },
//     { 
//       id: 5, 
//       title: 'Moon Phases', 
//       content: 'How the current lunar cycle affects your energy levels, emotions, and manifestation power.',
//       icon: '🌕',
//       extra: [
//         "New Moon: Set intentions",
//         "Waxing Moon: Take action",
//         "Full Moon: Release & harvest",
//         "Waning Moon: Reflect & rest"
//       ]
//     },
//   ]);

//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef
//   });

//   // Parallax effects
//   const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
//   const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
//   const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

//   // Card stacking effect
//   const cardProgress = useTransform(scrollYProgress, [0, 1], [0, cards.length - 1]);

//   useEffect(() => {
//     const animateElements = document.querySelectorAll('.animate-in');

//     animateElements.forEach((el, index) => {
//       setTimeout(() => {
//         el.classList.add('animated');
//       }, index * 120);
//     });
//   }, []);

//   return (
//     <div className="flex w-full min-h-screen bg-white" ref={containerRef}>
//       {/* Left sticky div with parallax effect */}
//       <div className="w-2/5 sticky top-0 h-screen overflow-hidden flex items-center">
//         <div className="relative w-full h-full flex items-center justify-center">
//           {/* Background elements */}
//           <motion.div 
//             className="absolute w-96 h-96 rounded-full bg-red-100 blur-3xl"
//             style={{ y: backgroundY, x: -50 }}
//           />
//           <motion.div 
//             className="absolute w-64 h-64 rounded-full bg-red-200 blur-3xl"
//             style={{ y: backgroundY, x: 120 }}
//           />

//           {/* Content with parallax */}
//           <div className="relative z-10 text-center px-12">
//             <motion.div style={{ y: titleY }}>
//               <h1 className="text-5xl font-bold mb-2 text-gray-900 animate-in opacity-0">
//                 Celestial
//               </h1>
//               <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-800 animate-in opacity-0" style={{ animationDelay: '100ms' }}>
//                 Revelations
//               </h1>
//             </motion.div>

//             <motion.div style={{ y: subtitleY }}>
//               <p className="text-lg text-gray-600 max-w-xs mx-auto mb-8 animate-in opacity-0" style={{ animationDelay: '200ms' }}>
//                 Unveil the cosmic secrets written in your stars
//               </p>

//               <button className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white px-8 py-3 rounded-lg font-medium shadow-lg animate-in opacity-0" style={{ animationDelay: '300ms' }}>
//                 Discover Now
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Right scrollable section with stacked sticky cards */}
//       <div className="w-3/5 relative">
//         <div className="sticky top-0 h-screen overflow-hidden">
//           {cards.map((card, index) => {
//             // Calculate position and scale for each card based on scroll progress
//             const cardY = useTransform(
//               cardProgress,
//               [index - 1, index, index + 1],
//               [100, 0, -100]
//             );

//             const cardScale = useTransform(
//               cardProgress,
//               [index - 1, index, index + 1],
//               [0.8, 1, 0.8]
//             );

//             const cardOpacity = useTransform(
//               cardProgress,
//               [index - 1, index, index + 1],
//               [0, 1, 0]
//             );

//             return (
//               <motion.div
//                 key={card.id}
//                 className="absolute inset-0 flex items-center justify-center p-16"
//                 style={{
//                   zIndex: cards.length - index,
//                   y: cardY,
//                   scale: cardScale,
//                   opacity: cardOpacity,
//                 }}
//               >
//                 <div className="w-full h-[28rem] bg-white p-8 rounded-xl shadow-lg border border-red-100 flex flex-col justify-center hover:shadow-xl hover:border-red-300 transition-all duration-300">
//                   <div className="text-center">
//                     <div className="text-5xl mb-4 text-red-700">{card.icon}</div>
//                     <h3 className="text-2xl font-bold mb-3 text-gray-900">{card.title}</h3>
//                     <p className="text-gray-600 mb-6 max-w-lg mx-auto">{card.content}</p>

//                     <div className="grid grid-cols-2 gap-3 mt-6 mb-8 max-w-md mx-auto">
//                       {card.extra.map((item, i) => (
//                         <div key={i} className="text-left p-3 bg-red-50 rounded-lg border border-red-100">
//                           <p className="text-sm text-gray-700">{item}</p>
//                         </div>
//                       ))}
//                     </div>

//                     <motion.button 
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
//                     >
//                       Read More
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Spacer to enable scrolling */}
//         <div style={{ height: `${cards.length * 100}vh` }} />
//       </div>

//       {/* CSS for entry animations */}
//       <style jsx>{`
//         .animate-in {
//           transform: translateY(20px);
//           transition: opacity 0.8s ease-out, transform 0.8s ease-out;
//           transition-delay: var(--delay, 0ms);
//         }

//         .animate-in.animated {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </div>
//   );
// }


"use client"
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Paper from "../../../public/assets/paper1.png";
import Image from "next/image";

import {
    UserCheck,
    BookOpenCheck,
    BrainCircuit,
    Compass,
    Map,
} from 'lucide-react';

export default function StickyLayout() {
    const [cards] = useState([
        {
            id: 1,
            title: '1:1 Strategic Session',
            content: 'A calm, focused one-on-one session rooted in the formula: Strategy + Direction – (Chaos × Doubts). Get your unlimited questions answered with logic and methods.',
            icon: <UserCheck className="w-6 h-6 text-red-800" />,
        },
        {
            id: 2,
            title: 'Astrology as a Science',
            content: 'This isn’t ₹5/min fortune-telling—it’s deep science. Experience an insightful blend of Vedic Astrology, Numerology, and Time Period analysis.',
            icon: <BookOpenCheck className="w-6 h-6 text-red-800" />,
        },
        {
            id: 3,
            title: 'The दीक्षा Process',
            content: 'Dive into a detailed study of your 9 charts, numerology, and timelines to get clarity that goes beyond predictions—towards purpose.',
            icon: <BrainCircuit className="w-6 h-6 text-red-800" />,
        },
        {
            id: 4,
            title: 'Clarity Over Confusion',
            content: 'Replace doubts with direction. Leave the session with actionable insights, emotional calm, and a map of your potential paths.',
            icon: <Compass className="w-6 h-6 text-red-800" />,
        },
        {
            id: 5,
            title: 'From Possibility to Plan',
            content: 'After a satisfying discussion, we’ll decode the most aligned choices, opportunities, and fields awaiting you.',
            icon: <Map className="w-6 h-6 text-red-800" />,
        },
    ]);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

    useEffect(() => {
        const animateElements = document.querySelectorAll('.animate-in');
        animateElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animated');
            }, index * 120);
        });
    }, []);

    return (
        <div id='about' className="flex relative flex-col md:flex-row w-full min-h-screen bg-white text-gray-900" ref={containerRef}>
            <div className="absolute -top-1 left-0 w-full h-16">
                <Image
                    src={Paper}
                    alt="Torn Paper Top"
                    objectFit="cover"
                    className="w-full h-full"
                />
            </div>
            <div className="w-full md:w-2/5 md:sticky md:top-0 h-auto md:h-screen flex items-center justify-center py-8 md:py-0">
                <div className="relative w-full h-full flex items-center justify-center px-4 md:px-8">
                    <motion.div
                        className="absolute w-80 h-80 rounded-full bg-red-200 opacity-20 blur-2xl hidden md:block"
                        style={{ y: backgroundY, x: -60 }}
                    />
                    <motion.div
                        className="absolute w-52 h-52 rounded-full bg-red-300 opacity-20 blur-2xl hidden md:block"
                        style={{ y: backgroundY, x: 100 }}
                    />

                    <div className="relative z-10 text-center max-w-md">
                        <motion.div style={{ y: titleY }}>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600 animate-in opacity-0">
                                How It Works
                            </h1>
                        </motion.div>

                        <motion.div style={{ y: subtitleY }} className="space-y-6">
                            <div className="text-left space-y-4 animate-in opacity-0">
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    With years of experience in <span className="font-semibold text-red-700">वैदिक Astrology</span>, <span className="font-semibold text-red-700">Numerology</span>, and <span className="font-semibold text-red-700">Lal Kitab</span>, we offer <span className="font-semibold">कर्मिक उपाय</span> and guide you toward the right <span className="font-semibold">करियर</span> and <span className="font-semibold">जीवन मार्ग</span> — not through <span className="font-semibold">भय</span>, but with clarity and meaningful solutions to enrich your <span className="font-semibold">जीवन</span>.
                                </p>

                                <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r">
                                    <p className="text-red-900 font-medium italic">
                                        "Simply we will tell you → What you can do better than others, हाउ you can outsmart the race & Troubles"
                                    </p>
                                </div>
                            </div>

                            <button className="bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-medium shadow-md animate-in opacity-0 transition-all duration-300">
                                Discover Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-3/5">
                <div className="relative hidden md:block h-[500vh]">
                    {cards.map((card, index) => {
                        const start = index / cards.length;
                        const end = (index + 1) / cards.length;
                        const cardY = useTransform(scrollYProgress, [start, end], [100, 0]);

                        return (
                            <motion.div
                                key={card.id}
                                className="sticky top-0 h-screen flex items-center justify-center"
                                style={{ y: cardY }}
                            >
                                <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 w-4/5 h-[50%] flex flex-col justify-center hover:shadow-2xl hover:border-red-300 transition-all duration-300">
                                    <div className="text-center">
                                        <div className="text-4xl mb-4">{card.icon}</div>
                                        <h3 className="text-2xl font-bold mb-3 text-red-800">{card.title}</h3>
                                        <p className="text-gray-700 mb-6 max-w-lg mx-auto">{card.content}</p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
                                        >
                                            Learn More
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="block md:hidden px-4 space-y-8 py-6">
                    {cards.map(card => (
                      <div
                      key={card.id}
                      className="bg-gradient-to-br from-red-50 via-white to-red-100 p-6 rounded-xl shadow-md border border-gray-200 transition hover:shadow-lg"
                    >
                            <div className="text-center">
                                <div className="text-3xl mb-2">{card.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-red-800">{card.title}</h3>
                                <p className="text-gray-700 mb-4">{card.content}</p>
                                <button className="bg-red-800 hover:bg-red-700 text-white px-5 py-2 rounded-md text-sm">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .animate-in {
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .animate-in.animated {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
        </div>
    );
}