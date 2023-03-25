import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = "";
  registrado = false;
  nombre:string="";
  apellido:string="";
  entradas:any[];

  constructor() {
    this.entradas=[
      {titulo:"Python cada días más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JavaScript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó Paskal?"},
    ]
  }

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = "Usuario registrado con éxito"
  }
}
