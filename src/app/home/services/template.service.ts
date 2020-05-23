import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Column } from '../column/column';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Constants } from '../constants';
import { tap, catchError } from 'rxjs/operators';
import { Card } from '../card/card';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http: HttpClient) { }

  getColumns(): Observable<Column[]> {
    return this.http.get<Column[]>(
      Constants.GET_COLUMNS, {
    }).pipe(
      tap(data => {
        console.log('route = ' + Constants.GET_COLUMNS);
        console.log('data = ' + JSON.stringify(data));
      },
        catchError(this.handleError)
      )
    );
  }

  getCard(cardId: string): Observable<Card> {
    return this.http.get<Card>(Constants.GET_CARD + cardId)
      .pipe(
        tap(cardData => {
          console.log('route = ' + Constants.GET_COLUMNS);
          console.log('data = ' + JSON.stringify(cardData));
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }

}
