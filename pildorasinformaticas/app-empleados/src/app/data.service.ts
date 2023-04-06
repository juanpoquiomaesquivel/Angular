import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  guardarEmpleados(empleados:Empleado[]) {
    this.httpClient.post('https://mis-clientes-bbc88-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
      response=>console.log("Se han guardado los empleados: " + response),
      error=>console.log("Se han guardado los empleados: " + error)
    );
  }
}

// https://www.youtube.com/watch?v=VKWLM70o5Nc&list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO&index=32
// https://www.youtube.com/watch?v=1fgJdayPGJ4&list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO&index=33