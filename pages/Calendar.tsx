import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { events } from '../data/mockData';
import { MapPin, Clock } from 'lucide-react';
import { Event } from '../types';
import TicketModal from '../components/TicketModal';

const Calendar: React.FC = () => {
  const [view, setView] = useState<'day' | 'week' | 'month'>('day');
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedMonthDate, setSelectedMonthDate] = useState<string>('2025-11-20');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Use a date from mockData that definitely has events for the "Today" view
  const currentEventDate = '2025-11-20'; 

  const todayEvents = events.filter(e => e.date === currentEventDate);
  const weekDays = ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];

  // Month View Helper: November 2025 (Starts on Saturday, 30 Days)
  const monthDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const eventsForSelectedMonthDate = events.filter(e => e.date === selectedMonthDate);

  return (
    <div className="pt-24 pb-20 bg-charcoal min-h-screen">
      <div className="container mx-auto px-6">
        <SectionTitle title="جدول الفعاليات" subtitle="نظم وقتك واستمتع بكل لحظة" />

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-dark-gray p-1 rounded-xl inline-flex flex-wrap justify-center shadow-inner">
            <button 
              onClick={() => setView('day')}
              className={`px-6 md:px-8 py-3 rounded-lg font-bold text-sm transition-all ${view === 'day' ? 'bg-gold text-charcoal shadow-lg transform scale-105' : 'text-gray-400 hover:text-white'}`}
            >
              جدول اليوم
            </button>
            <button 
              onClick={() => setView('week')}
              className={`px-6 md:px-8 py-3 rounded-lg font-bold text-sm transition-all ${view === 'week' ? 'bg-gold text-charcoal shadow-lg transform scale-105' : 'text-gray-400 hover:text-white'}`}
            >
              جدول الأسبوع
            </button>
            <button 
              onClick={() => setView('month')}
              className={`px-6 md:px-8 py-3 rounded-lg font-bold text-sm transition-all ${view === 'month' ? 'bg-gold text-charcoal shadow-lg transform scale-105' : 'text-gray-400 hover:text-white'}`}
            >
              جدول الشهر
            </button>
          </div>
        </div>

        {/* Day View */}
        {view === 'day' && (
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="bg-gray-100 px-8 py-4 border-b border-gray-200 flex justify-between items-center">
              <span className="text-charcoal font-bold font-heading text-lg">اليوم، 20 نوفمبر</span>
              <span className="text-gold font-bold bg-charcoal px-3 py-1 rounded-full text-xs">{todayEvents.length} فعاليات</span>
            </div>
            <div className="divide-y divide-gray-100">
              {todayEvents.map(event => (
                <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors flex flex-col md:flex-row items-center md:justify-between gap-6">
                   <div className="flex items-center w-full md:w-auto text-right md:text-right">
                     <div className="text-center px-4 pl-6 border-l border-gray-200 ml-6 hidden md:block">
                       <span className="block text-xl font-bold text-charcoal">{event.time.split(' ')[0]}</span>
                       <span className="block text-xs text-gray-500">{event.time.split(' ')[1]}</span>
                     </div>
                     <div>
                       <h4 className="text-lg font-bold text-charcoal mb-1">{event.title}</h4>
                       <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="w-3 h-3 ml-1" /> {event.location}
                       </div>
                        <div className="md:hidden mt-2 text-xs font-bold text-gold">
                           {event.time}
                        </div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">{event.type}</span>
                      <button 
                        onClick={() => setSelectedEvent(event)}
                        className="text-gold font-bold border border-gold px-6 py-2 rounded hover:bg-gold hover:text-white transition-colors text-sm shadow-sm"
                      >
                        حجز
                      </button>
                   </div>
                </div>
              ))}
              {todayEvents.length === 0 && (
                 <div className="p-10 text-center text-gray-500">
                    لا توجد فعاليات مسجلة لهذا اليوم.
                 </div>
              )}
            </div>
          </div>
        )}

        {/* Week View */}
        {view === 'week' && (
          <div className="animate-fade-in">
             {/* Days Tabs */}
             <div className="grid grid-cols-4 md:grid-cols-7 gap-2 mb-8">
               {weekDays.map((day, idx) => (
                 <button 
                  key={idx}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`py-4 rounded-xl text-center transition-all ${
                    selectedDayIndex === idx 
                    ? 'bg-gold text-charcoal font-bold transform -translate-y-2 shadow-lg' 
                    : 'bg-dark-gray text-gray-400 hover:bg-gray-800'
                  }`}
                 >
                   <span className="block text-sm mb-1">{day}</span>
                   <span className="block text-lg font-heading font-bold">{20 + idx}</span>
                 </button>
               ))}
             </div>
             
             {/* Week Content */}
             <div className="bg-dark-gray p-8 rounded-3xl text-center border border-gray-800 min-h-[300px]">
               <p className="text-gray-400 mb-6">فعاليات يوم {weekDays[selectedDayIndex]} الموافق {20 + selectedDayIndex} نوفمبر</p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {/* Mock showing random events for the selected day logic */}
                 {events.slice(0, (selectedDayIndex % 3) + 2).map(event => (
                    <div key={event.id} 
                         className="bg-charcoal p-4 rounded-xl flex items-center text-right border border-gray-700 hover:border-gold transition-colors cursor-pointer group relative overflow-hidden"
                    >
                       <img src={event.image} className="w-16 h-16 rounded-lg object-cover ml-4 group-hover:scale-105 transition-transform" alt={event.title}/>
                       <div className="flex-grow">
                         <h5 className="text-white font-bold mb-1 group-hover:text-gold transition-colors">{event.title}</h5>
                         <p className="text-xs text-gray-500">{event.time} | {event.location}</p>
                       </div>
                       <button 
                         onClick={() => setSelectedEvent(event)}
                         className="text-xs bg-gold text-charcoal px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold absolute left-4 bottom-4 md:static md:opacity-100"
                       >
                         حجز
                       </button>
                    </div>
                 ))}
               </div>
             </div>
          </div>
        )}

        {/* Month View */}
        {view === 'month' && (
           <div className="animate-fade-in">
             <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-2xl font-bold font-heading text-charcoal">نوفمبر 2025</h3>
                 <div className="flex items-center gap-2 text-sm text-gray-500">
                   <span className="w-2 h-2 bg-gold rounded-full"></span>
                   <span>يوجد فعالية</span>
                 </div>
               </div>
               
               {/* Calendar Grid */}
               <div className="grid grid-cols-7 gap-2 mb-2 text-center font-bold text-gray-400 text-sm">
                 {weekDays.map(d => <div key={d}>{d}</div>)}
               </div>
               <div className="grid grid-cols-7 gap-2">
                 {monthDays.map(day => {
                    const dateStr = `2025-11-${day.toString().padStart(2, '0')}`;
                    const hasEvent = events.some(e => e.date === dateStr);
                    const isSelected = selectedMonthDate === dateStr;
                    
                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedMonthDate(dateStr)}
                        className={`
                          relative min-h-[60px] md:min-h-[100px] rounded-xl flex flex-col items-center justify-center border transition-all duration-200
                          ${isSelected 
                            ? 'bg-charcoal text-white border-charcoal shadow-lg transform scale-105 z-10' 
                            : 'bg-soft-gray text-charcoal border-gray-100 hover:border-gold hover:bg-white'
                          }
                        `}
                      >
                        <span className={`text-lg md:text-2xl font-bold font-heading ${isSelected ? 'text-gold' : ''}`}>{day}</span>
                        {hasEvent && (
                          <span className={`absolute bottom-2 w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-gold animate-pulse'}`}></span>
                        )}
                      </button>
                    );
                 })}
               </div>
             </div>

             {/* Selected Date Events */}
             <div className="bg-dark-gray p-8 rounded-3xl border border-gray-800 transition-all">
               <div className="flex items-center justify-between mb-6">
                  <h4 className="text-white font-bold text-xl flex items-center">
                    فعاليات {selectedMonthDate}
                  </h4>
                  <span className="bg-gold text-charcoal font-bold text-sm px-3 py-1 rounded-full">{eventsForSelectedMonthDate.length}</span>
               </div>
               
               {eventsForSelectedMonthDate.length > 0 ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {eventsForSelectedMonthDate.map(event => (
                      <div key={event.id} className="bg-charcoal p-4 rounded-xl flex items-center text-right border border-gray-700 hover:border-gold transition-colors group">
                         <img src={event.image} className="w-20 h-20 rounded-lg object-cover ml-4 group-hover:scale-105 transition-transform" alt={event.title}/>
                         <div className="flex-grow">
                           <div className="flex justify-between items-start">
                             <h5 className="text-white font-bold mb-1 group-hover:text-gold transition-colors">{event.title}</h5>
                             <span className="bg-white/10 text-xs text-white px-2 py-1 rounded mb-1 inline-block">{event.type}</span>
                           </div>
                           <div className="text-xs text-gray-500 space-y-1">
                             <p className="flex items-center gap-2"><Clock size={12} className="text-gold"/> {event.time}</p>
                             <p className="flex items-center gap-2"><MapPin size={12} className="text-gold"/> {event.location}</p>
                           </div>
                         </div>
                         <button 
                            onClick={() => setSelectedEvent(event)}
                            className="mr-4 bg-gold text-charcoal text-sm font-bold px-4 py-2 rounded hover:bg-white transition-colors"
                         >
                            حجز
                         </button>
                      </div>
                   ))}
                 </div>
               ) : (
                 <div className="text-center py-10 bg-charcoal/50 rounded-xl border border-dashed border-gray-700">
                   <p className="text-gray-500 mb-2">لا توجد فعاليات مسجلة في هذا التاريخ</p>
                   <p className="text-sm text-gray-600">جرب اختيار يوم آخر مميز بنقطة ذهبية</p>
                 </div>
               )}
             </div>
           </div>
        )}
      </div>

      <TicketModal 
        event={selectedEvent} 
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
    </div>
  );
};

export default Calendar;