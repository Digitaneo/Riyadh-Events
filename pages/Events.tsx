import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import { events } from '../data/mockData';
import { EventType } from '../types';

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Filter Logic
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.includes(searchTerm) || event.location.includes(searchTerm);
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesDate = selectedDate === '' || event.date === selectedDate;
    return matchesSearch && matchesType && matchesDate;
  });

  const uniqueDates = Array.from(new Set(events.map(e => e.date)));

  return (
    <div className="pt-24 pb-20 bg-dark-gray min-h-screen">
      {/* Header */}
      <div className="bg-charcoal py-16 mb-12 border-b border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">جميع الفعاليات</h1>
          <p className="text-gray-400 max-w-xl mx-auto">استعرض كافة الفعاليات المتاحة وقم بتصفيتها حسب رغبتك</p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-xl mb-12 -mt-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Search */}
            <div className="relative col-span-1 md:col-span-1">
              <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="ابحث عن فعالية أو موقع..." 
                className="w-full bg-soft-gray text-charcoal pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Type Filter */}
            <div className="relative">
               <Filter className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
               <select 
                className="w-full bg-soft-gray text-charcoal pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold appearance-none cursor-pointer"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
               >
                 <option value="all">جميع التصنيفات</option>
                 {Object.values(EventType).map(type => (
                   <option key={type} value={type}>{type}</option>
                 ))}
               </select>
            </div>

            {/* Date Filter */}
            <div className="relative">
               <input 
                type="date"
                className="w-full bg-soft-gray text-charcoal px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
               />
            </div>

            {/* Reset Button */}
             <button 
               onClick={() => { setSearchTerm(''); setSelectedType('all'); setSelectedDate(''); }}
               className="bg-charcoal text-white font-bold rounded-lg hover:bg-gold hover:text-charcoal transition-colors"
             >
               إعادة تعيين
             </button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8 text-gray-400 text-sm">
          تم العثور على {filteredEvents.length} فعالية
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">لا توجد نتائج</h3>
            <p className="text-gray-500">جرب تغيير خيارات البحث أو الفلترة</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;