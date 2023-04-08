import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  empleados: Empleado[] = [];

  setEmpleados(misEmpleados:Empleado[]) {
    this.empleados=misEmpleados;
  }

  /*empleados:Empleado[]=[
    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "Martín", "Directora", 5500),
    new Empleado("María", "Fdez", "Jefe sección", 3500),
    new Empleado("Laura", "López", "Administrativo", 2500),
  ]; */

  obtenerEmpleados() {
    return this.dataService.cargarEmpleados();
  }

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Persona que se va a agregar:\n' +
        empleado.nombre +
        '\nSalario: ' +
        empleado.salario
    );

    this.empleados.push(empleado);

    this.dataService.guardarEmpleados(this.empleados);
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado = this.empleados[indice];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

    this.dataService.actulizarEmpleado(indice, empleadoModificado);
  }

  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice, 1);
  }

  encontrarEmpleado(indice: number) {
    let emp: Empleado = this.empleados[indice];

    return emp;
  }

  constructor(
    private servicioVentanaEmergente: ServicioEmpleadosService,
    private dataService: DataService
  ) {}
}

// https://www.youtube.com/watch?v=lq-Aja1BlIA&list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO&index=34
// https://www.youtube.com/watch?v=MCvMBIRLFbE&list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO&index=35