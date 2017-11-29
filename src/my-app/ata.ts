import { Matricula } from './matricula';
import { Turma } from './turma';

export class Ata {
  lista: Matricula [];
  
  constructor() {
    this.clean();
  }

  clean(): void {
    this.lista = [];
    }

  clone(): Ata {
    var ata: Ata = new Ata();
    ata.copyFrom(this);
    return ata;
  }

  copyFrom(from: Ata): void {
   	this.lista = from.lista;
	}
}