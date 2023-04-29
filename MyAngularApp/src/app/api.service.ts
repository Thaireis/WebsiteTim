import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiBaseUrl = 'http://localhost:8080/api/library';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private apiClient: HttpClient) {}

  getAllAuthors(): Observable<any> {
    return this.apiClient.get(apiBaseUrl + '/author');
  }

  createAuthor(data: { firstName: any; lastName: any }): Observable<any> {
    console.log(data);
    return this.apiClient.post(apiBaseUrl + '/author', data);
  }

  /*

  createBook(book): Observable<any> {
    return this.apiClient.post(apiBaseUrl+'/book', book);
  }

  readBooks(): Observable<any> {
    return this.apiClient.get(apiBaseUrl+'/book');
  }

  readBook(bookId): Observable<any> {
    return this.apiClient.get(`${apiBaseUrl}/book/${bookId}`);
  }

  removeBook(bookId) : Observable<any> {
    return this.apiClient.delete(`${apiBaseUrl}/book/${bookId}`);
  }

  createAMember(member) : Observable<any> {
    return this.apiClient.post(apiBaseUrl+"/member", member);
  }

  lendABook(lend) : Observable<any> {
    return this.apiClient.post(apiBaseUrl+"/book/lend", lend);
  }

  updateBook(bookId, updateData): Observable<any> {
    return this.apiClient.patch(`${apiBaseUrl}/book/${bookId}`, updateData);
  }

  getMembers(): Observable<any>  {
    return this.apiClient.get(apiBaseUrl+'/member');
  }

  */
}
