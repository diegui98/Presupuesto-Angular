import { Component, Input, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css'],
})
export class EgresosComponent implements OnInit {
  constructor(public logicService: LogicService) {}

  ngOnInit() {}

  @Input() egresosList;
  @Input() ingresosSuma;

  egresosPorcentaje(i) {
    let resultadoEgresosPorcentaje =
      (this.egresosList[i].amount * 100) / this.ingresosSuma;
    return parseInt(resultadoEgresosPorcentaje + '');
  }

  eliminarRegistro(i) {
    this.logicService.eliminarEgreso(i);
  }
}
