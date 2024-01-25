import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { DeferrableViewsComponent } from './components/deferrable-views/deferrable-views.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TestComponent,
    TemplateBindingComponent,
    ControlFlowComponent,
    DeferrableViewsComponent
  ],
  providers: [TemplateBindingComponent],
  template: `
    <h2>Take care!!!</h2>
    <app-template-binding />
    <app-control-flow />
    <app-deferrable-views />
  `,
})
export class AppComponent {
}
