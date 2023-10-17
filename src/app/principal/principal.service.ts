import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IFavoriteRequest } from '../model/IFavoriteRequest';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + environment.apiKey
      })
    };
  }

  listarFilmesFavoritos(): Observable<IFavoriteRequest> {
    const options = this.getHeaders();
    return this.http.get<IFavoriteRequest>("https://api.themoviedb.org/3/account/"+environment.accountNumber+"/favorite/movies?language=pt-BR", options);
  }




  // listarFilmes(): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjFjM2M5OTYxYTUyNWQ2OWQ4MTI1ZTFhZGY5NzBiNyIsInN1YiI6IjYyOWZlNWNlMzVkMWJjMDA5YjU3NzdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zBrUteoQPPsjlA4SjGddHnB5t_bFMobHOsNdUAbkzYw'
  //     })
  //   };

  //   return this.http.get('https://api.themoviedb.org/3/movie/latest', httpOptions)
  // }

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
