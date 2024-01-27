import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public name = signal('Zed ')
  public lastName = signal('Stephan da Silva Sais')

  public obj = signal({ name: 'Zed', age: 9 })

  public fullName = computed(() => {
    return this.name() + this.lastName()
  })

  // set define o signal para um novo valor absoluto.
  public set() {
    return this.name.set('Zoe ')
  }

  // upadate define o signal com base no valor atual.
  public update() {
    this.obj.update(currentValue => {
      return {...currentValue, age: 15}
    })
  }

  // Mutate define o signal com base no valor atual sem o obj total
}
