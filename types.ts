import React from 'react';

export enum EventType {
  Music = 'موسيقى',
  Theater = 'مسرح',
  Sports = 'رياضة',
  Family = 'عائلي',
  Dining = 'مطاعم',
  Exhibition = 'معارض'
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  type: EventType;
  price?: string;
  isTrending?: boolean;
  mapUrl?: string;
}

export interface QiddiyaZone {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}