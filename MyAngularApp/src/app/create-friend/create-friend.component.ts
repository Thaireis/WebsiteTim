import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-friend',
  templateUrl: './create-friend.component.html',
  styleUrls: ['./create-friend.component.css'],
})
export class CreateFriendComponent {
  friends: any;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(friend: { name: string; age: number }) {
    console.log(friend);
    const headers = new HttpHeaders({ myHeader: 'WebsiteTim' });
    this.http
      .post('http://localhost:8080/api/v1/friends/add/', friend, {
        headers: headers,
      })
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigateByUrl('/home');
  }
}
