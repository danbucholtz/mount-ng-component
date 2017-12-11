import { Component } from '@angular/core';


@Component({
  selector: 'some-selector',
  template: `
<div>
  <ul>
    <li style="padding-bottom: 20px">ngOnInit - {{ngOnInitDetection}}</li>
    <li>ngAfterViewInit - {{ngAfterViewInitDection}}</li>
  </ul>
</div>
  `
})
export class MyComponent {

  ngOnInitDetection = 'CD has not occurred yet';
  ngAfterViewInitDection = 'CD has not occurred yet';

  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit');
    setInterval(() => {
      this.ngOnInitDetection = 'Change Detection Working: ' + Date.now();
    }, 500);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    setInterval(() => {
      this.ngAfterViewInitDection = 'Change Detection Working: ' + Date.now();
    }, 500);
  }
}
