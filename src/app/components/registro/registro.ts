import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.scss',
})
export class Registro {
  form!:FormGroup;
  constructor (private fb: FormBuilder){
      this.form= this.fb.group({
        nombre:['',[Validators.required,Validators.minLength(3)]],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(6)]],
     
        
  });
    
}
   submit(){
          if (this.form.invalid) return;
          console.log(this.form.value);
          this.form.reset();

        }


  
}


