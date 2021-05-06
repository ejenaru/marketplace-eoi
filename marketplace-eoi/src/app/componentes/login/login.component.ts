import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: Array<Usuario>;

  form: FormGroup;

  constructor(fb: FormBuilder, private userService: UsuarioService) {
    this.form = fb.group({
      "name": ["", Validators.required],
      "pass": ["", Validators.required]
    });
  }

  ngOnInit(): void {

    this.userService.getUserList().subscribe(
      (users) => {
        this.users=users;
        console.log(users);
      },
      error => console.error(error)
    )

  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      alert("NO PUEDEN HABER CAMPOS VACÍOS");
    }
  }

  userName: string;
  userPass: string;

  validate() {

    this.userName=this.form.value["name"];
    this.userPass=this.form.value["pass"];

    console.log(this.userName,this.userPass);
    

    if (this.userName) {
      
    } else {
      
    }
    
  }

}
