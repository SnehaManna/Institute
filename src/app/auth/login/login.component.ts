import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatInputModule, MatSelectModule, ButtonComponent,MatCheckboxModule, RouterModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  buttonType:string = 'primary';
  buttonLabel:string = 'Sign in'
}
