import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados:Empleado[]=[
    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "Martín", "Directora", 5500),
    new Empleado("María", "Fdez", "Jefe sección", 3500),
    new Empleado("Laura", "López", "Administrativo", 2500),
  ];

  agregarEmpleadoServicio(empleado:Empleado) {
    this.empleados.push(empleado);
  }

  constructor() { }
}
