import React from 'react';
import Section from '../ui/Section';
import { Server, Database, Code, CheckCircle2, Clock, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const IllustrationTech = () => (
    <svg className="w-full h-full opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0074bd" d="M47.5,-58.3C61.4,-48.9,72.4,-36.2,78.2,-21.5C84,-6.8,84.6,9.9,78.6,24.8C72.6,39.7,60,52.8,46.1,62.1C32.2,71.4,17,76.9,1.3,75.4C-14.4,73.8,-27.5,65.2,-39.8,55.4C-52.1,45.6,-63.6,34.6,-69.5,21.1C-75.4,7.6,-75.7,-8.4,-69.6,-22.7C-63.5,-37,-51,-49.6,-37.8,-59.2C-24.6,-68.8,-10.8,-75.4,2.2,-78C15.1,-80.6,28,-79.2,33.6,-67.7L47.5,-58.3Z" transform="translate(100 100)" />
    </svg>
);

const Engineering: React.FC = () => {
  return (
    <Section id="engineering" title="4. Phần Mềm & Kỹ Thuật" subtitle="Những cải tiến vượt bậc về công nghệ và hạ tầng.">
      
      {/* 4.1 Features Status */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-slate-900">4.1 Trạng Thái Tính Năng</h3>
            <div className="h-px flex-1 bg-slate-200"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Done */}
          <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-lg shadow-green-500/5 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-6 text-green-600 bg-green-50 w-fit px-3 py-1.5 rounded-full">
              <CheckCircle2 size={18} />
              <h4 className="font-bold text-sm">Đã hoàn thành</h4>
            </div>
            <ul className="space-y-4">
              <li className="text-slate-700 text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">Module Quản lý kho nâng cao</li>
              <li className="text-slate-700 text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">Tích hợp cổng thanh toán QT</li>
              <li className="text-slate-700 text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">App Mobile cho nhân viên</li>
            </ul>
          </div>

           {/* Doing */}
           <div className="bg-white p-6 rounded-2xl border border-brand-100 shadow-lg shadow-brand-500/5 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-6 text-brand-600 bg-brand-50 w-fit px-3 py-1.5 rounded-full">
              <PlayCircle size={18} />
              <h4 className="font-bold text-sm">Đang triển khai</h4>
            </div>
            <ul className="space-y-4">
              <li className="text-slate-700 text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">Hệ thống báo cáo động (BI)</li>
              <li className="text-slate-700 text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">AI Chatbot hỗ trợ CSKH</li>
            </ul>
          </div>

           {/* Delayed */}
           <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-lg shadow-orange-500/5 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-6 text-orange-500 bg-orange-50 w-fit px-3 py-1.5 rounded-full">
              <Clock size={18} />
              <h4 className="font-bold text-sm">Trì hoãn</h4>
            </div>
            <ul className="space-y-4">
              <li className="text-slate-700 text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">Marketplace cho bên thứ 3</li>
              <p className="text-xs text-slate-400 italic mt-1 px-2">Lý do: Ưu tiên tối ưu core hệ thống trước.</p>
            </ul>
          </div>
        </div>
      </div>

      {/* 4.2 & 4.3 Architecture & Perf */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
        {/* BG Illustration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] -z-10">
            <IllustrationTech />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 pl-4 border-l-4 border-purple-500">4.2 Tối Ưu Hiệu Năng</h3>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                <div className="flex justify-between text-sm text-slate-600 mb-2 font-medium">
                    <span>API Response Time</span>
                    <span className="text-green-600 font-bold bg-green-50 px-2 rounded">-60%</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "40%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-green-500 relative"
                    ></motion.div>
                </div>
                <div className="flex justify-between text-xs mt-2 text-slate-400">
                    <span>Trước: 500ms</span>
                    <span>Sau: 200ms</span>
                </div>
            </div>
             <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                <div className="flex justify-between text-sm text-slate-600 mb-2 font-medium">
                    <span>Server Load (Peak)</span>
                    <span className="text-green-600 font-bold bg-green-50 px-2 rounded">-40%</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-brand-500 relative"
                    ></motion.div>
                </div>
                <div className="flex justify-between text-xs mt-2 text-slate-400">
                    <span>Trước: 90% CPU</span>
                    <span>Sau: 54% CPU</span>
                </div>
            </div>
            <p className="text-slate-500 text-sm italic bg-slate-50 p-4 rounded-lg">
                Kết quả: Trải nghiệm người dùng mượt mà hơn, giảm chi phí cloud server 20%/tháng.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 pl-4 border-l-4 border-indigo-500">4.3 Hạ Tầng & Kiến Trúc</h3>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-500">
                    <Database size={24} />
                </div>
                <div>
                    <h4 className="text-slate-900 font-bold text-base mb-1">Partition Database</h4>
                    <p className="text-slate-500 text-sm">Phân chia dữ liệu lớn theo thời gian/tenant để tăng tốc truy vấn.</p>
                </div>
            </div>
            <div className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-500">
                    <Code size={24} />
                </div>
                <div>
                    <h4 className="text-slate-900 font-bold text-base mb-1">Microservices Separation</h4>
                    <p className="text-slate-500 text-sm">Tách module Báo cáo và Kho thành service riêng, độc lập với Product Core.</p>
                </div>
            </div>
            <div className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-500">
                    <Server size={24} />
                </div>
                <div>
                    <h4 className="text-slate-900 font-bold text-base mb-1">DevOps & Monitoring</h4>
                    <p className="text-slate-500 text-sm">Triển khai ELK Stack cho Log, Prometheus/Grafana cho Monitoring, Redis Cache.</p>
                </div>
            </div>
          </div>
        </div>
      </div>

    </Section>
  );
};

export default Engineering;