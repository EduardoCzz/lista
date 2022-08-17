import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: Storage) {
    this.storage.create();
  }

  variavel_lista = [[]];
  texto: string = "";
  variavel_valor = [];
  valor: number = 0;
  aux;

  async adiciona() {
    if (!(this.texto == "")) {
      //this.variavel_lista.push("0", this.texto);

      this.variavel_lista.forEach(item => {
        if (parseInt(item[0]) > this.aux) {
          this.aux = parseInt(item[0]);
        }
      })
      this.aux = this.aux + 1;
      await this.storage.set(this.aux, this.texto);
      this.atualizaLista();
      this.texto = "";

      this.storage.set(this.aux, this.texto);
      this.texto = "";

      this.variavel_valor.push(this.valor);
      this.valor = 0;

    }

  }

  atualizaLista() {
    this.variavel_lista = [];
    this.storage.forEach((value, key, index) => {
      this.variavel_lista.push([key, value]);
    })
  }

  remove(indice) {
    this.variavel_lista.splice(indice, 1)
    this.variavel_valor.splice(indice, 1)
  }


  //*ngFor = "let elemento_da_lista of lista" no item
  //[(ngModel)]="texto" no input

}
