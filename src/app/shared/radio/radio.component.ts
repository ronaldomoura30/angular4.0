import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'
import {RadioOption} from './radio-option.model'


@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers:[
    {provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true}
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value: any
  onChange: any
  constructor() { }

  ngOnInit() {
  }

  setValue(screenValue: any){
    this.value = screenValue
    this.registerOnChange(this.value)
  }

  /* Chamado pelas diretivas para
   * passar um valor para o componente
   */
  writeValue(obj: any): void{
    this.value = obj
  }

  /* Registrar sempre que o valor interno
   * do componente mudar
   */
  registerOnChange(fn: any): void{
    this.onChange = fn
  }

  /* Registrar se o usuário entrou
   * no componente */
   registerOnTouched(fn: any):void {

   }

   setDisabledState?(isDisabled: boolean): void {

   }
}
