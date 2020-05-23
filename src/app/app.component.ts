import { Component, OnInit } from '@angular/core';
import { Card } from './home/card/card';
import { Column } from './home/column/column';
import { TemplateService } from './home/services/template.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  columns: Column[];

  constructor(private templateService: TemplateService) { }

  ngOnInit(): void {
    this.templateService.getColumns().subscribe({
      next: data => {
        this.columns = data;
        console.log('mapped = ' + JSON.stringify(this.columns));
      },
      error: rror => { console.log(rror); },
    }
    );
  }
}
