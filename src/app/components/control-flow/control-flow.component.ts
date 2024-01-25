import { Component } from '@angular/core';
import { TemplateBindingComponent } from '../template-binding/template-binding.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [TemplateBindingComponent, AsyncPipe],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  constructor(public templateBindingComponent: TemplateBindingComponent) {}

  public items$: Array<({name: string})> = [
    {name: 'Zed'},
    {name: 'Zoe'},
    {name: 'Pedro'},
    {name: 'Neguin'}
  ]
}
