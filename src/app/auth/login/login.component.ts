import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatInputModule, MatSelectModule, ButtonComponent,MatCheckboxModule, RouterModule, ReactiveFormsModule,FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  buttonType:string = 'primary';
  buttonLabel:string = 'Sign in';

  loginForm!:FormGroup;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }) 
  }
  submit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }
  }
}
