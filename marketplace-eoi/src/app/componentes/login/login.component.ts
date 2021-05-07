import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: Array<Usuario>;

  form: FormGroup;

  constructor(fb: FormBuilder, private userService: UsuarioService, private auth: AuthService) {
    this.form = fb.group({
      "name": ["", Validators.required],
      "pass": ["", Validators.required]
    });
  }

  ngOnInit(): void {

  }

  userName: string;
  userPass: string;

  userFound: Usuario;

  async onSubmit() {

    if (this.form.valid) {

      this.userName = this.form.value["name"];
      this.userPass = this.form.value["pass"];

      this.userFound = await this.userService.getUserWithNamePass(this.userName, this.userPass);

      if (Object.entries(this.userFound).length === 0) {
        alert("El usuario no existe o los datos son incorrectos");
      } else {
        //TODO: entrar en la app
        this.auth.setIsLogged(true);
        this.auth.setUserLogged(this.userFound);
      }

    } else {
      alert("No pueden haber campos vacíos");
    }

  }

}
