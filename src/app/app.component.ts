import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { DeferrableViewsComponent } from './components/deferrable-views/deferrable-views.component';
import { SignalsComponent } from './components/signals/signals.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ConsumeServiceComponent } from './components/consume-service/consume-service.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TestComponent,
    TemplateBindingComponent,
    ControlFlowComponent,
    DeferrableViewsComponent,
    SignalsComponent,
    PipesComponent,
    ConsumeServiceComponent,
    ReactiveFormsComponent,
    ContentComponent,
    HostElementsComponent
  ],
  providers: [TemplateBindingComponent],
  template: `
    <!-- <h2>Take care!!!</h2>
    <app-template-binding />
    <app-control-flow />
    <app-deferrable-views />
    <app-signals />
    <app-pipes />
    <app-consume-service /> -->
    <!-- <app-reactive-forms /> -->
    <!-- <app-content>
      <header id="header">
        <p>
          header
        </p>
      </header>
      <p text>text!</p>
      <footer class="footer">
        <p>
          footer
        </p>
      </footer>
    </app-content> -->
    <app-host-elements />
  `,
})
export class AppComponent {
}
