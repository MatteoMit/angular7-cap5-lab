import { Component } from "@angular/core";
@Component({
  selector: "eur-to-dollar-conv",
  template: `
    <h1>Convertitore Euro/Dollaro</h1>
    <label for="amount">Somma in Euro da convertire</label>
    <div>
      <input id="amount" size="20" [value]="eur" (input)="onInput($event)" />
      <span style="margin-left: 10px;">
        {{ eur | currency: "EUR" }} = {{ usd | currency: "USD" }}
      </span>
    </div>
  `
})
export class EurToDollarConverter {
  eur = 0;
  usd = 0;
  conversionRate = 1.1498;
  onInput(event) {
    this.eur = event.target.value;
    this.usd = this.eur * this.conversionRate;
  }
}