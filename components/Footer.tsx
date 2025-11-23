import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Mail, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 space-x-reverse mb-6">
               <div className="bg-gold w-8 h-8 rounded flex items-center justify-center">
                <Star className="text-charcoal w-4 h-4 fill-current" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">فعاليات <span className="text-gold">الرياض</span></h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-body">
              دليلك الشامل لأضخم الفعاليات الترفيهية في المنطقة. مشروع تخرج يجمع بين الفخامة وتقنيات الذكاء الاصطناعي.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold font-heading mb-6">روابط سريعة</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-body">
              <li><Link to="/events" className="hover:text-gold transition-colors">جميع الفعاليات</Link></li>
              <li><Link to="/calendar" className="hover:text-gold transition-colors">جدول الأسبوع</Link></li>
              <li><Link to="/qiddiya" className="hover:text-gold transition-colors">مستقبل القدية</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">توثيق المشروع</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold font-heading mb-6">تواصل معنا</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-body">
              <li className="flex items-center">
                <Mail className="w-4 h-4 ml-2 text-gold" />
                contact@riyadhevents.org
              </li>
              <li className="flex items-center">
                <Twitter className="w-4 h-4 ml-2 text-gold" />
                @RiyadhEvents
              </li>
            </ul>
          </div>

          {/* Newsletter (Mock) */}
          <div>
             <h4 className="text-white font-bold font-heading mb-6">النشرة البريدية</h4>
             <p className="text-gray-500 text-xs mb-4">اشترك لمعرفة آخر الأخبار</p>
             <div className="flex">
               <input type="email" placeholder="بريدك الإلكتروني" className="bg-dark-gray text-white px-4 py-2 rounded-r-lg outline-none border border-gray-800 focus:border-gold w-full" />
               <button className="bg-gold text-charcoal px-4 py-2 rounded-l-lg font-bold hover:bg-gold-light transition-colors">اشتراك</button>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            © 2025 جميع الحقوق محفوظة - فعاليات الرياض
          </p>
          <div className="flex space-x-4 space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;