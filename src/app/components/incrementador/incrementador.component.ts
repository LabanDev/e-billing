import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'leyenda';
  @Input() progreso: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  //Nota importante del output
  //También se podría usar de la siguiente manera @Output('actualizar'), 
  //entonces para referenciar desde el externo al output se haría con (actualizar) y no con (cambioValor)
  //De la misma forma funciona el Input.

  @ViewChild('txtProgreso') txtProgress: ElementRef;
  //Para referenciar a ViewChild desde el html se tiene que poner en el atibuto #txtProgreso.
  constructor() { 
  }

  ngOnInit() {
  }


  cambiarValor( value: number){
      if( this.progreso >= 100 && value > 0)
        return this.progreso = 100;
      if( this.progreso <= 0 && value < 0)
        return this.progreso = 0;
      this.progreso += value;
      this.cambioValor.emit(this.progreso);

      //Damos foco al elemento html.
      this.txtProgress.nativeElement.focus();
  }

  onChange(newValue: number){
    if( this.progreso >= 100)
      this.progreso = 100;
    else if(this.progreso <= 0)
      this.progreso = 0;
    else this.progreso=newValue;
    
    //Asignamos el valor de this.progreso al elemento html.
    this.txtProgress.nativeElement.value = this.progreso;
    //Mandamos el valor de this.progreso al output
    this.cambioValor.emit(this.progreso);    
  }

}
