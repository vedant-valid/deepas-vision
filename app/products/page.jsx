// // pages/products.js
// "use client";
// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import { motion, AnimatePresence } from 'framer-motion';

// const ProductsPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedGemstone, setSelectedGemstone] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // Sample gemstone data with cosmic properties
//   const gemstones = [
//     {
//       id: 1,
//       name: 'Ruby',
//       category: 'precious',
//       price: 299,
//       description: 'The king of gemstones, Ruby channels the fiery energy of the Sun, enhancing vitality, passion, and leadership qualities. Worn by royalty throughout history for its protective and prosperity-attracting properties.',
//       benefits: ['Boosts confidence & courage', 'Enhances vitality & life force', 'Attracts passionate love', 'Stimulates the root chakra'],
//       image: 'https://images.unsplash.com/photo-1522776851755-3914469f0ca2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       zodiac: 'Leo ♌',
//       chakra: 'Heart Chakra',
//       planet: 'Sun ☉',
//       origin: 'Myanmar, Mozambique',
//       hardness: '9.0 Mohs',
//       rating: 4.8,
//       celestialProperties: 'Aligns with solar energy, best worn on Sundays'
//     },
//     {
//       id: 2,
//       name: 'Emerald',
//       category: 'precious',
//       price: 349,
//       description: 'The stone of divine wisdom, Emerald enhances mental clarity, communication skills, and intuition. Ancient texts describe it as the "gem of successful love" that brings harmony and domestic bliss.',
//       benefits: ['Enhances memory & concentration', 'Strengthens intuition', 'Brings harmony in relationships', 'Opens heart to unconditional love'],
//       image: '/emerald.jpg',
//       zodiac: 'Gemini ♊, Taurus ♉',
//       chakra: 'Heart Chakra',
//       planet: 'Mercury ☿',
//       origin: 'Colombia, Zambia',
//       hardness: '7.5-8 Mohs',
//       rating: 4.6,
//       celestialProperties: 'Mercurial influence, ideal for Wednesdays'
//     },
//     {
//       id: 3,
//       name: 'Yellow Sapphire',
//       category: 'precious',
//       price: 399,
//       description: 'The ultimate stone of prosperity, Yellow Sapphire attracts wealth, good fortune, and spiritual growth. Vedic texts recommend it for success in education, career, and marital harmony.',
//       benefits: ['Attracts wealth & abundance', 'Enhances wisdom & learning', 'Strengthens Jupiter blessings', 'Promotes marital happiness'],
//       image: 'https://images.unsplash.com/photo-1522776851755-3914469f0ca2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       zodiac: 'Sagittarius ♐, Pisces ♓',
//       chakra: 'Solar Plexus',
//       planet: 'Jupiter ♃',
//       origin: 'Sri Lanka, Thailand',
//       hardness: '9.0 Mohs',
//       rating: 4.9,
//       celestialProperties: 'Jupiter\'s gem, most powerful on Thursdays'
//     },
//     {
//       id: 4,
//       name: 'Amethyst',
//       category: 'semi-precious',
//       price: 199,
//       description: 'A stone of spiritual protection and purification, Amethyst connects to higher consciousness while grounding spiritual energy. Used by ancient Greeks to prevent intoxication and enhance clarity.',
//       benefits: ['Calms anxiety & stress', 'Enhances intuition & psychic abilities', 'Promotes emotional balance', 'Aids in sobriety & addiction recovery'],
//       image: 'https://images.unsplash.com/photo-1522776851755-3914469f0ca2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       zodiac: 'Pisces ♓, Virgo ♍',
//       chakra: 'Crown & Third Eye',
//       planet: 'Jupiter ♃, Saturn ♄',
//       origin: 'Brazil, Uruguay',
//       hardness: '7.0 Mohs',
//       rating: 4.7,
//       celestialProperties: 'Best during Saturn transits, powerful full moon cleanser'
//     },
//     {
//       id: 5,
//       name: 'Citrine',
//       category: 'semi-precious',
//       price: 179,
//       description: 'Known as the "Merchant\'s Stone", Citrine carries the power of the sun, manifesting wealth, success, and abundance. Its golden rays energize every level of life and never needs cleansing.',
//       benefits: ['Manifests wealth & prosperity', 'Boosts creativity & self-expression', 'Enhances motivation & willpower', 'Dissolves negative energy'],
//       image: 'https://images.unsplash.com/photo-1522776851755-3914469f0ca2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       zodiac: 'Aries ♈, Leo ♌',
//       chakra: 'Solar Plexus',
//       planet: 'Sun ☉',
//       origin: 'Brazil, Madagascar',
//       hardness: '7.0 Mohs',
//       rating: 4.5,
//       celestialProperties: 'Solar energy amplifier, ideal for new ventures'
//     },
//     {
//       id: 6,
//       name: 'Moonstone',
//       category: 'semi-precious',
//       price: 159,
//       description: 'The stone of new beginnings, Moonstone enhances intuition, inspiration, and the divine feminine. Its ethereal glow carries the magic of the moon cycles, ideal for emotional healing.',
//       benefits: ['Enhances intuition & psychic gifts', 'Brings emotional balance', 'Supports fertility & feminine energy', 'Promotes restful sleep'],
//       image: 'https://images.unsplash.com/photo-1522776851755-3914469f0ca2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       zodiac: 'Cancer ♋, Libra ♎',
//       chakra: 'Third Eye & Crown',
//       planet: 'Moon ☽',
//       origin: 'India, Sri Lanka',
//       hardness: '6.0-6.5 Mohs',
//       rating: 4.3,
//       celestialProperties: 'Lunar cycles enhance its power, strongest at full moon'
//     }
//   ];

//   const categories = ['all', 'precious', 'semi-precious'];

//   const filteredGemstones = selectedCategory === 'all' 
//     ? gemstones 
//     : gemstones.filter(gem => gem.category === selectedCategory);

//   const openModal = (gemstone) => {
//     setSelectedGemstone(gemstone);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setSelectedGemstone(null);
//     document.body.style.overflow = 'auto';
//   };

//   useEffect(() => {
//     // Simulate loading for demo purposes
//     const timer = setTimeout(() => setIsLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-red-50">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//           className="w-16 h-16 border-4 border-red-800 border-t-transparent rounded-full"
//         >
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-8 h-8 bg-red-800 rounded-full animate-pulse"></div>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
//       <Head>
//         <title>Cosmic Gemstones | Celestial Jewels Aligned with Your Destiny</title>
//         <meta name="description" content="Premium astrological gemstones hand-selected by master astrologers to enhance your planetary benefits and life path" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Cosmic Header */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-900 text-white py-20 px-4 text-center">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-10 left-1/4 w-4 h-4 bg-white rounded-full animate-twinkle"></div>
//           <div className="absolute top-20 right-1/3 w-3 h-3 bg-white rounded-full animate-twinkle-delay"></div>
//           <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
//         </div>
        
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif tracking-tight">
//             Cosmic <span className="text-red-200">Gemstones</span>
//           </h1>
//           <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
//             Celestial jewels attuned to your birth chart, enhancing planetary blessings and life path
//           </p>
          
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-8 inline-block"
//           >
//             <button className="bg-white hover:bg-red-50 text-red-800 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//               Discover Your Birthstone
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Stellar Navigation */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="flex justify-center mb-12 space-x-2 md:space-x-4"
//         >
//           {categories.map((category) => (
//             <motion.button
//               key={category}
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-6 py-3 rounded-full capitalize font-medium transition-all duration-300 ${
//                 selectedCategory === category
//                   ? 'bg-red-800 text-white shadow-md'
//                   : 'bg-white text-red-800 hover:bg-red-50 border border-red-200 shadow-sm'
//               }`}
//             >
//               {category.replace('-', ' ')}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Celestial Product Grid */}
//         <motion.div 
//           layout
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {filteredGemstones.map((gemstone) => (
//             <motion.div
//               key={gemstone.id}
//               layout
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
//               {/* Gemstone Image Placeholder */}
//               <div className="h-72 bg-gradient-to-br from-gray-50 to-red-50 relative overflow-hidden">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-6xl opacity-10 text-red-800">
//                     {gemstone.name === 'Ruby' && '♦'}
//                     {gemstone.name === 'Emerald' && '♣'}
//                     {gemstone.name === 'Yellow Sapphire' && '♠'}
//                     {gemstone.name === 'Amethyst' && '♥'}
//                     {gemstone.name === 'Citrine' && '☀'}
//                     {gemstone.name === 'Moonstone' && '☾'}
//                   </div>
//                 </div>
//                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-red-800 shadow-sm">
//                   {gemstone.category.replace('-', ' ')}
//                 </div>
//                 <div className="absolute bottom-4 left-4 flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-red-800 shadow-sm">
//                   <span>★</span>
//                   <span className="ml-1">{gemstone.rating}</span>
//                 </div>
//               </div>
              
//               <div className="p-6 relative">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 font-serif">{gemstone.name}</h3>
//                     <p className="text-sm text-red-800 mt-1">
//                       {gemstone.planet} • {gemstone.zodiac}
//                     </p>
//                   </div>
//                   <div className="text-2xl font-bold text-red-800">
//                     ${gemstone.price}
//                   </div>
//                 </div>
                
//                 <p className="text-gray-600 mt-3 line-clamp-2">{gemstone.description}</p>
                
//                 <div className="mt-6 flex space-x-3">
//                   <motion.button
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                     onClick={() => openModal(gemstone)}
//                     className="flex-1 bg-white border-2 border-red-800 text-red-800 py-2 px-4 rounded-lg hover:bg-red-50 transition-all font-medium"
//                   >
//                     Cosmic Details
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                     className="flex-1 bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-red-900 transition-all font-medium shadow-md"
//                   >
//                     Add to Altar
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Celestial Modal */}
//       <AnimatePresence>
//         {selectedGemstone && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 50 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 50 }}
//               className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
//             >
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
//                 aria-label="Close"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
              
//               <div className="grid lg:grid-cols-2 gap-0">
//                 {/* Gemstone Image */}
//                 <div className="bg-gradient-to-br from-gray-50 to-red-50 min-h-96 flex items-center justify-center p-8 relative">
//                   <div className="absolute inset-0 opacity-20">
//                     <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-red-400 rounded-full filter blur-xl"></div>
//                     <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-red-300 rounded-full filter blur-xl"></div>
//                   </div>
//                   <div className="relative z-10 text-9xl opacity-30 text-red-800">
//                     {selectedGemstone.name === 'Ruby' && '♦'}
//                     {selectedGemstone.name === 'Emerald' && '♣'}
//                     {selectedGemstone.name === 'Yellow Sapphire' && '♠'}
//                     {selectedGemstone.name === 'Amethyst' && '♥'}
//                     {selectedGemstone.name === 'Citrine' && '☀'}
//                     {selectedGemstone.name === 'Moonstone' && '☾'}
//                   </div>
//                   <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-red-800 shadow-sm">
//                     {selectedGemstone.category.replace('-', ' ')}
//                   </div>
//                 </div>
                
//                 {/* Gemstone Details */}
//                 <div className="p-8">
//                   <div className="mb-6">
//                     <h2 className="text-4xl font-bold text-gray-900 font-serif">{selectedGemstone.name}</h2>
//                     <div className="flex items-center mt-2">
//                       <div className="flex text-red-800">
//                         {[...Array(5)].map((_, i) => (
//                           <span key={i}>★</span>
//                         ))}
//                       </div>
//                       <span className="ml-2 text-gray-600">{selectedGemstone.rating} (128 cosmic reviews)</span>
//                     </div>
//                   </div>
                  
//                   <div className="mb-6">
//                     <span className="text-3xl font-bold text-red-800">${selectedGemstone.price}</span>
//                     <span className="ml-2 text-sm text-gray-500">+ free astrological consultation</span>
//                   </div>
                  
//                   <p className="text-gray-700 mb-6 leading-relaxed">{selectedGemstone.description}</p>
                  
//                   {/* Cosmic Properties */}
//                   <div className="grid grid-cols-2 gap-4 mb-6">
//                     <div className="bg-red-50 p-4 rounded-lg">
//                       <h4 className="font-medium text-red-800 text-sm uppercase tracking-wider">Zodiac</h4>
//                       <p className="font-semibold text-lg mt-1">{selectedGemstone.zodiac}</p>
//                     </div>
//                     <div className="bg-red-50 p-4 rounded-lg">
//                       <h4 className="font-medium text-red-800 text-sm uppercase tracking-wider">Planet</h4>
//                       <p className="font-semibold text-lg mt-1">{selectedGemstone.planet}</p>
//                     </div>
//                     <div className="bg-red-50 p-4 rounded-lg">
//                       <h4 className="font-medium text-red-800 text-sm uppercase tracking-wider">Chakra</h4>
//                       <p className="font-semibold text-lg mt-1">{selectedGemstone.chakra}</p>
//                     </div>
//                     <div className="bg-red-50 p-4 rounded-lg">
//                       <h4 className="font-medium text-red-800 text-sm uppercase tracking-wider">Hardness</h4>
//                       <p className="font-semibold text-lg mt-1">{selectedGemstone.hardness}</p>
//                     </div>
//                   </div>
                  
//                   {/* Celestial Benefits */}
//                   <div className="mb-8">
//                     <h3 className="font-semibold text-xl text-red-800 mb-3">Celestial Benefits:</h3>
//                     <ul className="space-y-2">
//                       {selectedGemstone.benefits.map((benefit, i) => (
//                         <li key={i} className="flex items-start">
//                           <svg className="h-5 w-5 text-red-800 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                           </svg>
//                           <span className="text-gray-700">{benefit}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   {/* Astrological Guidance */}
//                   <div className="bg-red-50 border-l-4 border-red-800 p-4 mb-8 rounded-r-lg">
//                     <h4 className="font-medium text-red-800 flex items-center">
//                       <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                       Astrological Guidance
//                     </h4>
//                     <p className="text-red-700 mt-1 text-sm">{selectedGemstone.celestialProperties}</p>
//                   </div>
                  
//                   {/* Action Buttons */}
//                   <div className="space-y-3">
//                     <motion.button
//                       whileHover={{ scale: 1.01 }}
//                       whileTap={{ scale: 0.99 }}
//                       className="w-full bg-red-800 text-white py-4 px-6 rounded-xl hover:bg-red-900 transition-all font-bold shadow-lg"
//                     >
//                       Add to Cosmic Collection - ${selectedGemstone.price}
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.01 }}
//                       whileTap={{ scale: 0.99 }}
//                       className="w-full bg-white border-2 border-red-800 text-red-800 py-4 px-6 rounded-xl hover:bg-red-50 transition-all font-medium"
//                     >
//                       Consult Our Master Astrologer
//                     </motion.button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

   
//     </div>
//   );
// };

// export default ProductsPage;





 


// pages/products.js
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/navbar';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const gemstones = [
    {
      id: 201,
      name: 'RUBY ( माणिक )',
      category: 'gemstone',
      price: 2500,
      image: '/assets/ruby.png',
      description: 'Ruby is known for bringing passion, courage, and vitality.',
      zodiac: 'Leo',
      planet: 'Sun',
      benefits: ['Boosts confidence', 'Improves leadership', 'Increases vitality']
    },
    {
      id: 202,
      name: 'PEARL ( मोती )',
      category: 'gemstone',
      price: 1800,
      image: '/assets/pearl.png',
      description: 'Pearl symbolizes purity and emotional balance.',
      zodiac: 'Cancer',
      planet: 'Moon',
      benefits: ['Calms emotions', 'Enhances beauty', 'Supports intuition']
    },
    {
      id: 203,
      name: 'RED CORAL ( मूंगा )',
      category: 'gemstone',
      price: 2200,
      image: '/assets/red-coral.png',
      description: 'Red Coral brings strength, courage, and determination.',
      zodiac: 'Aries, Scorpio',
      planet: 'Mars',
      benefits: ['Improves physical strength', 'Overcomes fear', 'Enhances energy']
    },
    {
      id: 204,
      name: 'EMERALD ( पन्ना )',
      category: 'gemstone',
      price: 2700,
      image: '/assets/emerald.png',
      description: 'Emerald promotes intelligence, communication, and memory.',
      zodiac: 'Gemini, Virgo',
      planet: 'Mercury',
      benefits: ['Improves speech', 'Enhances memory', 'Brings clarity']
    },
    {
      id: 205,
      name: 'YELLOW SAPPHIRE ( पुखराज )',
      category: 'gemstone',
      price: 3200,
      image: '/assets/yellow-sapphire.png',
      description: 'Yellow Sapphire brings prosperity, wisdom, and good fortune.',
      zodiac: 'Sagittarius, Pisces',
      planet: 'Jupiter',
      benefits: ['Boosts financial growth', 'Enhances wisdom', 'Brings success']
    },
    {
      id: 206,
      name: 'OPAL ( ओपल )',
      category: 'gemstone',
      price: 3500,
      image: '/assets/opal.png',
      description: 'Opal enhances creativity, love, and emotional strength.',
      zodiac: 'Libra',
      planet: 'Venus',
      benefits: ['Increases imagination', 'Supports relationships', 'Boosts charm']
    },
    {
      id: 207,
      name: 'BLUE SAPPHIRE ( नीलम ) ',
      category: 'gemstone',
      price: 3500,
      image: '/assets/blue-sapphire.png',
      description: 'Blue Sapphire promotes discipline, focus, and structure.',
      zodiac: 'Capricorn, Aquarius',
      planet: 'Saturn',
      benefits: ['Enhances focus', 'Supports discipline', 'Protects from harm']
    },
    {
      id: 208,
      name: 'Hessonite ( गोमेद )',
      category: 'gemstone',
      price: 2000,
      image: '/assets/hessonite.png',
      description: 'Hessonite provides clarity, fame, and protection from enemies.',
      zodiac: 'Aquarius',
      planet: 'Rahu',
      benefits: ['Removes fear', 'Improves focus', 'Enhances fame']
    },
    {
      id: 209,
      name: 'CAT’s EYE ( लहसुनिया )',
      category: 'gemstone',
      price: 2100,
      image: '/assets/cat.png',
      description: 'Cat\'s Eye protects against the evil eye and boosts intuition.',
      zodiac: 'Pisces',
      planet: 'Ketu',
      benefits: ['Enhances psychic ability', 'Protects from negativity', 'Boosts spiritual growth']
    },
  ];
  
  const energyProducts = [
    {
      id: 101,
      name: 'Spiritual Mala',
      category: 'energy',
      price: 149,
      image: '/assets/mala.png',
      description: 'A powerful mala infused with mantras for protection and focus.'
    },
    {
      id: 102,
      name: 'Spiritual Box',
      category: 'energy',
      price: 249,
      image: '/assets/bracelets.png',
      description: 'Curated box of items for meditation and rituals.'
    },
    {
      id: 103,
      name: 'Potli for Prosperity',
      category: 'energy',
      price: 99,
      image: '/assets/redbag.png',
      description: 'Traditional red potli with herbs for wealth and success.'
    },
    {
      id: 104,
      name: 'Yellow Potli',
      category: 'energy',
      price: 119,
      image: '/assets/yellowpotli.png',
      description: 'Energy-charged potli to balance solar energies.'
    },
    {
      id: 105,
      name: 'Energy Oils',
      category: 'energy',
      price: 129,
      image: '/assets/oils.png',
      description: 'Aromatherapy oils for healing and relaxation.'
    },
    {
      id: 106,
      name: 'Shivlings',
      category: 'energy',
      price: 179,
      image: '/assets/shivlings.png',
      description: 'Divine representation of Lord Shiva for devotion.'
    },
    {
      id: 107,
      name: 'Pyramids',
      category: 'energy',
      price: 89,
      image: '/assets/pyramids.png',
      description: 'Energy pyramids for Vastu correction and aura cleansing.'
    },
    {
      id: 108,
      name: 'Tabeez (Amulet)',
      category: 'energy',
      price: 59,
      image: '/assets/tabeez.png',
      description: 'Worn for spiritual protection and blessings.'
    },
    {
      id: 109,
      name: 'Silver Yantra',
      category: 'energy',
      price: 199,
      image: '/assets/silveryantra.png',
      description: 'Sacred geometry for manifestation and energy channeling.'
    },
    {
      id: 110,
      name: 'Spiritual Box',
      category: 'energy',
      price: 249,
      image: '/assets/box.png',
      description: 'Curated box of items for meditation and rituals.'
    },
    {
      id: 111,
      name: 'Spiritual Box',
      category: 'energy',
      price: 249,
      image: '/assets/squareyantra.png',
      description: 'Curated box of items for meditation and rituals.'
    },
    {
      id: 112,
      name: 'Spiritual Box',
      category: 'energy',
      price: 249,
      image: '/assets/gada.png',
      description: 'Curated box of items for meditation and rituals.'
    },
  ];

  const categories = ['All', 'Energy products', 'The gemstones'];

  const filteredProducts =
    selectedCategory === 'All'
      ? [...gemstones, ...energyProducts]
      : selectedCategory === 'Energy products'
      ? energyProducts
      : gemstones;

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-red-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-red-800 border-t-transparent rounded-full"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-red-800 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <Navbar />
  
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-900 text-white py-20 px-4 text-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-4 h-4 bg-white rounded-full animate-twinkle"></div>
          <div className="absolute top-20 right-1/3 w-3 h-3 bg-white rounded-full animate-twinkle-delay"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif tracking-tight">
          Energy  <span className="text-red-200">products</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 font-serif tracking-normal text--800">
  How they help?
</h2>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
          Astrology is नॉट a business — we agree on that. But sometimes, due to the influence of certain planets ऐंड situations, Mantra Jaap becomes a powerful and the only option. That is why, based on your dashas, yearly predictions, and charts, we offer you these abhimantrit offerings, charged with the energy of वैदिक mantras, as per the requirements.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8 inline-block">
            <button className="bg-white hover:bg-red-50 text-red-800 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Discover Your Birthstone
            </button>
          </motion.div>
        </motion.div>
      </div>
  
      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-12 space-x-2 md:space-x-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full capitalize font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-800 text-white shadow-md'
                  : 'bg-white text-red-800 hover:bg-red-50 border border-red-200 shadow-sm'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 relative group cursor-pointer"
              onClick={() => openModal(product)}
            >
              <div className="h-96 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-2">{product.name}</h3>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{product.description}</p>
                {product.zodiac && <div className="text-sm text-gray-600">Zodiac: {product.zodiac}</div>}
                {product.planet && <div className="text-sm text-gray-600">Planet: {product.planet}</div>}
                <div className="text-sm text-gray-600 mt-1">Price: ₹{product.price}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-xl overflow-y-auto max-w-xl w-full max-h-[80vh] p-6 shadow-xl relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-xl font-bold"
              >
                &times;
              </button>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold text-red-800 mb-2">{selectedProduct.name}</h2>
              <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
              <div className="text-sm text-gray-600 mb-2">Price: ₹{selectedProduct.price}</div>
              {selectedProduct.zodiac && <div className="text-sm text-gray-600">Zodiac: {selectedProduct.zodiac}</div>}
              {selectedProduct.planet && <div className="text-sm text-gray-600 mb-2">Planet: {selectedProduct.planet}</div>}
              {selectedProduct.benefits && (
                <ul className="text-gray-700 list-disc list-inside mt-2">
                  {selectedProduct.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;
