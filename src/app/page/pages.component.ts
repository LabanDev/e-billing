import { Component, OnInit } from '@angular/core';
//Esto nos permite cargar el scipt (custom.js) que contiene a los plugins como el sidebar
declare function  init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
