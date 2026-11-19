export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img 
        src="/images/logo.png" 
        alt="Acharya Vikash Pandey Logo" 
        className="w-14 h-14 object-contain rounded-full border border-amber-500/50 bg-black/20 p-0.5" 
      />
      <div className="flex flex-col">
        <span className="font-extrabold text-base md:text-lg tracking-wide text-amber-200">
          Acharya Vikash Pandey
        </span>
        <span className="text-xs text-white/80 font-medium tracking-wider">
          vedichindipanditinkerala.com
        </span>
      </div>
    </div>
  );
}