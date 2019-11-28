import { Component } from "@angular/core";
@Component({
  selector: "eur-to-dollar-conv2",
  template: `
    <h1>Convertitore Euro/Dollaro</h1>
    <label for="amount">Somma in Euro da convertire</label>
    <div>
      <input
        id="amount"
        size="20"
        [ngModel]="eur"
        (ngModelChange)="update($event)"
      />
      <span style="margin-left: 10px;">
        {{ eur | currency: "EUR" }} = {{ usd | currency: "USD" }}
      </span>
    </div>
    <button (click)="update(eur + 10)">Aggiungi 10 EUR</button>
  `
})
export class EurToDollarConverter2 {
  eur = 0;
  usd = 0;
  conversionRate = 1.1498;
  update(value) {
    this.eur = +value || 0;
    this.usd = this.eur * this.conversionRate;
  }
}