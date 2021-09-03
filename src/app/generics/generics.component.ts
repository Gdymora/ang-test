import { Component, OnInit } from '@angular/core';

export interface Lengthwise {
  length: number;
}

@Component({
  selector: 'app-generics',
  templateUrl: './generics.component.html',
  styleUrls: ['./generics.component.scss']
})
export class GenericsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.identity<number>(23))
    console.log(this.identity({ data1: [{ title: "Thanks" }, { title: "Hello" }, { title: "By" }] }))
    console.log(this.identity({ data2: [{ title: "Thanks2" }, { title: "Hello2" }, { title: "By2" }] }))
    console.log(this.getLength('23'))
  }

  identity<T>(arg: T): T {
    return arg;
  }

  getLength<T extends Lengthwise>(arg: T): number {
    /* мы оповещаем компилятор о том, что на вход 
    функции getLength могут подаваться аргументы лишь того типа, 
    что имеют свойство length. 
    Такая запись защитит  от передачи в функции, 
    например, аргумента типа number. */
    return arg.length;
  }
}
