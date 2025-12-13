import React from 'react';
import Section from '../ui/Section';
import Counter from '../ui/Counter';
import { Layers, Zap, Heart, Flag } from 'lucide-react';

const FuturePlan: React.FC = () => {
  return (
    <Section id="plan" title="8. Đề Xuất & Kế Hoạch 2026" subtitle="Chiến lược cho năm bản lề tiếp theo.">
      
      {/* 8.1 - 8.3 Strategy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        
        {/* Process */}
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-200 transition-colors">
            <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6">
                <Layers size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Tổ chức & Quy trình</h3>
            <ul className="text-slate-600 text-sm space-y-4 list-disc pl-4 marker:text-brand-500">
                <li>Kênh trao đổi thống nhất cho team Kinh doanh.</li>
                <li>Nâng cao vai trò quyết định của BA và UI/UX trong giai đoạn design.</li>
                <li>Chuẩn hóa luồng: QLDV → PO → Dev → Support.</li>
            </ul>
        </div>

        {/* Product Strategy */}
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-purple-200 transition-colors">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Chiến lược Sản phẩm</h3>
            <ul className="text-slate-600 text-sm space-y-4 list-disc pl-4 marker:text-purple-500">
                <li>Lựa chọn tính năng dựa trên Data & Chiến lược công ty.</li>
                <li>Tiếp tục tối ưu Core hệ thống để chịu tải gấp 3 lần.</li>
                <li>Xây dựng KPI tracking hành vi người dùng thật (User Journey).</li>
            </ul>
        </div>

        {/* Quality */}
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-emerald-200 transition-colors">
             <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Heart size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Chất lượng</h3>
            <ul className="text-slate-600 text-sm space-y-4 list-disc pl-4 marker:text-emerald-500">
                <li>Kiểm định chất lượng nghiêm ngặt trước và sau deploy.</li>
                <li>Thu thập phản hồi người dùng định kỳ hàng tháng.</li>
                <li>Log & Monitor sự cố theo tiêu chuẩn quốc tế.</li>
            </ul>
        </div>
      </div>

      {/* 8.4 Goals */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">Mục Tiêu Năm 2026</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             <div className="bg-brand-500 p-8 text-center rounded-3xl text-white shadow-lg shadow-brand-500/30">
                <div className="text-4xl font-black mb-2">Top 1</div>
                <div className="text-xs uppercase tracking-wider font-medium opacity-80">Thị phần ngách</div>
             </div>
             <div className="bg-white p-8 text-center rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                <Counter value={10000} className="text-4xl font-black text-slate-900 mb-2 block" />
                <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Khách hàng Active</div>
             </div>
             <div className="bg-white p-8 text-center rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                <div className="text-4xl font-black text-slate-900 mb-2">$5M</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Doanh thu ARR</div>
             </div>
             <div className="bg-slate-900 p-8 text-center rounded-3xl text-white shadow-xl">
                <div className="text-4xl font-black mb-2">Elite</div>
                <div className="text-xs uppercase tracking-wider font-medium opacity-80">Team Culture</div>
             </div>
        </div>
      </div>

      {/* 9. Conclusion */}
      <div className="bg-gradient-to-br from-brand-600 to-brand-800 p-10 md:p-16 rounded-[3rem] text-center max-w-5xl mx-auto shadow-2xl shadow-brand-900/20 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <Flag className="mx-auto mb-8 text-white/80" size={64} />
        <h2 className="text-3xl md:text-5xl font-bold mb-8">9. Tổng Kết & Tầm Nhìn</h2>
        <p className="text-lg md:text-xl text-brand-50 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
            Năm 2025 là một năm đầy thách thức nhưng cũng đầy vinh quang. Chúng ta đã xây dựng được một nền móng vững chắc về cả con người và công nghệ. 
            <br/><br/>
            Năm 2026 sẽ là năm của sự <span className="text-white font-bold">Tối ưu hóa</span> và <span className="text-white font-bold">Tăng tốc</span>. Hãy giữ vững tinh thần chiến binh để chinh phục những đỉnh cao mới!
        </p>
        <div className="text-sm text-brand-200 font-medium tracking-widest uppercase">Prepared by Product Team • Dec 2025</div>
      </div>

    </Section>
  );
};

export default FuturePlan;