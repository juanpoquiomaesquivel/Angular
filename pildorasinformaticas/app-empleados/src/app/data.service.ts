import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient, private loginService:LoginService) { }

  cargarEmpleados() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://mis-clientes-bbc88-default-rtdb.firebaseio.com/datos.json?auth=' + token);
  }

  guardarEmpleados(empleados:Empleado[]) {
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://mis-clientes-bbc88-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
      response=>console.log("Se han guardado los empleados: " + response),
      error=>console.log("Error: " + error)
    );
  }
  
  actulizarEmpleado(indice:number, empleado:Empleado) {
    let url = 'https://mis-clientes-bbc88-default-rtdb.firebaseio.com/datos/' + indice + '.json';

    this.httpClient.put(url, empleado).subscribe(
      response=>console.log("Se ha modificado el empleado: " + response),
      error=>console.log("Error: " + error)
    );
  }
  
  eliminarEmpleado(indice:number) {
    let url = 'https://mis-clientes-bbc88-default-rtdb.firebaseio.com/datos/' + indice + '.json';

    this.httpClient.delete(url).subscribe(
      response=>console.log("Se ha eliminado el empleado: " + response),
      error=>console.log("Error: " + error)
    );
  }
}

// https://www.youtube.com/watch?v=_QFCvFalzug&list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO&index=37