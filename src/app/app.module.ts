import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './components/abm/tabla/tabla.component';
import { ModalComponent } from './components/abm/modal/modal.component';
import { HomeComponent } from './components/home/home.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CardProductoComponent } from './components/shared/card-producto/card-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    ModalComponent,
    HomeComponent,
    DondeEstamosComponent,
    ProductosComponent,
    DetalleProductoComponent,
    NavigationComponent,
    BuscadorComponent,
    CardProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
