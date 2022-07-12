import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() presupuestoDisponible: number;
  @Input() ingresosCabecera: number;
  @Input() egresosCabecera: number;
  @Input() egresosPorcentajeCabecera: number;
}
