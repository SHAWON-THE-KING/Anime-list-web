export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-100 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left text-sm">
          © {new Date().getFullYear()} <span className="font-bold text-sky-400">Made By Shawon</span>. All rights reserved.
        </div>
        <div className="flex gap-5 text-lg">
          <a href="/contact" className="hover:text-sky-400">Contact</a>
          <a href="/contact" className="hover:text-sky-400">Official X</a>
          <a href="/contact" className="hover:text-sky-400">Facebook</a>
          <a href="/contact" className="hover:text-sky-400">Discord</a>
        </div>
      </div>
    </footer>
  );
}
