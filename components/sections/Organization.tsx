import React, { useMemo } from 'react';
import Section from '../ui/Section';
import Counter from '../ui/Counter';
import { Users, UserPlus, GitMerge, ShieldAlert } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'T1', staff: 5 },
  { name: 'T3', staff: 15 },
  { name: 'T6', staff: 30 },
  { name: 'T9', staff: 42 },
  { name: 'T12', staff: 50 },
];

// Generate 50 items with random attributes for layout and animation
// Defined outside component to keep consistency across re-renders
const teamMembers = Array.from({ length: 50 }, (_, i) => {
  // Random size between 70px and 110px
  const size = Math.floor(Math.random() * 40) + 70;
  
  return {
    id: i,
    img: `https://picsum.photos/200/200?random=${i + 100}`,
    // Random delay between 0s and 1.2s to create "popcorn" effect (batches appearing)
    delay: Math.random() * 1.2,
    // Random margins to break the grid lines
    marginTop: Math.floor(Math.random() * 30),
    marginRight: Math.floor(Math.random() * 20),
    // Slight random rotation for more natural chaotic look
    rotate: Math.floor(Math.random() * 10) - 5, 
    size: size,
  };
});

const TeamGrid = () => {
  return (
    <div className="py-20 bg-secondary/30 rounded-[3rem] mt-12 px-4 md:px-12 overflow-hidden">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Biệt Đội Tiên Phong</h3>
        <p className="text-slate-500">Những mảnh ghép độc bản tạo nên bức tranh thành công của năm 2025.</p>
        <div className="mt-6 flex justify-center gap-2">
            <div className="w-12 h-1.5 bg-brand-500 rounded-full"></div>
            <div className="w-2 h-1.5 bg-slate-300 rounded-full"></div>
            <div className="w-2 h-1.5 bg-slate-300 rounded-full"></div>
        </div>
      </div>

      {/* Scattered Layout */}
      <div className="flex flex-wrap justify-center items-center max-w-7xl mx-auto min-h-[400px]">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.2, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ 
              duration: 0.8, 
              delay: member.delay,
              ease: [0.22, 1, 0.36, 1] // Custom ease for smooth pixel pop
            }}
            style={{
                width: member.size,
                height: member.size,
                marginTop: member.marginTop,
                marginRight: member.marginRight,
                rotate: member.rotate
            }}
            className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:scale-125 hover:z-20 hover:rotate-0 transition-all duration-300 cursor-pointer border-4 border-white"
          >
            <img 
              src={member.img} 
              alt="" 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Organization: React.FC = () => {
  return (
    <>
    <Section id="organization" title="2. Nhân Sự & Tổ Chức" subtitle="Sự bùng nổ về quy mô và tái cấu trúc đội ngũ.">
      
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100">
          <div className="flex items-center gap-4 mb-2">
            <Users className="text-brand-500" />
            <span className="text-slate-500 text-sm font-medium">Quy mô</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-slate-900">5</span>
            <span className="text-slate-400 text-2xl font-normal">→</span>
            <Counter value={50} className="text-4xl font-bold text-brand-600" />
          </div>
          <div className="text-emerald-600 text-xs mt-2 font-semibold bg-emerald-50 inline-block px-2 py-1 rounded">+900% Tăng trưởng</div>
        </div>

         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100">
          <div className="flex items-center gap-4 mb-2">
            <UserPlus className="text-purple-500" />
            <span className="text-slate-500 text-sm font-medium">Tuyển mới</span>
          </div>
          <Counter value={48} className="text-4xl font-bold text-slate-900" />
          <div className="text-slate-500 text-xs mt-2">Nhân sự gia nhập</div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100">
          <div className="flex items-center gap-4 mb-2">
            <ShieldAlert className="text-red-500" />
            <span className="text-slate-500 text-sm font-medium">Thiếu hụt</span>
          </div>
          <div className="text-4xl font-bold text-slate-900">UI/UX</div>
          <div className="text-red-500 text-xs mt-2">Vị trí critical</div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100">
          <div className="flex items-center gap-4 mb-2">
            <GitMerge className="text-orange-500" />
            <span className="text-slate-500 text-sm font-medium">Cấu trúc</span>
          </div>
          <div className="text-xl font-bold text-slate-900 mt-1">Squad Model</div>
          <div className="text-slate-500 text-xs mt-2">Chuyển đổi thành công</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Chart */}
        <div className="h-[350px] w-full bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <h4 className="text-slate-900 font-bold mb-6 text-center">Biểu đồ tăng trưởng nhân sự 2025</h4>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorStaff" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0074bd" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#0074bd" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false} />
              <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', color: '#1e293b', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ color: '#0074bd', fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="staff" stroke="#0074bd" strokeWidth={3} fillOpacity={1} fill="url(#colorStaff)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Details Text */}
        <div className="space-y-8">
            <div className="border-l-4 border-brand-500 pl-6 py-2">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Cơ cấu Squad</h4>
                <p className="text-slate-600">
                    Đã định hình rõ các Squad Lead. Mỗi Squad chịu trách nhiệm end-to-end cho domain của mình. 
                    <br/><br/>
                    <span className="text-brand-600 font-semibold bg-brand-50 px-2 py-0.5 rounded">Điểm sáng:</span> Thành lập đội BA chuyên trách, giúp giảm tải việc làm rõ requirements cho Dev.
                </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-2">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Đánh giá vận hành</h4>
                <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 font-bold bg-green-100 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</span>
                        Phối hợp Dev - Test tốt hơn nhờ quy trình CI/CD.
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold bg-red-100 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✕</span>
                        Giao tiếp với team Kinh doanh còn đứt gãy, thiếu thông tin về roadmap.
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold bg-red-100 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✕</span>
                        QLDV chưa nắm bắt hết tính năng mới để hướng dẫn khách hàng.
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </Section>
    
    <TeamGrid />
    </>
  );
};

export default Organization;