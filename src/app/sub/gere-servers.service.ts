import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GereServersService {
  tabservers= [
    {
      id: '1',
      nom:'serveurs de production',
      status: 'online'
    },
    {
      id: '2',
      nom:'serveurs de Test',
      status: 'offline'
    },
    {
      id: '3',
      nom:'serveurs de developpement',
      status: 'online'
    }
  ];

  constructor() { }

  getlistserveurs() {
    return this.tabservers
  }
  findServeurById(id: string) {
    return this.tabservers.find(s => s.id === id)
  }


}
