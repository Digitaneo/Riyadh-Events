import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-charcoal min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-dark-gray p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-800">
          <SectionTitle title="تواصل معنا" subtitle="نحن هنا للإجابة على استفساراتك" center />
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-gray-400 mb-2 font-bold">الاسم الكامل</label>
              <input type="text" className="w-full bg-charcoal text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" placeholder="أدخل اسمك" />
            </div>
            
            <div>
              <label className="block text-gray-400 mb-2 font-bold">البريد الإلكتروني</label>
              <input type="email" className="w-full bg-charcoal text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" placeholder="email@example.com" />
            </div>
            
            <div>
              <label className="block text-gray-400 mb-2 font-bold">الرسالة</label>
              <textarea rows={4} className="w-full bg-charcoal text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" placeholder="كيف يمكننا مساعدتك؟"></textarea>
            </div>
            
            <button className="w-full bg-gold text-charcoal font-bold text-lg py-4 rounded-lg hover:bg-gold-light transition-colors shadow-lg">
              إرسال الرسالة
            </button>
          </form>
          
          <p className="text-center text-gray-600 text-xs mt-6">
            * سيتم استخدام هذه البيانات لأغراض العرض الأكاديمي فقط كجزء من مشروع التخرج.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;