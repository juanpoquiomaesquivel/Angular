import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {
  volverHome() {
    this.router.navigate([""]);
  }

  
  titulo = 'Listado de empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService, private router:Router) {
    // this.empleados= this.empleadosService.empleados;

  }

  ngOnInit(): void {
    this.empleados= this.empleadosService.empleados;
  }

  empleados:Empleado[]=[];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado() {
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //this.miServicio.muestraMensaje("Nombre del empleado" + miEmpleado.nombre);

    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    
    this.router.navigate([""]);
  }
}
