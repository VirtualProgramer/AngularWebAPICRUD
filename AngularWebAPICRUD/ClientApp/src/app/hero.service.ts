import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Blog, Post } from './postModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = "/api/Posts";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(apiUrl)
      .pipe(
        tap(Post => console.log('fetched Posts')),
        catchError(this.handleError('getPosts', []))
      );
  }

  getPost(id: number): Observable<Post> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(_ => console.log(`fetched Post id=${id}`)),
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }

  addPost(Post: Post): Observable<Post> {
    return this.http.post<Post>(apiUrl, Post, httpOptions).pipe(
      tap((post: Post) => console.log(`added Post w/ id=${Post.PostId}`)),
      catchError(this.handleError<Post>('addPost'))
    );
  }

  updatePost(id: any, Post: Post): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, Post, httpOptions).pipe(
      tap(_ => console.log(`updated Post id=${id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }

  deletePost(id: any): Observable<Post> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Post>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Post id=${id}`)),
      catchError(this.handleError<Post>('deletePost'))
    );
  }
}
