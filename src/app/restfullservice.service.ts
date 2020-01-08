import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of,  Subscription } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class RestfullserviceService {
    [x: string]: any;

  constructor(private http: HttpClient) { }
//   baseUrl = 'https://jsonplaceholder.typicode.com/photos';
//   getPost() {
//     console.log('url.........', url);
//     return this
//         .http
//         .get(`${this.url}/photos`);
//     }

// getPost() {
//     this.httpClient.get(this.baseUrl + '/photos').subscribe((res) => {
//         console.log('res................', res);
//     });
// }


// getPost(): Observable<any> {
//     return this.http.get('https://jsonplaceholder.typicode.com/photos')
//       .map((result: Response) => result.json())
//       .catch(this.getError);
    
//   }
//   console.log('res................', result);

// npm install -g json-server
// json-server --watch src/data/db.json --port 4000
// http://localhost:4000/books
//  https://investmentnovel.com/angular-6-http-get-example/


}


