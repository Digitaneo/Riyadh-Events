import React from 'react';
import { Event } from '../types';
import { X, Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TicketModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ event, isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen || !event) return null;

  const handleBook = () => {
    onClose();
    // Navigate to the event-specific order page
    navigate(`/events/${event.id}/order`);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl overflow-hidden w-full max-w-lg shadow-2xl transform transition-all scale-100">
        
        {/* Modal Header Image */}
        <div className="relative h-56">
            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90"></div>
            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full hover:bg-gold hover:text-charcoal transition-colors z-10 backdrop-blur-md"
            >
                <X size={20} />
            </button>
            <div className="absolute bottom-4 right-0 left-0 px-6 text-white text-right">
                <span className="bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                    {event.type}
                </span>
                <h3 className="text-2xl font-heading font-bold drop-shadow-md">{event.title}</h3>
            </div>
        </div>

        {/* Modal Body */}
        <div className="p-8 text-right bg-white">
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-soft-gray p-4 rounded-2xl flex flex-col items-end">
                    <div className="flex items-center text-gray-400 mb-1">
                        <span className="text-xs font-bold mr-1">التاريخ</span>
                        <Calendar className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-charcoal font-heading">{event.date}</span>
                </div>
                 <div className="bg-soft-gray p-4 rounded-2xl flex flex-col items-end">
                    <div className="flex items-center text-gray-400 mb-1">
                        <span className="text-xs font-bold mr-1">الوقت</span>
                        <Clock className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-charcoal font-heading">{event.time}</span>
                </div>
            </div>
            
            <div className="flex items-start justify-end mb-8">
                <div className="text-right mr-4">
                    <h4 className="font-bold text-gray-400 text-xs mb-1 uppercase">الموقع</h4>
                    <p className="font-bold text-charcoal text-lg">{event.location}</p>
                </div>
                <div className="bg-gold/10 p-3 rounded-full shrink-0">
                    <MapPin className="text-gold w-6 h-6" />
                </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-8">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-xl text-gold">{event.price || '150 ريال'}</span>
                    <span className="text-gray-500 font-bold text-sm">سعر التذكرة</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                    * السعر يشمل الضريبة ورسوم الخدمة. الأسعار قد تختلف حسب الفئة المختارة.
                </p>
            </div>

            <button 
                onClick={handleBook} 
                className="w-full bg-charcoal text-white font-bold font-heading text-lg py-4 rounded-xl hover:bg-gold hover:text-charcoal transition-all shadow-xl hover:shadow-gold/20 flex items-center justify-center gap-2 group"
            >
                <span>تأكيد الحجز والدفع</span>
                <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;