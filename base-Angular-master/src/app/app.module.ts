import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// importar o service
import { ServicosService } from './service/servicos.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AlunosComponent } from './alunos/alunos.component';
ServicosService
FormsModule


@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, ServicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
