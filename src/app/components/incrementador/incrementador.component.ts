
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef  } from '@angular/core';





@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})

export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() pocentaje: number = 50;
  @ViewChild('txtprogress') txtprogress: ElementRef;

  @Output('acualizavalor') cambiovalor: EventEmitter<number> = new EventEmitter();
  constructor() {
    // console.log('leyenda', this.leyenda);
    // console.log('pocentaje', this.pocentaje);
  }

  ngOnInit() {
    // console.log('leyenda', this.leyenda);
    // console.log('pocentaje', this.pocentaje);
  }



  onChanges( newValue: number ) {
    // let elemHtML: any = document.getElementsByName('pocentaje')[0];

    // console.log(elemHtML.value);

      if ( newValue >= 100 ) {
       this.pocentaje = 100;
      } else if (newValue <= 0) {
       this.pocentaje = 0;
      } else {
       this.pocentaje = newValue;
      }
      // elemHtML.value = Number(this.pocentaje);
      this.txtprogress.nativeElement.value = this.pocentaje;
      this.cambiovalor.emit( this.pocentaje );
  }

  cambiarvalor( valor: number ) {
    if (this.pocentaje >= 100 && valor > 0) {
        this.pocentaje = 100;
       return;
     }

     if (this.pocentaje <= 0 && valor < 0 ) {
 this.pocentaje = 0;
       return;
     }

     this.pocentaje = this.pocentaje + valor;

     this.cambiovalor.emit( this.pocentaje );

     this.txtprogress.nativeElement.focus();
   }

}
