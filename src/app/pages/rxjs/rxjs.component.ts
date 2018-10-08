import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscriber, Subscription } from 'rxjs/Rx';

import { retry, map, filter } from 'rxjs/operators';



@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

subcriccion: Subscription;

  constructor() {



this.subcriccion = this.regresarObs().pipe(
    retry(2)
)
.subscribe(
  numeru => console.log('sub.', numeru),
  error => console.error('error', error),
  () => console.log('El observador termino')
);

  }

  ngOnInit() {
  }

  ngOnDestroy() {
   console.log('La pagina se va a Cerrar');
   this.subcriccion.unsubscribe();
  }

  regresarObs(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval( () => {

        contador += 1;

        let salida = {
          valor: contador
        };


        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

          //  if (contador === 2) {
          //      // clearInterval(intervalo);
          //     observer.error('auxilio');
          //   }
      }, 2000);
    }).pipe(
       map( resp => {
         return resp.valor;
       }),
       filter ( (valor, index) =>{
         if ( (valor % 2) === 1 ) {
            // impar
            return true;
         } else {
           // par
           return false;
         }
       }  )
    );
  }

}
