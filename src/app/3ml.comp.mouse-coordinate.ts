import { Component } from "@angular/core";
@Component({
  selector: "mouse-coord",
  template: `
    <div class="container">
      <div class="box" (mousemove)="onMouseMove($event)"></div>
      <span>X: {{ coord.x }}</span>
      <span>Y: {{ coord.y }}</span>
    </div>
  `,
  styles: [
    `
      .container {
        display: grid;
        width: 300px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
      }
      .box {
        grid-column: 1 / -1;
        width: 300px;
        height: 300px;
        border: 2px solid black;
      }
      span {
        font-size: 2em;
        grid-row: 2 / -1;
      }
    `
  ]
})
export class MouseCoordinate {
  coord = {
    x: 0,
    y: 0
  };
  onMouseMove(event) {
    this.coord.x = event.offsetX;
    this.coord.y = event.offsetY;
  }
}