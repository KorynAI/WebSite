import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
}

export enum SectionType {
  HERO = 'hero',
  CONCEPT = 'concept',
  CONTACT = 'contact'
}