import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Egresos } from '../egresos';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  constructor(private logicService: LogicService) {}

  ngOnInit() {}

  desInput: string;
  valInput: number;
  selectedOption;

  agregarBtn() {
    if (this.selectedOption == 'ing') {
      let ingreso = new Egresos(this.desInput, this.valInput);
      this.logicService.agregarIngreso(ingreso);
    } else if (this.selectedOption == 'egr') {
      let egreso = new Egresos(this.desInput, this.valInput);
      this.logicService.agregarEgreso(egreso);
    }
  }
}
