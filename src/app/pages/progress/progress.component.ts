import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

pocentaje1: number = 50;
pocentaje2: number = 30;

  constructor() { }

  ngOnInit() {
  }

//   actualizar( event: number ) {
// console.log( 'Evento: ', event );
//   }


}
