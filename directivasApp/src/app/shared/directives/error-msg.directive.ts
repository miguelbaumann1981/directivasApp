import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _mensaje: string = 'Mensaje';

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  } 

  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  } 

  @Input() set valido(valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  } 

  constructor( private elem: ElementRef<HTMLElement> ) {
    console.log('constructor directive', elem);
    this.htmlElement = elem;
   }

   ngOnInit(): void {
    console.log('onInit directive');
    this.setEstilo();
    this.setColor();
    this.setMensaje();
   }

   ngOnChanges(changes: SimpleChanges): void {
     console.log(changes);
   }

   setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
   }

   setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
   }

   setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
   }

}
