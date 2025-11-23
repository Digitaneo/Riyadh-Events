import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-charcoal min-h-screen">
      <div className="container mx-auto px-6">
        
        <div className="bg-white rounded-3xl p-10 shadow-xl mb-10">
          <div className="max-w-4xl mx-auto text-right">
            <SectionTitle title="حول المشروع" subtitle="مشروع تخرج: تطوير واجهة مستخدم باستخدام الذكاء الاصطناعي" color="gold" center />
            
            <div className="space-y-12 font-body text-lg leading-relaxed">
              
              <div className="border-b border-gray-100 pb-8">
                <h3 className="text-2xl font-bold font-heading mb-4 text-charcoal">1. مقدمة وفكرة المشروع</h3>
                <p className="text-gray-600">
                  يهدف هذا المشروع إلى تصميم وبناء منصة ويب تفاعلية وحديثة تخدم زوار "فعاليات الرياض" وتعرض رؤية "القدية" المستقبلية. تم التركيز على تجربة المستخدم (UX) والهوية البصرية الفاخرة التي تعكس روح الفعاليات.
                </p>
              </div>

              <div className="border-b border-gray-100 pb-8">
                <h3 className="text-2xl font-bold font-heading mb-4 text-charcoal">2. دور الذكاء الاصطناعي (AI Studio)</h3>
                <p className="text-gray-600 mb-4">
                  تم استخدام أدوات Google AI Studio كـ "مساعد ذكي" في عملية التطوير، وليس كبديل للمبرمج. شملت المساعدة:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mr-4">
                  <li>توليد هيكلية الكود (Scaffolding) للمكونات الرئيسية.</li>
                  <li>اقتراح لوحات الألوان (Color Palettes) المتناسقة.</li>
                  <li>تحسين صياغة نصوص المحتوى (Content Writing).</li>
                  <li>تصحيح بعض أخطاء TypeScript أثناء البناء.</li>
                </ul>
              </div>

              <div className="border-b border-gray-100 pb-8">
                <h3 className="text-2xl font-bold font-heading mb-4 text-charcoal">3. التقنيات المستخدمة</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-gray-50 p-4 rounded-xl font-bold text-charcoal border border-gray-200">React 18</div>
                  <div className="bg-gray-50 p-4 rounded-xl font-bold text-blue-600 border border-gray-200">TypeScript</div>
                  <div className="bg-gray-50 p-4 rounded-xl font-bold text-teal-500 border border-gray-200">Tailwind CSS</div>
                  <div className="bg-gray-50 p-4 rounded-xl font-bold text-orange-500 border border-gray-200">Google Fonts</div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-charcoal">4. مراحل التنفيذ</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center ml-4 flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-charcoal">التخطيط والتصميم</h4>
                      <p className="text-gray-500 text-sm">تحديد المتطلبات ورسم الـ Wireframes.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center ml-4 flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-charcoal">بناء المكونات (Development)</h4>
                      <p className="text-gray-500 text-sm">برمجة الصفحات باستخدام React و Tailwind.</p>
                    </div>
                  </div>
                   <div className="flex items-start">
                    <span className="bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center ml-4 flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-charcoal">ربط البيانات (Mock Data)</h4>
                      <p className="text-gray-500 text-sm">إنشاء ملفات JSON لمحاكاة البيانات الحقيقية.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center ml-4 flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-charcoal">الرفع والتوثيق</h4>
                      <p className="text-gray-500 text-sm">النشر النهائي وإعداد التقرير.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;