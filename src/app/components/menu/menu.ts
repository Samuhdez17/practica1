import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-nav',
  standalone: false,
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})

export class Menu implements OnInit {
  numeros: Array<number>

  constructor() {
    this.numeros = []
  }

  ngOnInit() {
    for (let i=0; i<5; i++) {
      this.numeros.push(Math.floor(Math.random()* 300))
    }
  }
}
