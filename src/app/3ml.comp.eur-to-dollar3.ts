import { Component } from "@angular/core";
@Component({
  selector: "eur-to-dollar-conv3",
  template: `
    <h1>Convertitore EUR/USD</h1>
    <label for="amount">Somma in Euro da convertire</label>
    <div>
      <input type="number" id="amount" size="20" [(ngModel)]="eur" />
      <span>
        {{ (eur ? eur : 0) | currency: "EUR" }} = {{ usd | currency: "USD" }}
      </span>
    </div>
    <button (click)="updateEUR(10)">+10 EUR</button>
  `,
  styleUrls: ["./app.component.css"]
})
export class EurToDollarConverter3 {
  private _eur = 0;
  usd = 0;
  conversionRate = 1.1498;
  get eur(): number {
    return this._eur;
  }
  set eur(value: number) {
    this._eur = value;
    this.usd = this._eur * this.conversionRate;
  }
  updateEUR(increment: number) {
    this.eur += increment;
  }
}