import React from 'react';
import Section from '../ui/Section';
import { ThumbsUp, ThumbsDown, AlertOctagon, Bug, Search, Activity } from 'lucide-react';

const QualityAndChallenges: React.FC = () => {
  return (
    <>
      <Section id="quality" title="5 & 6. Hiệu Quả & Chất Lượng" className="bg-secondary rounded-[3rem] my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Team Efficiency */}
            <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="p-2 bg-brand-500 rounded-lg text-white"><Activity size={20} /></div>
                    Hiệu quả Team
                </h3>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500">
                        <h4 className="text-green-600 font-bold text-sm mb-2 uppercase tracking-wide">Ưu điểm</h4>
                        <p className="text-slate-600 leading-relaxed">Tốc độ development nhanh, tinh thần teamwork cao, sẵn sàng OT khi release gấp.</p>
                    </div>
                     <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-500">
                        <h4 className="text-red-500 font-bold text-sm mb-2 uppercase tracking-wide">Hạn chế</h4>
                        <p className="text-slate-600 leading-relaxed">Quy trình code review còn lỏng lẻo đôi khi dẫn đến bug logic. Tài liệu kỹ thuật thiếu cập nhật.</p>
                    </div>
                </div>
            </div>

            {/* Product Quality */}
            <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="p-2 bg-purple-500 rounded-lg text-white"><Bug size={20} /></div>
                    Chất lượng Sản phẩm
                </h3>
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <div className="bg-slate-100 p-3 rounded-full text-slate-600"><Search size={20} /></div>
                        <div>
                            <span className="text-slate-900 font-bold block text-lg mb-1">Độ ổn định</span>
                            <span className="text-slate-500">Tăng đáng kể sau khi tách database. Uptime đạt <span className="text-brand-600 font-bold">99.8%</span>.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="bg-slate-100 p-3 rounded-full text-slate-600"><Activity size={20} /></div>
                        <div>
                            <span className="text-slate-900 font-bold block text-lg mb-1">Độ chính xác nghiệp vụ</span>
                            <span className="text-slate-500">Một số lỗi làm tròn số trong báo cáo tài chính đã được hotfix.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </Section>

      <Section id="challenges" title="7. Khó Khăn & Thách Thức" subtitle="Những rào cản chính cần vượt qua trong năm tới.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { title: "Giao tiếp nội bộ", desc: "Thông tin giữa Dev và Kinh doanh còn bị 'tam sao thất bản'.", color: "text-yellow-500", bg: "bg-yellow-50", border: "border-yellow-400" },
                { title: "Ưu tiên mập mờ", desc: "Danh sách backlog quá dài nhưng thiếu trọng số ưu tiên rõ ràng.", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-400" },
                { title: "Thiếu định hướng PO", desc: "Tầm nhìn sản phẩm dài hạn chưa được truyền tải xuống team member.", color: "text-red-500", bg: "bg-red-50", border: "border-red-400" },
                { title: "Hỗ trợ khách hàng", desc: "Phản hồi từ Tech -> Support -> Client còn chậm trễ.", color: "text-pink-500", bg: "bg-pink-50", border: "border-pink-400" }
            ].map((item, idx) => (
                <div key={idx} className={`bg-white p-8 rounded-3xl border-t-4 ${item.border} shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300`}>
                    <div className={`mb-6 p-3 rounded-2xl w-fit ${item.bg} ${item.color}`}>
                        <AlertOctagon size={28} />
                    </div>
                    <h4 className="text-slate-900 font-bold text-lg mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </Section>
    </>
  );
};

export default QualityAndChallenges;