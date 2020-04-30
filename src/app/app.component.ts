import { Component, OnInit } from '@angular/core';
import { Card } from './home/card/card';
import { Column } from './home/column/column';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  card: Card = {
    id: '1',
    name: 'Card Title 1',
    description: 'some description of card 1',
    attachmentNumber: 1,
    comments: 0,
  };

  card2: Card = {
    id: '1',
    name: 'Card Title 1 Lores\ncfgdhfdgfagvfubaf',
    description: 'some description of card 1',
    attachmentNumber: 1,
    comments: 1,
  };

  cards: Card[] = [
    this.card,
    this.card,
  ];
  cards2: Card[] = [
    this.card2,
    this.card2,
  ];

  columns: Column[] = [
    {
      title: 'Column 1',
      cards : this.cards
    },
    {
      title: 'Column 2',
      cards : this.cards2
    },
    {
      title: 'Column 3',
      cards : this.cards
    },
    {
      title: 'Column 4',
      cards : this.cards
    },
    {
      title: 'Column 5',
      cards : this.cards
    },
    {
      title: 'Column 5',
      cards : this.cards
    },
    {
      title: 'Column 5',
      cards : this.cards
    },
    {
      title: 'Column 5',
      cards : this.cards
    },
    {
      title: 'Column 5',
      cards : this.cards
    },
    // {
    //   title: 'Column 5',
    //   cards : this.cards
    // },
    // {
    //   title: 'Column 5',
    //   cards : this.cards
    // },

  ];



   constructor(){ }
     ngOnInit(){
      //  this.data();
    // for (let colIndex = 0; colIndex < 5; colIndex++) {
    //   const upto = colIndex % 2 === 0 ? 2 : 3;
    //   for (let cardIndex = 0; cardIndex < upto; cardIndex++) {
    //     this.card = {
    //       id: colIndex + cardIndex.toString(),
    //       name: 'Card at ' + colIndex + cardIndex,
    //       description: 'some description of card ' + colIndex + cardIndex,
    //     };
    //     this.cards[cardIndex] = this.card;
    //   }
    //   this.columns[colIndex] = {
    //     id: colIndex.toString(),
    //     cards: this.cards,
    //   };
    // }
  }

  // data(): void{
  //   console.log("val = " + this.cards);
  //   for (let colIndex = 0; colIndex < 5; colIndex++) {
  //     const upto = colIndex % 2 === 0 ? 2 : 3;
  //     // cards: Card[];
  //     for (let cardIndex = 0; cardIndex < upto; cardIndex++) {
  //       this.card = {
  //         id: colIndex + cardIndex.toString(),
  //         name: 'Card at ' + colIndex + cardIndex,
  //         description: 'some description of card ' + colIndex + cardIndex,
  //       };
  //       console.log("val = " + this.cards);
  //       this.cards.push(this.card);
  //     }
  //     this.columns.push({
  //       cards: this.cards,
  //     });
  //   }
  //  }

}
