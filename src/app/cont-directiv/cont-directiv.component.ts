import { Component, Input, Output } from '@angular/core';

@Component({
  selector: '[container]',
  templateUrl: './cont-directiv.component.html',
  styleUrls: ['./cont-directiv.component.scss']
})
export class ContDirectivComponent{
@Input() title: string="";
@Input() description: string="";
}
