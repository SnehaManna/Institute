import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,MatSelectModule,MatInputModule, MatFormFieldModule,ButtonComponent,MatCheckboxModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
buttonType:string = 'primary';
  buttonLabel:string = 'Sign up'
}
