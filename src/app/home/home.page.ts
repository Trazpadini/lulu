import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor : string = '';
  valor2 : string = '';
  valor3 : string = '';
  valor4 :  string = '';
  val1 : number = 0;
  val2: number = 0;
  val3: number = 0;
  clicar():void {
    alert ('PARABÉNS '+this.valor);
  }

  clicar2(): void {
    alert ('OTIMO MAS DA PRA MELHORAR'+this.valor2);
  }

  clicar3(): void {
    alert ('TEM QUE ESTUDAR MAIS'+this.valor3);
  }

  clicar4(): void {
    alert ('VAI ESTUDAR AGORAAAAAAAAAAAAA'+this.valor4);
  }
  somar (): void {
    let total = Number(this.val1) + Number(this.val2);
    alert ('A soma é '+ total);
  }
  parou (): void {
    let total1 = Number(this.val1) + Number(this.val2);
      if ((total1) % 2 ==0){
      alert ('A soma é par')
    }
      else{
      alert ('A soma é impar')
    }
  }
    maiorou (): void {
      if (this.val1 > this.val2){
        alert ('O primeiro número é o maior. Ele é o '+this.val1);
      }
      else {
        alert ('O segundo número é maior. Ele é o '+this.val2);
      }
    }
  }
