import Link from 'next/link';
import Logo from '../../components/Logo';

function formatTitle(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string; service: string }>;
}) {
  const { location, service } = await params;
  const cityName = formatTitle(location);
  const serviceName = formatTitle(service);

  return {
    title: `${serviceName} in ${cityName}, Kerala | Book North Indian Pandit Vikash Pandey`,
    description: `Book experienced North Indian Hindi Pandit for ${serviceName} in ${cityName}, Kerala. Authentic Vedic mantras, complete samagri guidance & doorstep service. Call +91 95895 29572.`,
    keywords: `${serviceName} in ${cityName}, ${serviceName} Pandit ${cityName}, Hindi Pandit for ${serviceName} in Kerala, North Indian Priest ${cityName}, Acharya Vikash Pandey`,
  };
}

export default async function LocationServicePage({
  params,
}: {
  params: Promise<{ location: string; service: string }>;
}) {
  const { location, service } = await params;
  const cityName = formatTitle(location);
  const serviceName = formatTitle(service);

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
              Book Puja
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="bg-gradient-to-b from-[#4a0e0e] to-[#2c0808] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase">
            Vedic Rituals in {cityName}, Kerala
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 leading-tight">
            {serviceName} in {cityName} by North Indian Pandit
          </h1>
          <p className="text-amber-100/85 text-sm md:text-base mb-8 leading-relaxed">
            Perform authentic <strong>{serviceName}</strong> in <strong>{cityName}</strong> with <strong>Acharya Vikash Pandey</strong> (Acharya, Maharshi Ved Vigyan Vidya Peeth). Complete North Indian Vedic vidhi, Hindi mantra explanation, and auspicious muhurat consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:9589529572" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg text-sm">
              📞 Call Now: +91 95895 29572
            </a>
            <a
              href={`https://wa.me/919589529572?text=Namaste%20Pandit%20Ji,%20I%20want%20to%20book%20${encodeURIComponent(serviceName)}%20in%20${encodeURIComponent(cityName)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg text-sm"
            >
              WhatsApp for {serviceName}
            </a>
          </div>
        </div>
      </section>

      {/* Details Card */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-amber-200 p-8 space-y-6">
          <h2 className="text-2xl font-extrabold text-amber-950">
            Why Book Acharya Vikash Pandey for {serviceName} in {cityName}?
          </h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>✔ <strong>100% Authentic North Indian Vidhi:</strong> Performed strictly according to Vedic scriptures in Hindi & Sanskrit.</li>
            <li>✔ <strong>Complete Samagri Guidance:</strong> Detailed checklist provided in advance or arranged upon request in {cityName}.</li>
            <li>✔ <strong>Doorstep Service Across {cityName}:</strong> Punctual arrival at your home, apartment, or office anywhere in {cityName} & nearby Kerala areas.</li>
            <li>✔ <strong>10+ Years of Experience:</strong> Trusted by over 2,000+ North Indian & Hindu families across Thiruvananthapuram and Kochi.</li>
          </ul>

          <div className="pt-4 border-t border-amber-200 flex flex-wrap gap-4 justify-between items-center">
            <Link href={`/${location}`} className="text-amber-900 font-bold text-sm underline">
              ← All Pujas in {cityName}
            </Link>
            <Link href="/#booking-form" className="bg-amber-900 hover:bg-amber-950 text-white font-bold px-6 py-3 rounded-xl text-sm shadow">
              Fill Online Booking Form
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c0808] text-amber-200 py-8 px-4 text-center border-t border-amber-900">
        <p className="font-bold text-base text-amber-100">Acharya Vikash Pandey - vedichindipanditinkerala.com</p>
        <p className="text-xs mt-1">Service Available in {cityName}, Thiruvananthapuram & Kochi | +91 95895 29572</p>
      </footer>
    </div>
  );
}