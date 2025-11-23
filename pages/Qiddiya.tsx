import React from 'react';
import { qiddiyaZones, timeline } from '../data/mockData';

const Qiddiya: React.FC = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Full Screen Hero */}
      <div className="relative h-screen flex items-center justify-center">
         <div className="absolute inset-0">
           <img src="https://picsum.photos/id/1033/1920/1080" alt="Qiddiya Future" className="w-full h-full object-cover opacity-60" />
           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
         </div>
         <div className="relative z-10 text-center px-6">
           <h1 className="text-6xl md:text-8xl font-heading font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
             القدية
           </h1>
           <p className="text-2xl md:text-3xl font-light text-gray-200 max-w-3xl mx-auto">
             عاصمة الترفيه والرياضة والفنون في المستقبل
           </p>
         </div>
         
         <div className="absolute bottom-10 left-0 right-0 text-center animate-bounce">
           <span className="text-gray-400 text-sm">اكتشف المزيد</span>
         </div>
      </div>

      {/* Future Zones */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold mb-16 text-center">مناطق <span className="text-riyadh-purple">المستقبل</span></h2>
        
        <div className="grid grid-cols-1 gap-20">
          {qiddiyaZones.map((zone, index) => (
            <div key={zone.id} className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden group">
                  <img src={zone.image} alt={zone.title} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-riyadh-purple/20 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-right">
                <h3 className="text-3xl font-bold mb-4 text-white">{zone.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">{zone.description}</p>
                <button className="text-riyadh-purple font-bold border-b border-riyadh-purple pb-1 hover:text-white hover:border-white transition-all">
                  عرض التفاصيل والمخططات
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-dark-gray relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-gold">الجدول الزمني للمشروع</h2>
          
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center justify-between relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-5/12"></div>
                  <div className="z-10 bg-charcoal border-4 border-gold rounded-full w-16 h-16 flex items-center justify-center font-bold text-white shadow-lg mb-4 md:mb-0">
                    {item.year}
                  </div>
                  <div className={`w-full md:w-5/12 bg-charcoal p-8 rounded-2xl border border-gray-800 hover:border-gold transition-colors ${index % 2 === 0 ? 'text-right' : 'text-right md:text-left'}`}>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Qiddiya;