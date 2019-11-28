import { Component } from "@angular/core";
@Component({
  selector: "simple-counter",
  template: `
    <button (click)="onClick()">+1</button>
    <span>Count: {{ count }}</span>
  `,
  styleUrls: ["./app.component.css"]
})
export class SimpleCounter {
  count = 0;
  onClick() {
    this.count++;
  }
}