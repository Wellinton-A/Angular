import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss',
  styles: `
    button {
      cursor: pointer;
    }
  `
})
export class TemplateBindingComponent {
  public name = 'Zed'
  public age = 5

  public isDisabled = true

  public rand = Math.floor(Math.random() * 100)
  public isRed = this.rand > 50

  public sum() {
    this.age++
  }
}
