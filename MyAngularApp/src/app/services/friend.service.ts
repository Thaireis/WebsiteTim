import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FriendComponent } from '../friend/friend.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  private url = 'http://localhost:8080/api/v1/friends/';

  constructor(private http: HttpClient) {}
}
