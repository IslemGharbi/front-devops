import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'skier', type: 'link', name: 'skier', icon: 'downhill_skiing' },
  { state: 'registration', type: 'link', name: 'registration', icon: 'how_to_reg' },
  { state: 'course', type: 'link', name: 'course', icon: 'view_list' },
  { state: 'piste', type: 'link', name: 'piste', icon: '360' },
  { state: 'instructor', type: 'link', name: 'instructor', icon: 'gavel' },
  { state: 'subscription', type: 'link', name: 'subscription', icon: 'workspace_premium' },
 
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
