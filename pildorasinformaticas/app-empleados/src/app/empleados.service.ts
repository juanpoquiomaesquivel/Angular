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

  actualizarEmpleado(indice:number, empleado:Empleado)
  {
    let empleadoModificado = this.empleados[indice];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
  }

  eliminarEmpleado(indice:number) {
    this.empleados.splice(indice, 1);
  }

  encontrarEmpleado(indice:number) {

    let emp:Empleado = this.empleados[indice];

    return emp;
  }

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService) { }
}
