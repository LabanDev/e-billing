import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) {
    
  }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarTema( tema: string, link: any){

    this.aplicarCheck(link);    

    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any){
    //Capturamos la lista de los elementos htm que tienen la clase 'selector'
    let selectores: any = document.getElementsByClassName('selector');
    for(let ref of selectores){
      //Removemos la clase 'working' del elemento html
      ref.classList.remove('working');
    }
    //adicionamos la clase 'working' al elemento selecionado. 
    link.classList.add('working');

  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;

    for(let ref of selectores){
      if(ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
    }
  }

}
