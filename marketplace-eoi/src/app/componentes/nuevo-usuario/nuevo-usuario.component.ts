import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  form: FormGroup;

  nombreUsuario: string;
  password: string;


  constructor(private userService: UsuarioService, fb: FormBuilder) {
    this.form = fb.group({
      "name": ["", Validators.required],
      "pass": ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  createUser() {

    if (this.form.valid) {
      const user: Usuario = new Usuario(this.form.value["name"],this.form.value["pass"]);
      this.userService.addUser(user).subscribe(
        ok => alert(`Usuario: ${ok.nombre} creado correctamente`)
      );
    }else {
      alert("Todos los campos son obligatorios");
    }
  }

}
