import {Component} from '@angular/core';

@Component({
    selector:'app-contador',
    template: `
    <h1>{{titulo}}</h1>
<h1>la Base es <strong>{{base}}</strong></h1>
<button (click)="acumular(base);">+{{base}}</button>
<span>{{numero}}</span>
<button (click)="acumular(base);">-{{base}}</button>
    `
})

export class ContadorComponent{

    titulo:string = 'contador app';
    numero:number=10;
    public base:number=5;
  
    acumular(valor:number){
    this.numero+=valor;
    }
}

