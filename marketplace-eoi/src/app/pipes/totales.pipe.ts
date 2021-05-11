import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'totales'
})
export class TotalesPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { } 

  //Intento de aplicarle style a los totales
  transform(value: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(value + '<p style="background-color: red">*</p>');
  }

}
