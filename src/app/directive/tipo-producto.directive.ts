import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[estilo]'
})
export class TipoProductoDirective {

  @Input() tipo: string;

  constructor(private element : ElementRef, private renderer : Renderer) { }

  ngOnInit()
  {


    switch(this.tipo)
    {
      case "hombre": this.renderer.setElementStyle( this.element.nativeElement, 'color', 'coral');
      break;
      case "mujer": this.renderer.setElementStyle( this.element.nativeElement, 'color', 'blue');
      break;
      case "unisex": this.renderer.setElementStyle( this.element.nativeElement, 'color', 'green');
      break;
 
    }
  }

}
