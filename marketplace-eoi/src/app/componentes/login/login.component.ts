import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  nombre = new FormControl("", Validators.required);

  constructor(fb: FormBuilder, private userService: UsuarioService) {
    this.form = fb.group({
      "nombre": this.nombre,
      "pass": ["", Validators.required]
    });
  }

  onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.form);
  }

  visualizarForm() {
   console.log(this.form.value["nombre"],this.form.value["pass"]);
   
  }

  visualizaUser() {
   
    this.userService.getUserWithID(1).subscribe(
      (data) => {

        console.log(data);
        

      },
      error => console.error(error)

    )
    
  }


  ngOnInit(): void {
    
  }

}
