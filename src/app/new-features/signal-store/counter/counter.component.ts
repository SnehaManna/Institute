import { Component, inject } from '@angular/core';
import { CounterStore } from './counter.store';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  providers:[CounterStore]
})
export class CounterComponent {
  counterStore = inject(CounterStore);
}
