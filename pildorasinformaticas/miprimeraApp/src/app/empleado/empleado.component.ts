import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template: "<p>Aquí iría un empleado INLINE</p>",
  styleUrls: ['./empleado.component.css']
  // styles: ["p{background-color: blue;}"]

  /**
   * Para crear un componente INLINE:
   * ng g c empleadoTirar -s -t
   */
})
export class EmpleadoComponent {

  nombre="Juan";
  apellido="Diaz";
  /*private */edad=18;
  //empresa="Píldoras Informáticas";

  /*getEdad() {
    return this.edad;
  }*/

  /*llamaEmpresa(value:String) {

  }*/
}
