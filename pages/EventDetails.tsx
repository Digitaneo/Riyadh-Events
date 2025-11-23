import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Clock, Share2, Ticket } from 'lucide-react';
import { events } from '../data/mockData';
import { Event } from '../types';
import TicketModal from '../components/TicketModal';

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const foundEvent = events.find(e => e.id === id);
    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      // Handle not found
      navigate('/events');
    }
  }, [id, navigate]);

  if (!event) return null;

  return (
    <div className="bg-soft-gray min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        {/* Gradients for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent h-32"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 container mx-auto">
          <Link to="/events" className="inline-flex items-center text-gray-300 hover:text-gold mb-6 transition-colors font-bold text-sm">
            <ArrowRight className="w-4 h-4 ml-2" />
            العودة للفعاليات
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="bg-gold text-charcoal font-bold px-4 py-1 rounded-full text-sm mb-4 inline-block">
                {event.type}
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-2 leading-tight">
                {event.title}
              </h1>
              <p className="text-gray-300 text-lg md:text-xl font-body max-w-2xl">
                {event.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <button className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-colors border border-white/20">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-6 border-b border-gray-100 pb-4">
                تفاصيل الفعالية
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                استعد لتجربة استثنائية في {event.title}. انضم إلينا في {event.location} لقضاء وقت لا ينسى. 
                هذه الفعالية تعتبر واحدة من أبرز محطات موسم الرياض لهذا العام، حيث تجمع بين الترفيه والإبداع في مكان واحد.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                تتميز الفعالية بتنظيم عالمي المستوى، وتوفر مرافق متكاملة لخدمة الزوار، بما في ذلك مناطق للمطاعم والمقاهي، ومواقف سيارات واسعة، وخدمات ذوي الاحتياجات الخاصة. لا تفوت الفرصة لتكون جزءاً من هذا الحدث الضخم.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src={`https://picsum.photos/seed/${event.id}1/800/400`} alt="Gallery 1" className="rounded-xl object-cover h-48 w-full hover:scale-105 transition-transform duration-500 cursor-pointer" />
                <img src={`https://picsum.photos/seed/${event.id}2/800/400`} alt="Gallery 2" className="rounded-xl object-cover h-48 w-full hover:scale-105 transition-transform duration-500 cursor-pointer" />
              </div>
            </div>

            {/* Map Section with Iframe */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-6 border-b border-gray-100 pb-4">
                الموقع على الخريطة
              </h2>
              <div className="rounded-xl h-80 overflow-hidden shadow-md border border-gray-200 relative">
                 {event.mapUrl ? (
                   <iframe 
                    src={event.mapUrl} 
                    className="w-full h-full"
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map location for ${event.title}`}
                   ></iframe>
                 ) : (
                   <div className="w-full h-full flex items-center justify-center bg-gray-100">
                     <div className="text-center">
                        <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <span className="text-gray-500 font-bold">{event.location}</span>
                        <p className="text-xs text-gray-400 mt-2">الخريطة غير متوفرة حالياً</p>
                     </div>
                   </div>
                 )}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-24 border-t-4 border-gold">
              <h3 className="text-xl font-heading font-bold text-charcoal mb-6">معلومات التذاكر</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center text-right">
                  <div className="bg-soft-gray p-3 rounded-full ml-4">
                    <Calendar className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-bold mb-1">التاريخ</span>
                    <span className="font-bold text-charcoal text-lg">{event.date}</span>
                  </div>
                </div>

                <div className="flex items-center text-right">
                  <div className="bg-soft-gray p-3 rounded-full ml-4">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-bold mb-1">الوقت</span>
                    <span className="font-bold text-charcoal text-lg">{event.time}</span>
                  </div>
                </div>

                <div className="flex items-center text-right">
                  <div className="bg-soft-gray p-3 rounded-full ml-4">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-bold mb-1">الموقع</span>
                    <span className="font-bold text-charcoal text-lg">{event.location}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center mb-6">
                <span className="block text-gray-500 text-sm mb-1">يبدأ سعر التذكرة من</span>
                <span className="block text-2xl font-bold text-gold">{event.price}</span>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-charcoal text-white font-bold py-4 rounded-xl hover:bg-gold hover:text-charcoal transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Ticket className="w-5 h-5" />
                احجز تذكرتك الآن
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-4">
                * تطبق الشروط والأحكام
              </p>
            </div>
          </div>

        </div>
      </div>

      <TicketModal 
        event={event} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default EventDetails;