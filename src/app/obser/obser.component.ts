import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-obser',
  templateUrl: './obser.component.html',
  styleUrls: ['./obser.component.scss']
})

export class ObserComponent implements OnInit {

  constructor() { }
  name$!: Observable<any>

  ngOnInit(): void {
    this.name$ = new Observable(observer => {
      observer.next('hh')
      observer.next(this.identity<number>(23))
      observer.next(this.identity({ data1: [{ title: "Thanks" }, { title: "Hello" }, { title: "By" }] }))
      observer.next(this.identity({ data2: [{ title: "Thanks2" }, { title: "Hello2" }, { title: "By2" }] }))

      observer.next([12, 23, 32])
      observer.complete()
    })

    let subscribe = this.name$.subscribe(
      data => {
        data.pipe(map(data => console.log(data)))
        console.log('zero', data)
        console.log('one', data['data1']),
          console.log('two', data['data1'])
        console.log('three', data)
      },
      error => { console.error(error); },
      () => { }
    );
    subscribe.unsubscribe();
    for (let i = 0; i < 4;) {
      console.log(i),
        ++i
    }
  }
  identity<T>(arg: T): T {
    return arg;
  }

}
