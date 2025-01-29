import { Component, input, output} from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
  <button (click)="clickBtn()" class="text-md text-white shadow-md bg-sky-500 px-5 py-2 rounded-xl hover:opacity-90 w-full">
    {{label()}}
  </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input<string>();
  onClicked = output();  // custom event

  inputsig() {
    console.log("input signal is received");
  }
  clickBtn() {
    this.onClicked.emit();
  }
}
