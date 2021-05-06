import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  nombre = new FormControl("", Validators.required);

  constructor(fb: FormBuilder) {
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


  ngOnInit(): void {
    
  }

}
