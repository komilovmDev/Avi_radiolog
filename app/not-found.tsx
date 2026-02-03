import Link from "next/link"

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 pt-20">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-medical-blue mb-2">404</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">Sahifa topilmadi</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-[#0284C7] text-white font-medium hover:bg-[#0369A1] transition-colors"
        >
          Bosh sahifaga
        </Link>
      </div>
    </section>
  )
}
