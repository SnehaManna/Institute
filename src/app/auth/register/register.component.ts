import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
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
    MatTabsModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  buttonType: string = 'primary';
  buttonLabel: string = 'Sign up';
  teacherSignupForm!: FormGroup;
  studentSignupForm!: FormGroup;
  ngOnInit(): void {
    this.teacherSignubuild();
    this.studentSignubuild();
  }
  teacherSignubuild() {
    this.teacherSignupForm = new FormGroup({
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
      experience: new FormControl('', [
        Validators.required,
        Validators.maxLength(1),
      ]),
      subject: new FormControl('', [Validators.required]),
    });
  }
  studentSignubuild() {
    this.studentSignupForm = new FormGroup({
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
      DOB: new FormControl('', [Validators.required]),
      class: new FormControl('', [Validators.required]),
    });
  }
  submit() {
    if (this.teacherSignupForm.valid) {
      console.log(this.teacherSignupForm.value);
      localStorage.setItem(
        'signup',
        JSON.stringify(this.teacherSignupForm.value)
      );
    }
    if (this.studentSignupForm.valid) {
      console.log(this.studentSignupForm.value);
      localStorage.setItem(
        'signup',
        JSON.stringify(this.studentSignupForm.value)
      );
    }
  }
  get nameError() {
    return this.teacherSignupForm.get('name');
  }
  get emailError() {
    return this.teacherSignupForm.get('email');
  }
}
