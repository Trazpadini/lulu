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
    alert ('PARABÉNS SEU CONCEITO FOI A '+this.valor);

  }

  clicar2(): void {
    alert ('Parabéns conceito foi B'+this.valor2);
  }

  clicar3(): void {
    alert ('Seu conceito foi C'+this.valor3);
  }

  clicar4(): void {
    alert ('Seu conceito foi D'+this.valor4);
  }

  somar (): void {
    let total = Number(this.val1) + Number(this.val2);
    alert ('A soma é '+ total);
  }

  parou (): void {
    let total1 = Number(this.val1) + Number(this.val2);
    if ((total1) % 2 ==0){
      alert ('A soma é par');
    } else{
      alert ('A soma é impar');
    }
  }

  maiorou (): void {
    if (Number(this.val1) > Number(this.val2)) {
      alert ('O primeiro número é o maior.');
    } else {
      alert ('O segundo número é maior.');
    }
  }
}
