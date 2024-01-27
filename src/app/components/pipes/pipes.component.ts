import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [ DatePipe ],
  templateUrl: './pipes.component.html'
})
export class PipesComponent {

  public date = signal(new Date())
}
