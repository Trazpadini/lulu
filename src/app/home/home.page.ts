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
  val2: number =0;
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
    alert ('A soma é '+total);
    }
  }
}
}
