import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [CommonModule,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss'
})
export class LogComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
