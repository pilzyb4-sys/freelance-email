import React from 'react';
import { motion } from 'motion/react';
import { Bot, CheckCircle2, ChevronRight, Mail, Activity, Wallet, Smartphone, PlayCircle, AlertTriangle, MessageSquare, Inbox, UserPlus, Coins } from 'lucide-react';

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
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Pendaftaran Terbuka
          </div>
          
          <h1 
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-tight"
          >
            Hasilkan Uang Tambahan dengan Membuat Akun Gmail
          </h1>
          
          <p 
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Dapatkan bayaran <span className="text-emerald-500 italic underline decoration-wavy decoration-2">Rp 3.000</span> untuk setiap akun Gmail valid yang Anda buat. Kerja fleksibel, pantau progres real-time, dan cairkan pendapatan Anda dengan mudah.
          </p>

          <div
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
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Wallet className="w-6 h-6 text-white" />}
              title="Bayaran Pasti"
              description="Rp 3.000 langsung masuk ke saldo Anda untuk setiap akun yang tervalidasi sukses."
            />
            <FeatureCard 
              icon={<Activity className="w-6 h-6 text-white" />}
              title="Pantau Real-Time"
              description="Cek status pengerjaan, saldo, dan riwayat tugas Anda langsung dari bot Telegram tanpa delay."
            />
            <FeatureCard 
              icon={<Smartphone className="w-6 h-6 text-white" />}
              title="Kerja Darimana Saja"
              description="Tidak terikat waktu. Buat akun kapanpun Anda memiliki waktu luang, cukup gunakan smartphone Anda."
            />
          </div>
        </section>

        {/* How it Works Section */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Langkah Mudah Memulai</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Ikuti 4 langkah sederhana ini untuk mulai menghasilkan uang dari rumah.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 z-0"></div>
            
            <StepCard 
              number="1"
              title="Buka Bot"
              description="Klik tombol daftar untuk membuka bot Telegram kami. Klik 'Start' untuk memulai."
              icon={<MessageSquare className="w-6 h-6" />}
            />
            <StepCard 
              number="2"
              title="Terima Tugas"
              description="Minta tugas di menu bot. Anda akan menerima detail Email dan Sandi."
              icon={<Inbox className="w-6 h-6" />}
            />
            <StepCard 
              number="3"
              title="Daftarkan"
              description="Buat akun Gmail dengan detail tersebut dan konfirmasi ke bot."
              icon={<UserPlus className="w-6 h-6" />}
            />
            <StepCard 
              number="4"
              title="Gajian"
              description="Saldo bertambah Rp 3.000 otomatis setelah divalidasi. Tarik kapan saja."
              icon={<Coins className="w-6 h-6" />}
            />
          </div>

          <div className="mt-16 text-center">
            <a 
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 font-bold hover:bg-emerald-500/20 px-8 py-4 rounded-xl transition-all border border-emerald-500/20 hover:scale-105 active:scale-95"
            >
              Coba sistemnya sekarang <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Tips Section */}
        <section className="max-w-5xl mx-auto px-6 mb-24 mt-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Panduan & Tips Sukses</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Pelajari rahasia membuat banyak akun tanpa terkena limit dan hal penting yang perlu diperhatikan.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Video Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#18181b] border border-slate-800/50 rounded-3xl p-6 md:p-8 flex flex-col group hover:bg-[#1e1e23] transition-all shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Video Tutorial</h3>
                  <p className="text-xs text-slate-400">Cara Bikin Ribuan Gmail</p>
                </div>
              </div>
              
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/50 mb-6 relative group-hover:border-slate-700 transition-colors shadow-inner">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/b0ExbA8kPrM" 
                  title="YouTube video tutorial" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
              
              <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                Tonton panduan lengkap agar Anda bisa membuat banyak akun tanpa terkena limit dari Google. Strategi ini sangat penting untuk memaksimalkan potensi penghasilan Anda.
              </p>

              <a 
                 href="https://youtu.be/b0ExbA8kPrM"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold px-6 py-4 rounded-2xl transition-all w-full border border-red-500/20"
               >
                  Buka di Aplikasi YouTube
               </a>
            </motion.div>

            {/* Warning Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-amber-500/10 to-[#18181b] border border-amber-500/20 rounded-3xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden shadow-xl"
            >
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <AlertTriangle className="w-64 h-64 text-amber-500" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500 border border-amber-500/30 mb-8">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Peringatan Penting</h3>
                
                <div className="bg-[#09090b]/50 p-6 rounded-2xl border border-amber-500/10 mb-8 shadow-inner">
                  <p className="text-lg text-white font-medium leading-relaxed italic">
                    "Kalo kamu disuruh verifikasi nomor telepon, artinya gmail belum terbuat ya."
                  </p>
                </div>
                
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3 bg-[#18181b]/50 p-3 rounded-xl border border-slate-800/50">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="leading-relaxed">Gunakan metode dari video tutorial untuk menghindari limit pendaftaran Google.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#18181b]/50 p-3 rounded-xl border border-slate-800/50">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="leading-relaxed">Pastikan pendaftaran berhasil sampai Anda benar-benar masuk ke kotak masuk (inbox).</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#18181b]/50 p-3 rounded-xl border border-slate-800/50">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="leading-relaxed">Jangan kirimkan akun yang tersangkut verifikasi nomor handphone ke dalam bot.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
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

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div 
      className="bg-[#18181b] p-6 rounded-3xl border border-slate-800/50 shadow-xl flex flex-col group transition-all hover:bg-[#1e1e23]"
    >
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description, icon }: { number: string, title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="bg-[#18181b] border border-slate-800/50 rounded-3xl p-6 relative overflow-hidden group hover:bg-[#1e1e23] hover:border-emerald-500/30 transition-all shadow-xl z-10">
      <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
        <span className="text-[12rem] font-black text-white leading-none">{number}</span>
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shadow-inner">
          {icon}
        </div>
        <div className="mb-2">
           <span className="text-emerald-500 font-bold text-sm tracking-wider uppercase">Langkah {number}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
}
