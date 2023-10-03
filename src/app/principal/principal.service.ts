import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: HttpClient) { }

  listarFilmes(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjFjM2M5OTYxYTUyNWQ2OWQ4MTI1ZTFhZGY5NzBiNyIsInN1YiI6IjYyOWZlNWNlMzVkMWJjMDA5YjU3NzdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zBrUteoQPPsjlA4SjGddHnB5t_bFMobHOsNdUAbkzYw'
      })
    };

    return this.http.get('https://api.themoviedb.org/3/account/12634572/favorite/movies?language=pt-BR', httpOptions)
  }

  // listarImagens(movieId: string): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjFjM2M5OTYxYTUyNWQ2OWQ4MTI1ZTFhZGY5NzBiNyIsInN1YiI6IjYyOWZlNWNlMzVkMWJjMDA5YjU3NzdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zBrUteoQPPsjlA4SjGddHnB5t_bFMobHOsNdUAbkzYw'
  //     })
  //   };

  //   return this.http.get('https://api.themoviedb.org/3/movie/'+movieId+'/images', httpOptions)
  // }

}


// 7b1c3c9961a525d69d8125e1adf970b7
