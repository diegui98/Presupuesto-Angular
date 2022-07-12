import { Component, OnInit } from '@angular/core';
import { LogicService } from './logic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogicService],
})
export class AppComponent implements OnInit {
  ingresosList = [];
  egresosList = [];

  constructor(private logicService: LogicService) {
    this.ingresosList = logicService.ingresosList;
    this.egresosList = logicService.egresosList;
  }

  ngOnInit() {}

  title = 'presupuesto-app';

  ingresosSuma() {
    let ingresosTotal: number = 0;
    for (let i = 0; i < this.ingresosList.length; i++) {
      ingresosTotal += this.ingresosList[i].amount;
    }
    console.log(ingresosTotal);
    return ingresosTotal;
  }

  egresosSuma() {
    let egresosTotal: number = 0;
    for (let i = 0; i < this.egresosList.length; i++) {
      egresosTotal += this.egresosList[i].amount;
    }
    return egresosTotal;
  }

  presupuestoTotal() {
    return this.ingresosSuma() - this.egresosSuma();
  }

  egresosCabeceraPorcentaje() {
    let resultadoEgresosPorcentaje =
      (this.egresosSuma() * 100) / this.ingresosSuma();
    return parseInt(resultadoEgresosPorcentaje + '');
  }
}
