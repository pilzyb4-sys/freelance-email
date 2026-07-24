import { motion } from 'motion/react';
import { Bot, CheckCircle2, ChevronRight, Mail, Activity, Wallet, Smartphone } from 'lucide-react';

const TELEGRAM_BOT_URL = "https://telegram.me/KirimGmailBot?start=6460303545";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 font-sans selection:bg-emerald-500/30">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#18181b]/80 backdrop-blur-md border-b border-slate-800/50 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">KirimGmail</span>
          </div>
          <a 
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2 px-4 rounded-lg transition-all text-sm"
          >
            Buka Telegram &rarr;
          </a>
        </div>
      </header>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Pendaftaran Terbuka
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-tight"
          >
            Hasilkan Uang Tambahan dengan Membuat Akun Gmail
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Dapatkan bayaran <span className="text-emerald-500 italic underline decoration-wavy decoration-2">Rp 3.000</span> untuk setiap akun Gmail valid yang Anda buat. Kerja fleksibel, pantau progres real-time, dan cairkan pendapatan Anda dengan mudah.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95"
            >
              <Bot className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              Mulai di Telegram Sekarang
            </a>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Wallet className="w-6 h-6 text-white" />}
              title="Bayaran Pasti"
              description="Rp 3.000 langsung masuk ke saldo Anda untuk setiap akun yang tervalidasi sukses."
              delay={0.4}
            />
            <FeatureCard 
              icon={<Activity className="w-6 h-6 text-white" />}
              title="Pantau Real-Time"
              description="Cek status pengerjaan, saldo, dan riwayat tugas Anda langsung dari bot Telegram tanpa delay."
              delay={0.5}
            />
            <FeatureCard 
              icon={<Smartphone className="w-6 h-6 text-white" />}
              title="Kerja Darimana Saja"
              description="Tidak terikat waktu. Buat akun kapanpun Anda memiliki waktu luang, cukup gunakan smartphone Anda."
              delay={0.6}
            />
          </div>
        </section>

        {/* How it Works Section */}
        <section className="max-w-3xl mx-auto px-6 lg:px-12 bg-gradient-to-br from-[#18181b] to-[#09090b] rounded-3xl p-8 md:p-12 border border-slate-800/50 shadow-xl relative overflow-hidden mx-6 lg:mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center text-white relative z-10">Cara Kerja Mudah</h2>
          
          <div className="space-y-8 text-left relative z-10">
            <Step 
              number="1"
              title="Buka Telegram Bot"
              description="Klik tombol daftar di atas untuk membuka bot Telegram kami. Klik 'Start' untuk memulai sesi Anda."
            />
            <Step 
              number="2"
              title="Terima Tugas"
              description="Minta tugas baru melalui menu bot. Bot akan mengirimkan detail Email dan Kata Sandi (Password) yang harus Anda daftarkan."
            />
            <Step 
              number="3"
              title="Daftarkan Akun & Konfirmasi"
              description="Gunakan detail email dan sandi dari bot untuk membuat akun Gmail. Setelah berhasil, konfirmasi penyelesaian tugas ke bot."
            />
            <Step 
              number="4"
              title="Terima Pembayaran"
              description="Saldo Anda akan bertambah Rp 3.000 secara otomatis setelah akun divalidasi. Tarik saldo kapan saja sesuai ketentuan."
            />
          </div>

          <div className="mt-12 text-center pt-8 border-t border-slate-800/50 relative z-10">
            <a 
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
            >
              Coba sistemnya sekarang <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-[10px] text-slate-600 font-medium uppercase tracking-[0.3em] border-t border-slate-800/50">
        <p>&copy; {new Date().getFullYear()} KirimGmail &bull; Terpercaya & Cepat</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="bg-[#18181b] p-6 rounded-3xl border border-slate-800/50 shadow-xl flex flex-col group transition-all hover:bg-[#1e1e23]"
    >
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="flex gap-4 md:gap-6 group">
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 font-bold flex items-center justify-center border border-emerald-500/20 transition-colors group-hover:bg-emerald-500 group-hover:text-slate-950">
          {number}
        </div>
        <div className="w-px h-full bg-slate-800 mt-4 min-h-[40px] last:hidden"></div>
      </div>
      <div className="pb-8">
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}
