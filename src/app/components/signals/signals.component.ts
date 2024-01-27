import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public name = signal('Zed ')
  public lastName = signal('Stephan da Silva Sais')

  public fullName = computed(() => {
    return this.name() + this.lastName()
  })

  public update() {
    return this.name.set('Zoe ')
  }
}
