import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>{{value}}</button>
  `,
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  rando = Math.random();

  @Input()
  value: 'X' | 'O' = "X";
}
