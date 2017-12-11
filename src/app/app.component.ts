import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { MyComponent } from './my-component';

@Component({
  selector: 'app-root',
  template: `
  <div #parent class="parent">I am the parent</div>
  `
})
export class AppComponent implements AfterViewInit {

  @ViewChild('parent', { read: ElementRef }) parentElementRef: ElementRef;
  @ViewChild('parent', { read: ViewContainerRef}) viewport: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver, private injector: Injector, private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    this.mountFromViewContainer();
    // this.mountWithoutViewContainer();
  }

  mountFromViewContainer() {
    const componentFactory = this.cfr.resolveComponentFactory(MyComponent);
    const componentRef = componentFactory.create(this.injector);
    this.viewport.insert(componentRef.hostView, this.viewport.length);
    this.cd.detectChanges();
  }

  mountWithoutViewContainer() {
    const componentFactory = this.cfr.resolveComponentFactory(MyComponent);
    const componentRef = componentFactory.create(this.injector, [], this.parentElementRef.nativeElement);
    this.cd.detectChanges();
  }
}
