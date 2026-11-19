'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Logo from './components/Logo';

const sliderImages = [
  { img: "/images/satyanarayan pooja.png", title: "Sri Satyanarayan & Lakshmi Puja" },
  { img: "/images/Lord Shiva Rudrabhishek & Lingam Abhishek.png", title: "Lord Shiva Rudrabhishek & Lingam Abhishek" },
  { img: "/images/ram-darbar.png", title: "Shri Ram Darbar Vedic Puja" },
  { img: "/images/ganesh.png", title: "Lord Ganesha Vighnaharta Puja" },
  { img: "/images/durga.png", title: "Maa Durga Navchandi Hawan" }
];

const poojaList = [
  { name: "Griha Pravesh", img: "/images/griha pravesh.png", desc: "Housewarming ritual for positivity and peace.", benefit: "Purifies new dwelling space, drives away negative forces, and fills home with divine positive energy." },
  { name: "Satyanarayan Pooja", img: "/images/satyanarayan pooja.png", desc: "Lord Vishnu Katha for household harmony and success.", benefit: "Brings peace, prosperity, removes family discord, and fulfills desires." },
  { name: "Rudrabhishek Pooja", img: "/images/Rudrabhishek pooja.png", desc: "Sacred bath ritual of Lord Shiva with milk and holy water.", benefit: "Wipes out sins, cures prolonged illnesses, and fulfills all deepest prayers." },
  { name: "Marriage Pooja", img: "/images/marriage ppoja.png", desc: "Complete Vedic wedding rituals (Vivah Sanskar).", benefit: "Unites two souls with sacred vows witnessed by Agni and gods for 7 lifetimes of togetherness." },
  { name: "Annaprasan Sanskar Pooja", img: "/images/annaprasan sanskar pooja.png", desc: "Sacred first feeding ceremony for your baby.", benefit: "Ensures good health, strong digestive system, and lifelong prosperity for the child." },
  { name: "Antaim Sanskar", img: "/images/antaimsanskar.png", desc: "Traditional final rites performed with Vedic mantras.", benefit: "Provides peaceful transition and salvation (Moksha) for the departed soul as per scriptures." },
  { name: "Bagulamukhi Anushthan", img: "/images/Bagulamukhi Anushthan.png", desc: "Special ritual for victory over adversaries and protection.", benefit: "Grants protection from enemies, legal hurdles, negative energies, and grants ultimate success." },
  { name: "Bhoomi Pooja", img: "/images/Bhoomi Pooja.png", desc: "Foundation stone laying and Vastu shanti ceremony.", benefit: "Removes earth Vastu doshas and ensures safe, obstacle-free construction of your building." },
  { name: "Birthday Puja", img: "/images/birthday.png", desc: "Auspicious prayers for longevity, health, and prosperity.", benefit: "Seeks divine blessings of longevity, good health, and success for the coming year." },
  { name: "Dhanteras Pooja", img: "/images/dhanteras pooja.png", desc: "Welcoming Goddess Lakshmi and Lord Kuber for wealth.", benefit: "Attracts abundance, financial growth, and perpetual wealth into your home or business." },
  { name: "Diwali Pooja", img: "/images/diwali pooja.png", desc: "Prosperity and light ritual on Deepawali.", benefit: "Brings divine light, removes darkness of ignorance, and invokes Goddess Lakshmi's grace." },
  { name: "Durga", img: "/images/durga.png", desc: "Sacred worship of Goddess Durga for power and protection.", benefit: "Bestows divine energy, courage, and removes all fear from life." },
  { name: "Durga Saptasati Path", img: "/images/durgasaptsati.png", desc: "Chanting of sacred hymns dedicated to Maa Durga.", benefit: "Destroys fear, bestows immense courage, health, and shields family from all evils." },
  { name: "Ekadashi Udyapan", img: "/images/Ekadashi udyapan.png", desc: "Concluding ritual for sacred Ekadashi fasts.", benefit: "Fulfills spiritual desires, purifies karma, and grants supreme devotion to Lord Vishnu." },
  { name: "Engagement Pooja", img: "/images/engement pooja.png", desc: "Sacred blessing ceremony for newly engaged couples.", benefit: "Ensures lifelong harmony, mutual understanding, and divine bonding between partners." },
  { name: "Gandmool Nakshatra Shanti", img: "/images/Gandmool Nakshatra shanti Pooja.png", desc: "Remedial ritual for birth stars pacification.", benefit: "Neutralizes negative astrological impacts born under specific malefic constellations." },
  { name: "Ganesh Puja", img: "/images/ganesh.png", desc: "First worship of Lord Ganesha for obstacle removal.", benefit: "Removes all hurdles from new beginnings and brings auspiciousness." },
  { name: "Godbharai Pooja", img: "/images/godbharai pooja.png", desc: "Traditional baby shower blessing ceremony.", benefit: "Blesses the expectant mother and child with divine protection, health, and positive vibes." },
  { name: "Kaalsarp Dosh Pooja", img: "/images/kaalsarp dosh pooja.png", desc: "Astrological remedy for Kaal Sarp Yoga.", benefit: "Clears career blocks, mental anxiety, and brings stability and growth in life." },
  { name: "Karnbhed Sanskar", img: "/images/karnbhed sanskar.png", desc: "Traditional ear-piercing ceremony for children.", benefit: "Promotes healthy neurological development and protects from evil eyes as per Vedic tradition." },
  { name: "Lord Shiva Puja", img: "/images/Lord Shiva Puja.png", desc: "Special worship of Lord Mahadev for peace and strength.", benefit: "Grants mental peace, fearlessness, and spiritual liberation." },
  { name: "Lord Shiva Rudrabhishek", img: "/images/Lord Shiva Rudrabhishek & Lingam Abhishek.png", desc: "Sacred bath ritual of Lord Shiva with milk and holy water.", benefit: "Wipes out sins, cures prolonged illnesses, and fulfills all deepest prayers." },
  { name: "Mangal Dosh Nivaran", img: "/images/mangaldosh.png", desc: "Vedic rituals to pacify Mars malefic effects.", benefit: "Ensures smooth marital harmony and removes obstacles caused by Mangal malefic alignment." },
  { name: "Mangalvari Udyapan", img: "/images/Mangalvari udyapan.png", desc: "Tuesday fast concluding ritual.", benefit: "Invokes courage and protection of Lord Hanuman, removing fear and debt." },
  { name: "Manglik Dosh Shanti", img: "/images/Manglik dosh shanti pooja.png", desc: "Special worship to neutralize Manglik dosha.", benefit: "Brings marital compatibility, peace, and prosperity in relationships." },
  { name: "Marriage Pooja", img: "/images/marriage ppoja.png", desc: "Complete Vedic wedding rituals (Vivah Sanskar).", benefit: "Unites two souls with sacred vows witnessed by Agni and gods for 7 lifetimes of togetherness." },
  { name: "Mundan Sanskar", img: "/images/mundan sanskar.png", desc: "First hair-cut ceremony for infants.", benefit: "Cleanses past life impurities, promotes healthy hair growth and intellectual sharpness." },
  { name: "Murti Pranpratishtha", img: "/images/Murti Pranpratishtha.png", desc: "Consecration ritual for installing deity idols.", benefit: "Infuses divine life force and consciousness into temple or home idols." },
  { name: "Namkaran Sanskar", img: "/images/Namkaran sanskar.png", desc: "Traditional naming ceremony for newborns.", benefit: "Bestows an auspicious name resonating with positive vibrations and destiny." },
  { name: "Namsanskar", img: "/images/namsanskar.png", desc: "Sacred naming and blessing ritual for children.", benefit: "Brings positive life path and divine grace to the newborn child." },
  { name: "Navchandi Hawan", img: "/images/navchandi hawan.png", desc: "Powerful sacrificial fire ritual for Goddess Durga.", benefit: "Eradicates severe obstacles, protects business/family, and showers supreme blessings." },
  { name: "Navratri Pooja", img: "/images/navratri pooja.png", desc: "Nine days sacred worship and rituals.", benefit: "Invokes nine forms of Durga for spiritual awakening, energy, and wealth." },
  { name: "Pitri Shanti", img: "/images/pitrishanti.png", desc: "Ancestral peace rituals and Shraddha.", benefit: "Satisfies ancestral souls, brings generational blessings, and removes Pitru Dosha." },
  { name: "Pradosh Varat Udyapan", img: "/images/Pradosh varat udyapan.png", desc: "Lord Shiva fast concluding worship.", benefit: "Fulfilled wishes, freedom from chronic diseases, and grace of Mahadev." },
  { name: "Ramayana Path", img: "/images/Ramayana path.png", desc: "Recitation of sacred Ramcharitmanas.", benefit: "Brings righteousness, peace, ideal family values, and Lord Rama's supreme grace." },
  { name: "Ram Darbar Puja", img: "/images/ram-darbar.png", desc: "Worship of Lord Rama, Sita, Lakshmana, and Hanuman.", benefit: "Brings ideal harmony, righteousness, and supreme divine protection to the family." },
  { name: "Santan Gopal Jap & Pooja", img: "/images/santan gopal jap and pooja.png", desc: "Divine worship for child blessing and well-being.", benefit: "Bestows healthy progeny and protects children from all harms." },
  { name: "Satyanarayan Pooja", img: "/images/satyanarayan pooja.png", desc: "Lord Vishnu Katha for household harmony and success.", benefit: "Brings peace, prosperity, removes family discord, and fulfills desires." },
  { name: "Sudarshan Anushthan", img: "/images/Sudarshan Anushthan.png", desc: "Powerful protection ritual invoking Sudarshan Chakra.", benefit: "Shields against severe dangers, hidden enemies, and negative karmic blocks." },
  { name: "Sundarkand Path", img: "/images/Sundarkand path.png", desc: "Devotional chanting from Hanuman Chalisa & Ramayana.", benefit: "Instills immense confidence, destroys fear, and brings instant relief from troubles." },
  { name: "Terhvi Sraddhy", img: "/images/terhvi sraddhy.png", desc: "Traditional 13th-day memorial ritual.", benefit: "Completes final soul journey rites and provides spiritual peace to departed ancestors." },
  { name: "Upnayan Sanskar", img: "/images/upnayan sanskar.png", desc: "Sacred thread (Janeu) initiation ceremony.", benefit: "Marks student life initiation, spiritual awakening, and discipline." },
  { name: "Vahan Pooja", img: "/images/vahan pooja.png", desc: "New vehicle blessing and protection ritual.", benefit: "Wards off accidents and ensures safe, smooth journeys for your vehicles." },
  { name: "Vastu Shanti", img: "/images/vastu shanti.png", desc: "Cleansing and balancing energy of home or office.", benefit: "Harmonizes directional energies and invites peace, health, and financial growth." },
  { name: "Vishnu Sahasranam Path", img: "/images/Vishnu Sahasranam Path.png", desc: "Chanting of thousand names of Lord Vishnu.", benefit: "Brings supreme mental peace, spiritual elevation, and divine protection." },
  { name: "Vishnu Lakshmi Puja", img: "/images/vishnu-lakshmi.png", desc: "Worship of Lord Vishnu and Goddess Lakshmi.", benefit: "Invokes wealth, abundance, and domestic harmony." },
  { name: "Vrihaspati Udyapan", img: "/images/Vrihaspati udyapan.png", desc: "Jupiter/Brihaspati fast concluding ritual.", benefit: "Enhances wisdom, marriage prospects, career success, and knowledge." },
  { name: "Other Puja", img: "/images/other pooja.png", desc: "Any custom Vedic ritual or special puja as per your family tradition.", benefit: "Fulfilled as per authentic scriptures according to your specific family requirements." }
];

const localitiesList = [
  { name: "Thiruvananthapuram", slug: "thiruvananthapuram" },
  { name: "Kochi", slug: "kochi" },
  { name: "Kowdiar", slug: "kowdiar" },
  { name: "Technopark", slug: "technopark" },
  { name: "Pattom", slug: "pattom" },
  { name: "Vellayambalam", slug: "vellayambalam" },
  { name: "Statue", slug: "statue" },
  { name: "Nanthancode", slug: "nanthancode" },
  { name: "Kazhakkoottam", slug: "kazhakkoottam" },
  { name: "Edappally", slug: "edappally" },
  { name: "Kadavanthra", slug: "kadavanthra" },
  { name: "Panampilly Nagar", slug: "panampilly-nagar" },
  { name: "Vytilla", slug: "vytilla" },
  { name: "MG Road", slug: "mg-road" },
  { name: "Fort Kochi", slug: "fort-kochi" },
  { name: "Kakkanad", slug: "kakkanad" }
];

const faqs = [
  { q: "How can I book a North Indian Pandit in Thiruvananthapuram or Kochi?", a: "You can easily book by filling out our online booking form below or by calling/WhatsApp directly at +91 95895 29572." },
  { q: "Are all Puja samagri brought by the Pandit Ji?", a: "Yes, upon request, we can arrange or provide a complete checklist of Puja Samagri required for the specific ritual." },
  { q: "Can we perform pujas in Hindi language?", a: "Absolutely. Acharya Vikash Pandey specializes in authentic Hindi and Vedic rituals as per North Indian traditions." },
  { q: "What locations in Kerala do you serve?", a: "We provide services across all major localities in Thiruvananthapuram (such as Kowdiar, Technopark) and Kochi (such as Edappally, Kakkanad, MG Road)." }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);
  const [selectedPooja, setSelectedPooja] = useState(poojaList[0].name);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      e.target.reset();
    }, 1000);
  };

  const displayedServices = showAllServices ? poojaList : poojaList.slice(0, 4);
  const currentPujaObj = poojaList.find(p => p.name === selectedPooja);

  return (
    <div className="min-h-screen text-gray-900 font-sans relative bg-amber-50">
      <Head>
        <title>Vedic Hindi Pandit in Thiruvananthapuram & Kochi | Pandit Vikash Pandey</title>
        <meta name="description" content="Book expert North Indian Hindi Pandit in Thiruvananthapuram and Kochi for Griha Pravesh, Satyanarayan Katha, Vivah, and all authentic Hindu rituals." />
        <meta name="keywords" content="North Indian Pandit in Kerala, Hindi Pandit in Thiruvananthapuram, Hindi Pandit in Kochi, Griha Pravesh Puja Kerala, Satyanarayan Katha Kochi, Marriage Pandit Trivandrum, Rudrabhishek Kerala, Vastu Shanti Pandit, Bhoomi Pujan Pandit Kerala, North Indian Priest Thiruvananthapuram, Hindu Rituals Kerala, Puja Booking Kochi, Navchandi Hawan Trivandrum, Online Pandit Booking Kerala, Acharya Vikash Pandey, Vedic Pandit Trivandrum, Wedding Pandit Kochi, Satyanarayan Puja Trivandrum, Baby Shower Puja Kerala, Best Pandit in Kerala, North Indian Priest in Kochi, Hindi Speaking Pandit Trivandrum, Vedic Rituals Expert Kerala, Homam and Hawan Services Kerala, Griha Pravesh Shanti Pandit Kochi" />
      </Head>

      {/* Ganesh Ji Background Watermark */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/images/ganesh.png')` }}
      ></div>

      {/* Floating Action Icons (Phone & WhatsApp) */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        <a 
          href="tel:9589529572" 
          className="bg-amber-600 hover:bg-amber-700 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition transform hover:scale-110 border-2 border-white"
          title="Call Pandit Ji"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        <a 
          href="https://wa.me/919589529572?text=Namaste%20Pandit%20Ji,%20I%20want%20to%20book%20a%20pooja." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-600 hover:bg-green-700 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition transform hover:scale-110 border-2 border-white"
          title="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
      </div>

      <div className="relative z-10">
        {/* Top Announcement Bar */}
        <div className="bg-[#4a0e0e] text-amber-200 text-xs py-2 px-4 flex justify-between items-center border-b border-amber-900/40">
          <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
            <span>📍 Service Available Across Thiruvananthapuram & Kochi</span>
            <span className="hidden md:inline">🕉️ ॐ नमो भगवते वासुदेवाय</span>
            <div className="flex gap-4">
              <a href="tel:9589529572" className="hover:underline">Call: +91 95895 29572</a>
              <a href="https://wa.me/919589529572" className="hover:underline">WhatsApp Pandit Ji</a>
            </div>
          </div>
        </div>

        {/* Main Navbar with Custom Logo Component */}
        <nav className="bg-[#5c1313] text-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <Logo />
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#" className="hover:text-amber-300">Home</a>
              <a href="#about" className="hover:text-amber-300">About Pandit Ji</a>
              <a href="#services" className="hover:text-amber-300">Puja Services</a>
              <a href="#faq" className="hover:text-amber-300">FAQ</a>
              <a href="#booking-form" className="hover:text-amber-300">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:9589529572" className="hidden sm:inline-block bg-[#7a1c1c] hover:bg-[#8f2323] border border-amber-500/50 px-4 py-2 rounded-lg text-xs font-bold transition">
                📞 +91 95895 29572
              </a>
              <a href="#booking-form" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-xs font-bold shadow transition">
                Book a Pandit
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section with Smooth Fade Slider */}
        <section className="bg-gradient-to-b from-[#4a0e0e] to-[#2c0808] text-white py-16 px-4 shadow-2xl">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
                Trusted Vedic Pandit in Kerala
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Best North Indian Pandit in Thiruvananthapuram & Kochi
              </h1>
              <p className="text-amber-100/80 text-sm md:text-base mb-6 leading-relaxed">
                Acharya Vikash Pandey — Providing authentic North Indian Hindu Pujas, Vedic Rituals, Havans, and Sanskars across Thiruvananthapuram and Kochi with complete devotion and purity.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#booking-form" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition text-sm">
                  Book a Pandit
                </a>
                <a href="https://wa.me/919589529572?text=Namaste%20Pandit%20Ji" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition text-sm flex items-center gap-2">
                  WhatsApp Now
                </a>
                <a href="tel:9589529572" className="border border-amber-400/50 hover:bg-white/10 font-bold py-3 px-5 rounded-xl transition text-sm">
                  Call: +91 9589529572
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-xs text-amber-200 border-t border-amber-900/60 pt-4">
                <span>✔ 10+ Yrs Experience</span>
                <span>✔ 2,000+ Happy Families</span>
                <span>✔ 100% Authentic Vedic Vidhi</span>
              </div>
            </div>

            {/* Smooth Fade Slider Box */}
            <div className="relative bg-black/40 p-3 rounded-2xl border-2 border-amber-600/50 shadow-2xl overflow-hidden group">
              <div className="h-72 md:h-80 w-full relative rounded-xl overflow-hidden">
                {sliderImages.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img 
                      src={slide.img} 
                      alt={slide.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                      <h3 className="text-white font-bold text-lg">{slide.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))}
                className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-2 rounded-full hover:bg-amber-600 transition"
              >
                &#10094;
              </button>
              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-2 rounded-full hover:bg-amber-600 transition"
              >
                &#10095;
              </button>
              <div className="absolute bottom-3 right-5 z-20 flex gap-1.5">
                {sliderImages.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2.5 h-2.5 rounded-full ${currentSlide === i ? 'bg-amber-500' : 'bg-white/50'}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Linked Service Localities Section (Hyperlocal SEO Links) */}
        <section className="py-8 bg-amber-900 text-amber-100 px-4 shadow-inner">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-1 text-amber-300">
              Service Localities in Thiruvananthapuram & Kochi
            </h3>
            <p className="text-xs text-amber-200/80 mb-3">
              Click on your area to view available Pujas & Pandit booking details
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              {localitiesList.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/${loc.slug}`}
                  className="bg-amber-800/90 hover:bg-amber-600 hover:text-white border border-amber-700 px-3.5 py-1.5 rounded-full transition font-medium shadow-sm"
                >
                  📍 Pandit in {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Pooja Directory Grid with Book & WhatsApp Buttons */}
        <section id="services" className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-wider bg-amber-200/60 px-3 py-1 rounded-full">Sacred Rituals</span>
            <h3 className="text-3xl font-extrabold text-amber-950 mt-2">Complete Puja Services & Benefits</h3>
            <p className="text-sm text-gray-600 mt-1">Explore authentic Vedic ceremonies along with their spiritual benefits</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {displayedServices.map((item, idx) => (
              <div key={idx} className="bg-white/95 backdrop-blur rounded-2xl shadow-lg border border-amber-200 overflow-hidden hover:shadow-2xl transition flex flex-col md:flex-row group">
                <div className="md:w-1/2 h-56 md:h-auto bg-amber-100 relative overflow-hidden flex items-center justify-center">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h4>
                    <p className="text-gray-600 text-xs mb-3 leading-relaxed">{item.desc}</p>
                    <div className="bg-amber-50 border-l-4 border-amber-600 p-3 rounded-r-lg text-xs text-gray-700 mb-4">
                      <strong className="text-amber-900 block mb-0.5">Puja Benefits:</strong>
                      {item.benefit}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a href="#booking-form" onClick={() => setSelectedPooja(item.name)} className="flex-1 text-center bg-amber-900 hover:bg-amber-950 text-amber-100 font-bold py-2.5 rounded-xl text-xs transition shadow">
                      Book This Puja
                    </a>
                    <a href={`https://wa.me/919589529572?text=Namaste%20Pandit%20Ji,%20I%20want%20to%20book%20${encodeURIComponent(item.name)}.`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-xl text-xs transition shadow">
                      WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More / See Less Toggle Button */}
          <div className="text-center mt-10">
            <button 
              onClick={() => setShowAllServices(!showAllServices)}
              className="bg-amber-700 hover:bg-amber-800 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition text-sm"
            >
              {showAllServices ? 'See Less Services' : 'See More Services'}
            </button>
          </div>
        </section>

        {/* About Pandit Ji Section */}
        <section id="about" className="py-16 px-4 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-amber-200 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-amber-600 shadow-lg">
                <img src="/pandit/vikash pandey.jpeg" alt="Acharya Vikash Pandey" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold text-amber-950 mt-4">Acharya Vikash Pandey</h4>
              <p className="text-xs text-amber-800 font-semibold">Acharya (Maharshi Ved Vigyan Vidya Peeth, 2024)</p>
            </div>
            <div className="md:col-span-2 space-y-4">
              <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">About Our Acharya</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-amber-950">Expert Vedic Scholar & North Indian Priest in Kerala</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Acharya Vikash Pandey completed his formal Acharya degree in 2024 from the esteemed Maharshi Ved Vigyan Vidya Peeth. With deep mastery over ancient Vedic scriptures, mantras, and traditional North Indian rituals, he ensures every ceremony is performed with utmost purity, devotion, and scriptural accuracy.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Serving families across Thiruvananthapuram and Kochi, Guruji specializes in Griha Pravesh, Vivah Sanskar, Satyanarayan Katha, Rudrabhishek, and all major Hindu religious ceremonies.
              </p>
            </div>
          </div>
        </section>

        {/* How to Book Process Section */}
        <section className="py-16 px-4 bg-amber-100/60 border-y border-amber-200">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-wider bg-amber-200 px-3 py-1 rounded-full">Simple Process</span>
            <h3 className="text-3xl font-extrabold text-amber-950 mt-2 mb-10">How to Book Pandit Ji in Kerala</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Select Your Puja", desc: "Choose the Hindu ritual, Griha Pravesh, Satyanarayan, or Sanskar you wish to perform." },
                { step: "2", title: "Contact Pandit Ji", desc: "Call or WhatsApp Acharya Vikash Pandey at +91 95895 29572 with your date and area." },
                { step: "3", title: "Discuss Date & Vidhi", desc: "Confirm auspicious muhurat date, time, samagri list, and arrangements." },
                { step: "4", title: "Pandit Arrives & Puja", desc: "Pandit Ji reaches your doorstep on time and performs authentic Vedic Puja with full devotion." }
              ].map((s, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-amber-200 text-center relative">
                  <div className="w-10 h-10 bg-amber-900 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 shadow">
                    {s.step}
                  </div>
                  <h4 className="font-bold text-amber-900 text-lg mb-2">{s.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 px-4 bg-white/80 border-t border-amber-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-800 font-bold text-xs uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">Got Questions?</span>
              <h3 className="text-3xl font-extrabold text-amber-950 mt-2">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-amber-50 border border-amber-200 p-6 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-amber-900 text-base mb-2">Q: {faq.q}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">Ans: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form Section with Live Image Preview */}
        <section id="booking-form" className="py-16 px-4 bg-[#4a0e0e] text-white shadow-2xl">
          <div className="max-w-xl mx-auto bg-white text-gray-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-amber-700">
            <h3 className="text-2xl font-extrabold text-center text-amber-950 mb-2">Online Puja Booking Form</h3>
            <p className="text-center text-xs text-gray-600 mb-6">Fill out details below. Inquiries are sent directly to <span className="font-semibold text-amber-900">vedichindipanditinkerala@gmail.com</span></p>

            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-6 rounded-2xl text-center">
                <h4 className="font-bold text-xl mb-2">Thank You!</h4>
                <p className="text-sm">Your booking inquiry has been successfully sent to Pandit Vikash Pandey. We will contact you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 bg-green-600 text-white text-sm px-6 py-2.5 rounded-xl font-semibold shadow">Submit Another Inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Your Full Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-600 focus:outline-none bg-gray-50 text-sm" placeholder="e.g. Rahul Sharma" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Mobile Number</label>
                  <input type="tel" name="phone" required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-600 focus:outline-none bg-gray-50 text-sm" placeholder="e.g. 9589529572" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Select Puja</label>
                  <select 
                    name="pooja" 
                    value={selectedPooja}
                    onChange={(e) => setSelectedPooja(e.target.value)}
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-600 focus:outline-none bg-gray-50 text-sm"
                  >
                    {poojaList.map((p, idx) => (
                      <option key={idx} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>

                {/* Selected Puja Image Preview */}
                {currentPujaObj && (
                  <div className="flex items-center gap-4 bg-amber-50 p-3 rounded-2xl border border-amber-200">
                    <img src={currentPujaObj.img} alt={currentPujaObj.name} className="w-16 h-16 object-cover rounded-xl border border-amber-400" />
                    <div>
                      <span className="text-xs text-amber-800 font-bold block">Selected Puja Preview:</span>
                      <h4 className="font-bold text-amber-950 text-sm">{currentPujaObj.name}</h4>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Puja Date</label>
                  <input type="date" name="date" required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-600 focus:outline-none bg-gray-50 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Location / Locality in Thiruvananthapuram or Kochi</label>
                  <textarea name="address" rows={2} required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-600 focus:outline-none bg-gray-50 text-sm" placeholder="e.g. Kowdiar, Trivandrum / Edappally, Kochi"></textarea>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3.5 rounded-xl shadow-lg transition text-sm">
                  {loading ? 'Submitting...' : 'Confirm Booking Inquiry'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="py-6 bg-[#2c0808] text-amber-200 px-4 text-center border-t border-amber-900/60">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setShowPrivacy(!showPrivacy)} className="text-amber-300 underline text-xs font-medium hover:text-white transition">
              {showPrivacy ? 'Hide Privacy Policy' : 'Read Privacy Policy'}
            </button>
            {showPrivacy && (
              <div className="mt-4 text-left bg-[#4a0e0e] p-6 rounded-2xl text-xs text-amber-100 space-y-2 border border-amber-800 shadow-inner">
                <h4 className="font-bold text-sm text-amber-300">Privacy Policy - vedichindipanditinkerala.com</h4>
                <p>We respect your privacy and protect personal details (name, phone, location) submitted via our booking form. These are used solely to coordinate your puja services with Pandit Vikash Pandey and are never shared.</p>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#2c0808] text-amber-200 py-10 px-4 text-center space-y-4 border-t border-amber-900">
          <div className="max-w-4xl mx-auto space-y-2">
            <p className="font-extrabold text-lg text-amber-100">Acharya Vikash Pandey - vedichindipanditinkerala.com</p>
            <p className="text-sm">Contact: <a href="tel:9589529572" className="underline font-semibold">9589529572</a> | Email: <a href="mailto:vedichindipanditinkerala@gmail.com" className="underline font-semibold">vedichindipanditinkerala@gmail.com</a></p>
            <p className="text-xs text-amber-400">Serving Thiruvananthapuram & Kochi with Authentic Hindi Rituals</p>
          </div>
          <div className="border-t border-amber-900/80 pt-6 mt-6">
            <p className="text-xs font-bold tracking-widest text-amber-300">
              DESIGNED AND CREATED BY PRINCE PANDEY MOB 7667984349
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}