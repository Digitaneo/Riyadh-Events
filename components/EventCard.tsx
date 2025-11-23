import React, { useState } from 'react';
import { Event } from '../types';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import TicketModal from './TicketModal';
import { Link } from 'react-router-dom';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-gold/20 hover:shadow-2xl flex flex-col h-full">
        <Link to={`/events/${event.id}`} className="relative h-64 overflow-hidden shrink-0 block cursor-pointer">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          <span className="absolute top-4 right-4 bg-gold text-charcoal font-bold px-3 py-1 rounded-full text-sm font-body shadow-md">
            {event.type}
          </span>
        </Link>
        
        <div className="p-6 relative flex flex-col flex-grow">
          <div className="absolute -top-8 left-6 bg-white text-charcoal px-4 py-2 rounded-lg shadow-lg text-center min-w-[70px]">
            <p className="text-sm font-bold text-gold">{event.time.split(' ')[0]}</p>
            <p className="text-xs font-bold text-gray-500">{event.time.split(' ')[1]}</p>
          </div>

          <Link to={`/events/${event.id}`} className="block">
            <h3 className="text-xl font-bold text-charcoal font-heading mb-2 group-hover:text-gold transition-colors line-clamp-1">
              {event.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm font-body mb-4 line-clamp-2 h-10">
            {event.description}
          </p>

          <div className="flex flex-col space-y-2 text-sm text-gray-500 mb-6 font-body mt-auto">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 text-gold ml-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-gold ml-2" />
              <span>{event.location}</span>
            </div>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full py-3 rounded-xl border-2 border-charcoal text-charcoal font-bold font-body flex items-center justify-center group-hover:bg-charcoal group-hover:text-gold transition-all duration-300 cursor-pointer"
          >
            <span>تفاصيل التذكرة</span>
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <TicketModal 
        event={event} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default EventCard;