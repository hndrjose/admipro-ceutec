import { Injectable } from '@angular/core';

@Injectable()
export class SidebardService {


menu: any = [
  {
    titulo: 'Principal', icono: 'mdi mdi-gauge', submenu: [
       {titulo: 'Dashboard', url: '/dashboard'},
       {titulo: 'ProgressBar', url: '/progress'},
       {titulo: 'Graficas1', url: '/graficas1'},
       {titulo: 'Promesas', url: '/promesas'}
       ]
  }
];

  constructor() { }

}
