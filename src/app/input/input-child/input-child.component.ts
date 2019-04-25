import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

//https://angular.io/guide/component-interaction
@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})
export class InputChildComponent implements OnInit {

  @Input() propertyOne: string;
  // tslint:disable-next-line:no-input-rename
  @Input('renamedPropertyTwo') propertyTwo: string;

  public title: string;

  @Output() fromChild: EventEmitter<{ nombre }> = new EventEmitter();

  constructor() {
    this.title = 'Componente hijo';
  }

  ngOnInit() {
  }

  enviar() {
    this.fromChild.emit({nombre: 'Hey mister aqui desde el componente hijo, como te va todo?'});
  }
}
