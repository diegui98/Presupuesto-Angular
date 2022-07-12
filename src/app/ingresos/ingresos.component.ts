import { Component, Input, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css'],
})
export class IngresosComponent implements OnInit {
  constructor(private logicService: LogicService) {}

  ngOnInit() {}

  @Input() ingresosList;

  eliminarRegistro(i) {
    this.logicService.eliminarIngreso(i);
  }
}
