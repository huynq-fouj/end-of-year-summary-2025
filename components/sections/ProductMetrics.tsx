import React from 'react';
import Section from '../ui/Section';
import Counter from '../ui/Counter';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const customerData = [
  { month: 'T1', new: 120, churn: 10 },
  { month: 'T3', new: 200, churn: 15 },
  { month: 'T5', new: 350, churn: 25 },
  { month: 'T7', new: 450, churn: 40 },
  { month: 'T9', new: 600, churn: 30 },
  { month: 'T11', new: 800, churn: 20 },
  { month: 'T12', new: 950, churn: 15 },
];

const activeUsersData = [
  { name: 'T1', dau: 500 },
  { name: 'T3', dau: 1200 },
  { name: 'T6', dau: 3000 },
  { name: 'T9', dau: 4500 },
  { name: 'T12', dau: 6200 },
];

const ProductMetrics: React.FC = () => {
  return (
    <Section id="product" title="3. Sản Phẩm & Khách Hàng" subtitle="Dữ liệu tăng trưởng và hành vi người dùng trong năm 2025." className="bg-secondary/50 rounded-[3rem] my-10">
      
      {/* Charts Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
        {/* Customer Acquisition */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex justify-between items-center">
            Khách hàng mới vs Rời bỏ
            <span className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full">Đơn vị: Khách hàng</span>
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={customerData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="month" stroke="#94a3b8" axisLine={false} tickLine={false} />
                <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', color: '#1e293b', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    cursor={{fill: '#f8fafc'}}
                />
                <Legend />
                <Bar dataKey="new" name="Mới" fill="#0074bd" radius={[4, 4, 0, 0]} />
                <Bar dataKey="churn" name="Rời bỏ" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 text-sm bg-red-50 text-red-700 p-4 rounded-xl border border-red-100">
            <span className="font-bold">Lưu ý:</span> Tỷ lệ rời bỏ cao vào Q3 do lỗi server, đã khắc phục triệt để vào Q4.
          </div>
        </div>

        {/* DAU Growth */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex justify-between items-center">
            Tăng trưởng DAU
            <span className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full">Mục tiêu: 5000</span>
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activeUsersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" axisLine={false} tickLine={false} />
                <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', color: '#1e293b', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line type="monotone" dataKey="dau" stroke="#10b981" strokeWidth={4} dot={{r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#fff'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 text-sm bg-green-50 text-green-800 p-4 rounded-xl border border-green-100">
            <span className="font-bold">Kết luận:</span> Tăng trưởng <span className="font-bold">Nhanh</span>. Đạt mục tiêu năm vào tháng 10.
          </div>
        </div>

      </div>

      {/* Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-brand-500/5">
          <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Tổng KH Mới</h4>
          <Counter value={3470} className="text-4xl font-black text-brand-600" />
          <p className="text-sm text-slate-500 mt-2">Đạt 115% kế hoạch năm</p>
        </div>
        <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-purple-500/5">
          <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Retention Rate</h4>
          <Counter value={88} suffix="%" className="text-4xl font-black text-purple-600" />
          <p className="text-sm text-slate-500 mt-2">Cần cải thiện (Mục tiêu 92%)</p>
        </div>
        <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-emerald-500/5">
          <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Đánh giá chung</h4>
          <div className="text-4xl font-black text-emerald-500">Tốt</div>
          <p className="text-sm text-slate-500 mt-2">Thị trường đón nhận tích cực</p>
        </div>
      </div>

    </Section>
  );
};

export default ProductMetrics;