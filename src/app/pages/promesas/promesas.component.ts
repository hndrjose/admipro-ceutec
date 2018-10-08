import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {


    this.contartres().then(
      () => console.log('Termino')
    )
    .catch( error => console.log('Error en la Promesa', Error));
  }

  ngOnInit() {
  }

contartres(): Promise<boolean> {
  let promesa: any = new Promise( (resolve, reject) => {
    let contador = 0;
    let intervalo = setInterval( () => {
    contador += 1;
   if ( contador === 3 ) {
     resolve(true);
     clearInterval(intervalo);
   }
   }, 1000);
  });
  return promesa;
}

}
