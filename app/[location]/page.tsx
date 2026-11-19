import Link from 'next/link';
import Logo from '../components/Logo';

const servicesList = [
  { slug: "griha-pravesh-puja", name: "Griha Pravesh Puja" },
  { slug: "satyanarayan-pooja", name: "Satyanarayan Pooja & Katha" },
  { slug: "rudrabhishek-pooja", name: "Rudrabhishek Pooja" },
  { slug: "marriage-pooja", name: "Marriage Pooja (Vivah Sanskar)" },
  { slug: "vastu-shanti", name: "Vastu Shanti Puja" },
  { slug: "bhoomi-pooja", name: "Bhoomi Pooja" },
  { slug: "navchandi-hawan", name: "Navchandi Hawan" },
  { slug: "kaalsarp-dosh-pooja", name: "Kaalsarp Dosh Pooja" },
  { slug: "manglik-dosh-shanti", name: "Manglik Dosh Shanti" },
  { slug: "mundan-sanskar", name: "Mundan Sanskar" },
  { slug: "namkaran-sanskar", name: "Namkaran Sanskar" },
  { slug: "annaprasan-sanskar", name: "Annaprasan Sanskar" },
  { slug: "godbharai-pooja", name: "Godbharai Pooja" },
  { slug: "pitri-shanti", name: "Pitri Shanti & Shraddha" },
  { slug: "sundarkand-path", name: "Sundarkand & Ramayana Path" },
  { slug: "vishnu-lakshmi-puja", name: "Vishnu Lakshmi Puja" }
];

function formatTitle(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const cityName = formatTitle(location);

  return {
    title: `Best North Indian Hindi Pandit in ${cityName}, Kerala | Acharya Vikash Pandey`,
    description: `Book experienced North Indian Vedic Hindi Pandit in ${cityName}, Kerala for Griha Pravesh, Satyanarayan Katha, Vivah, Rudrabhishek, and all Hindu rituals. Call +91 95895 29572.`,
    keywords: `North Indian Pandit in ${cityName}, Hindi Pandit in ${cityName}, Griha Pravesh Puja in ${cityName}, Satyanarayan Puja ${cityName}, Vedic Priest ${cityName} Kerala, Acharya Vikash Pandey`
  };
}

export default async function LocationPage({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const cityName = formatTitle(location);

  return (
    <div className="min-h-screen bg-amber-50 text-gray-900 font-sans">
      {/* Top Navbar */}
      <nav className="bg-[#5c1313] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-3">
            <a href="tel:9589529572" className="hidden sm:inline-block bg-[#7a1c1c] border border-amber-500/50 px-4 py-2 rounded-lg text-xs font-bold">
              📞 +91 95895 29572
            </a>
            <Link href="/#booking-form" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-xs font-bold shadow">
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#4a0e0e] to-[#2c0808] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase">
            Authentic Vedic Services in {cityName}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 leading-tight">
            Best North Indian Hindi Pandit in {cityName}, Kerala
          </h1>
          <p className="text-amber-100/85 text-sm md:text-base mb-8 leading-relaxed">
            Looking for an experienced North Indian Pandit in <strong>{cityName}</strong>? Acharya Vikash Pandey performs all traditional Hindu Pujas, Havans, Vivah Sanskar, and Griha Pravesh with 100% Vedic vidhi and complete devotion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:9589529572" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg text-sm">
              📞 Call: +91 95895 29572
            </a>
            <a
              href={`https://wa.me/919589529572?text=Namaste%20Pandit%20Ji,%20I%20need%20a%20Hindi%20Pandit%20in%20${encodeURIComponent(cityName)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg text-sm"
            >
              WhatsApp Pandit Ji
            </a>
          </div>
        </div>
      </section>

      {/* Services Available in This Location */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-amber-950">
            All Puja Services Available in {cityName}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Select any ritual below to view details and book Acharya Vikash Pandey in {cityName}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {servicesList.map((srv) => (
            <Link
              key={srv.slug}
              href={`/${location}/${srv.slug}`}
              className="bg-white border border-amber-200 hover:border-amber-600 p-5 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <span className="text-amber-700 text-xs font-bold uppercase">{cityName}</span>
                <h3 className="text-base font-bold text-amber-950 mt-1">{srv.name} in {cityName}</h3>
              </div>
              <span className="text-xs font-bold text-amber-800 mt-4 inline-block">
                View Vidhi & Book →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="text-amber-900 font-bold underline text-sm">
            ← Back to Home Page (View All 44+ Pujas)
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c0808] text-amber-200 py-8 px-4 text-center border-t border-amber-900">
        <p className="font-bold text-base text-amber-100">Acharya Vikash Pandey - vedichindipanditinkerala.com</p>
        <p className="text-xs mt-1">Serving {cityName}, Thiruvananthapuram & Kochi | Mob: +91 95895 29572</p>
      </footer>
    </div>
  );
}