import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { FormsModule } from '@angular/forms';
import { LogicService } from './logic.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    FormularioComponent,
    IngresosComponent,
    EgresosComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [LogicService],
  bootstrap: [AppComponent],
})
export class AppModule {}
