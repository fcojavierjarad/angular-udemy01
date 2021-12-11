import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

 public heroes:string[]=['Spiderman', 'Ironman', 'Hulk', 'Thor','chapulin']
 public heroeDelete:string='';

 borrarHeroe():void{
  
  this.heroeDelete=this.heroes.shift()||'';
 }

}
