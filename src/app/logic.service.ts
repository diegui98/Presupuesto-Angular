import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogicService {
  constructor() {}

  ingresosList = [
    { name: 'Salario', amount: 2100 },
    { name: 'Venta coche', amount: 1500 },
  ];

  egresosList = [
    { name: 'Renta departamento', amount: 900, percent: 0 },
    { name: 'Ropa', amount: 435.28, percent: 0 },
  ];

  agregarEgreso(egreso) {
    this.egresosList.push(egreso);
  }

  agregarIngreso(ingreso) {
    this.ingresosList.push(ingreso);
  }

  eliminarIngreso(i) {
    this.ingresosList.splice(i, 1);
  }

  eliminarEgreso(i) {
    this.egresosList.splice(i, 1);
  }
}
