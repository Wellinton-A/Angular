import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [CommonModule, TestComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent {

}
