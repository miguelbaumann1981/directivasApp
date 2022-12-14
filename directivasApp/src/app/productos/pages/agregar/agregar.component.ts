import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  texto1: string = 'Miguel';
  color1: string = 'blue';

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  tieneErrores(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.texto1 = Math.random().toString();
  }

  cambiarColor() {
    const _color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color1 = _color;
  }

}
