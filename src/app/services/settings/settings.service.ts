import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.cssassets/css/colors/default.css',
    tema: 'default'
  }
  constructor(@Inject(DOCUMENT)  private _document) { 
    this.cargarAjustes();
  }

  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('cargando desde el localStorage')
      this.aplicarTema(this.ajustes.tema);
    }else{
      console.log('usando valores por defecto');
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema: string){

    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href',url);

    this.ajustes.temaUrl=url;
    this.ajustes.tema = tema;

    this.guardarAjustes();

  }

  guardarAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    console.log('guadado en el localstorage');
  }
}

interface Ajustes{
  temaUrl: string;
  tema: string;
}