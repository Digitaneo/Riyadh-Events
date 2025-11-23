import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import { events } from '../data/mockData';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simulation Date: We assume "Today" is 2025-11-20 to match the mock data
  const SIMULATED_TODAY = '2025-11-20';
  
  // Helper to compare dates (YYYY-MM-DD string comparison works alphabetically)
  const isToday = (date: string) => date === SIMULATED_TODAY;
  
  // Week: From Tomorrow (21st) to 7 days later (27th)
  const isThisWeek = (date: string) => {
    return date > SIMULATED_TODAY && date <= '2025-11-27';
  };

  // Month: After the week window (28th onwards)
  const isThisMonth = (date: string) => {
    return date > '2025-11-27';
  };

  const todayEvents = events.filter(e => isToday(e.date));
  const weekEvents = events.filter(e => isThisWeek(e.date));
  const monthEvents = events.filter(e => isThisMonth(e.date));
  
  const trendingEvents = events.filter(e => e.isTrending);

  // Auto-slider logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trendingEvents.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [trendingEvents.length]);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1018/1920/1080" 
            alt="Riyadh Events Night" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight drop-shadow-2xl">
            فوق <span className="text-gold">الخيال</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-body mb-10 max-w-3xl mx-auto font-light">
            دليلك الملهم لأبرز فعاليات الرياض. استكشف، خطط، واستمتع بلحظات لا تنسى.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 md:space-x-reverse">
            <Link 
              to="/events" 
              className="bg-gold text-charcoal font-bold text-lg px-10 py-4 rounded-full hover:bg-gold-light transition-all transform hover:scale-105 shadow-lg shadow-gold/20"
            >
              اكتشف فعاليات اليوم
            </Link>
            <Link 
              to="/qiddiya" 
              className="bg-transparent border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-white hover:text-charcoal transition-all"
            >
              مستقبل القدية
            </Link>
          </div>
        </div>

        {/* Hero Footer Indicators */}
        <div className="absolute bottom-10 w-full flex justify-center space-x-10 space-x-reverse text-white/70 text-sm font-body">
          <div className="flex flex-col items-center">
            <span className="font-bold text-gold text-lg">14</span>
            <span>منطقة</span>
          </div>
          <div className="h-10 w-px bg-white/20"></div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-gold text-lg">+100</span>
            <span>فعالية يومية</span>
          </div>
          <div className="h-10 w-px bg-white/20"></div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-gold text-lg">24/7</span>
            <span>ترفيه مستمر</span>
          </div>
        </div>
      </section>

      {/* Today's Events */}
      <section className="py-20 bg-soft-gray text-charcoal">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <SectionTitle 
              title="فعاليات اليوم" 
              subtitle="لا تفوت أبرز الأحداث المقامة حالياً في العاصمة"
              color="gold"
            />
             <Link to="/calendar" className="hidden md:flex items-center text-gold font-bold hover:text-charcoal transition-colors mb-10">
               عرض الجدول الكامل <ArrowLeft className="w-4 h-4 mr-2" />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {todayEvents.length > 0 ? (
              todayEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <div className="col-span-3 text-center py-10 text-gray-500">
                لا توجد فعاليات مسجلة لليوم
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Week's Events */}
      <section className="py-20 bg-white text-charcoal border-t border-gray-100">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="فعاليات الأسبوع" 
            subtitle="خطط لعطلة نهاية الأسبوع وما بعدها"
            color="gold"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {weekEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
            {weekEvents.length === 0 && (
               <div className="col-span-full text-center py-10 text-gray-500">لا توجد فعاليات قادمة هذا الأسبوع</div>
            )}
          </div>
        </div>
      </section>

      {/* Month's Events */}
      <section className="py-20 bg-soft-gray text-charcoal border-t border-gray-200">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="فعاليات الشهر" 
            subtitle="أبرز الفعاليات القادمة قريباً"
            color="gold"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monthEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
             {monthEvents.length === 0 && (
               <div className="col-span-full text-center py-10 text-gray-500">سيتم الإعلان عن فعاليات الشهر قريباً</div>
            )}
          </div>
        </div>
      </section>

      {/* Trending Slider */}
      <section className="py-20 bg-charcoal overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle title="الأكثر رواجاً" subtitle="الفعاليات التي يتحدث عنها الجميع" />
          
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
            {trendingEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent">
                  <div className="absolute bottom-0 right-0 p-10 md:p-20 max-w-2xl">
                    <span className="bg-riyadh-purple text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                      {event.type}
                    </span>
                    <Link to={`/events/${event.id}`}>
                      <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 hover:text-gold transition-colors cursor-pointer">
                        {event.title}
                      </h3>
                    </Link>
                    <p className="text-gray-300 text-lg font-body mb-8 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex space-x-6 space-x-reverse mb-8 text-gray-300">
                      <div className="flex items-center"><Calendar className="w-5 h-5 ml-2 text-gold"/> {event.date}</div>
                      <div className="flex items-center"><MapPin className="w-5 h-5 ml-2 text-gold"/> {event.location}</div>
                    </div>
                    <Link to={`/events/${event.id}`} className="bg-white text-charcoal font-bold px-8 py-3 rounded-lg hover:bg-gold transition-colors inline-block">
                      احجز تذكرتك الآن
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Slider Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 space-x-reverse">
              {trendingEvents.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'bg-gold w-8' : 'bg-white/50 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qiddiya Teaser */}
      <section className="py-24 bg-riyadh-purple relative overflow-hidden">
         {/* Abstract Shapes */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-night-blue/40 rounded-full blur-3xl -ml-20 -mb-20"></div>

         <div className="container mx-auto px-6 relative z-10 text-center">
           <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
             مستقبل الترفيه.. <br/><span className="text-gold">القدية</span>
           </h2>
           <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10 font-light">
             مشاريع مستقبلية ستغير وجه الترفيه في العالم، تبدأ من قلب الرياض لتصل إلى عنان السماء.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
               <h4 className="text-xl font-bold text-gold mb-2">مدينة الألعاب</h4>
               <p className="text-sm text-gray-300">الأكبر والأحدث في المنطقة</p>
             </div>
             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
               <h4 className="text-xl font-bold text-gold mb-2">الاستاد الصخري</h4>
               <p className="text-sm text-gray-300">تحفة معمارية فوق الجبال</p>
             </div>
             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
               <h4 className="text-xl font-bold text-gold mb-2">مضمار السرعة</h4>
               <p className="text-sm text-gray-300">موطن رياضة المحركات</p>
             </div>
           </div>

           <Link to="/qiddiya" className="inline-block bg-white text-riyadh-purple font-bold text-lg px-10 py-4 rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
             استكشف رؤية القدية
           </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;