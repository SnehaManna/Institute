import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ButtonComponent,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  buttonType: string = 'primary';
  buttonLabel: string = 'Sign up';
  signupForm!: FormGroup;
  ngOnInit(): void {
    this.signubuild();
  }
  signubuild() {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      confirmpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
  submit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      localStorage.setItem('signup', JSON.stringify(this.signupForm.value));
    }
  }
  get nameError() {
    return this.signupForm.get('name');
  }
  get emailError() {
    return this.signupForm.get('email');
  }
}
