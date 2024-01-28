import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  // host: {
  //   'role': 'button',
  //   'class': 'red',
  //   '(document:keypress)': 'updateKeyPress($event)'
  // }
})
export class HostElementsComponent {

  @HostListener('document:keypress', ['$event'])
  public updateKeyPress(event: KeyboardEvent) {
    console.log(event.key)
  }
}
