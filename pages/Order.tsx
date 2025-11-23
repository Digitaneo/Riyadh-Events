import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Order: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-charcoal min-h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold to-riyadh-purple"></div>
          
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold font-heading text-charcoal mb-4">تم تأكيد طلبك بنجاح!</h2>
          <p className="text-gray-500 font-body mb-8 text-lg">
            شكراً لحجزك في فعاليات الرياض. تم إرسال تفاصيل التذكرة إلى بريدك الإلكتروني.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
            <div className="flex justify-between mb-2">
              <span className="text-charcoal font-bold">رقم الطلب:</span>
              <span className="text-gray-500">#ORD-2025-8834</span>
            </div>
            <div className="flex justify-between">
               <span className="text-charcoal font-bold">الحالة:</span>
               <span className="text-green-600 font-bold">مدفوع</span>
            </div>
          </div>

          <Link to="/" className="inline-flex items-center justify-center bg-charcoal text-white font-bold px-8 py-3 rounded-xl hover:bg-gold hover:text-charcoal transition-all">
            <Home className="w-5 h-5 ml-2" />
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;