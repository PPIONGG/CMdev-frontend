import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input("medie_query") mobileQueryMax!: boolean;

  @Output("toggle") navToggle = new EventEmitter();
  @Output() sayHi = new EventEmitter<String>();

  demoMailNoti = 50;
  demoNoti = 9

  onClickNavToggle() {
    this.navToggle.emit();
    this.sayHi.emit("tanakorn");
  }
}
