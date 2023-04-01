import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css'],
})
export class ActualizaComponentComponent implements OnInit {
  volverHome() {
    this.router.navigate(['']);
  }

  titulo = 'Listado de empleados';

  constructor(
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.empleados= this.empleadosService.empleados;
  }

  indice: number;

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;

    this.indice = this.route.snapshot.params['id'];

    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    let emp: Empleado = this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre = emp.nombre;
    this.cuadroApellido = emp.apellido;
    this.cuadroCargo = emp.cargo;
    this.cuadroSalario = emp.salario;
  }

  empleados: Empleado[] = [];

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  /*
  actualizaEmpleado() {
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //this.miServicio.muestraMensaje("Nombre del empleado" + miEmpleado.nombre);

    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
    
    this.router.navigate([""]);
  }

  eliminaEmpleado() {
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate([""]);
  } */

  actualizaEmpleado() {
    if (this.accion == 1) {
      let miEmpleado = new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSalario
      );

      this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
    } else {
      this.empleadosService.eliminarEmpleado(this.indice);
    }

    this.router.navigate(['']);
  }

  accion: number;
}
