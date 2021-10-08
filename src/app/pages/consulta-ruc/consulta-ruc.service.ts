import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Compania } from './compania';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
  })
  export class ConsultaRucService {

    private headers: HttpHeaders;
    companiaReal:Compania=new Compania();

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });
    }

    public getCompania(ruc: string): Observable<Compania> {

        return this.http.get<Compania>('http://wsruc.com/Ruc2WS_JSON.php?tipo=2&ruc='+ruc+'&token=cXdlcnR5bGFtYXJja19zYUBob3RtYWlsLmNvbXF3ZXJ0eQ==', httpOptions).pipe();
      }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption


            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

  }