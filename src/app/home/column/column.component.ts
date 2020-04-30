import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card';
import { Column } from './column';

@Component({
  selector: 'app-column',
  templateUrl: 'column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() columns: Column[];
  private cards: Card[];
  private card: Card;
  hoverText: boolean = false;

  constructor() { }
  ngOnInit(){ }

  hoverTextIn(){
    this.hoverText = true;
  }
  hoverTextOut(){
    this.hoverText = false;
  }

}
