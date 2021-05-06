import { stringify } from '@angular/compiler/src/util';
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

  constructor(fb: FormBuilder, private userService: UsuarioService, private auth:AuthService) {
    this.form = fb.group({
      "name": ["", Validators.required],
      "pass": ["", Validators.required]
    });
  }

  ngOnInit(): void {

    // this.userService.getUserList().subscribe(
    //   (users) => {
    //     this.users=users;
    //     console.log(users);
    //   },
    //   error => console.error(error)
    // )

  }

  userName: string;
  userPass: string;

  userFound: Usuario;

  onSubmit() {
    if (this.form.valid) {

      this.userName = this.form.value["name"];
      this.userPass = this.form.value["pass"];


      this.userService.getUserWithNamePass(this.userName, this.userPass).subscribe(
        (user: Usuario) => {
          this.userFound = user;
          console.log(this.userFound);
          
        },
        error => console.error(error)
      )

      if (this.userFound == undefined) {
        alert("El usuario no existe o la contraseña es incorrecta");
      } else {
        //TODO: entrar en la app
        this.auth.setIsLogged(true);
        this.auth.setUserLogged(this.userFound);
        alert("ADELANTE");
      }

    } else {
      alert("NO PUEDEN HABER CAMPOS VACÍOS");
    }

  }



  // validate() {

  // }

}
