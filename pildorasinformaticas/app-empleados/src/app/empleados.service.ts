import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

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
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar:\n" + 
    empleado.nombre +
    "\nSalario: " + empleado.salario );

    this.empleados.push(empleado);
  }

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService) { }
}
