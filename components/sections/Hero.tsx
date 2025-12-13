import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownCircle, Target, TrendingUp, AlertTriangle } from 'lucide-react';
import Section from '../ui/Section';

const DecorativeBlobs = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        style={{ y: y1 }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-40 -left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70" 
      />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
    </div>
  );
}

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white">
      <DecorativeBlobs />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-brand-50 text-brand-600 border border-brand-100 text-sm font-bold tracking-wide mb-8">
            BÁO CÁO TỔNG KẾT
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight leading-none">
            YEAR END <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">
              REPORT 2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            Hành trình bứt phá, mở rộng quy mô và tái cấu trúc nền tảng kỹ thuật.
          </p>
        </motion.div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 bg-brand-500 text-white font-bold rounded-full shadow-lg shadow-brand-500/30 hover:bg-brand-600 transition-colors"
          onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Khám Phá Ngay
        </motion.button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-slate-300"
      >
        <ArrowDownCircle size={32} />
      </motion.div>
    </div>
  );
};

export const Overview: React.FC = () => {
  return (
    <Section id="overview" title="1. Tổng quan & Bối cảnh" subtitle="Nhìn lại bức tranh toàn cảnh của năm 2025.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 group">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform duration-300">
            <Target size={28} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Mục Tiêu & Kết Quả</h3>
          <p className="text-slate-500 leading-relaxed">
            Đầu năm đặt mục tiêu tăng trưởng nóng 300%. Thực tế đạt <span className="text-brand-600 font-bold">85%</span> KPI doanh thu nhưng vượt <span className="text-green-600 font-bold">120%</span> về người dùng mới.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group">
          <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
            <TrendingUp size={28} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Bối Cảnh Chung</h3>
          <p className="text-slate-500 leading-relaxed">
            Dự án chuyển mình từ Startup sang Scale-up. Tập trung ổn định hệ thống sau giai đoạn phát triển tính năng ồ ạt năm 2024.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 group">
          <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
            <AlertTriangle size={28} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Yếu Tố Ảnh Hưởng</h3>
          <p className="text-slate-500 leading-relaxed">
            Thị trường cạnh tranh gay gắt về giá. Nội bộ thay đổi cấu trúc team (Tech/Product). Chiến lược công ty xoay trục sang Enterprise.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Hero;