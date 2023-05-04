import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-friend-detail',
  templateUrl: './update-friend-detail.component.html',
  styleUrls: ['./update-friend-detail.component.css'],
})
export class UpdateFriendDetailComponent {
  friends: any;
  id: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    public route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  saveUpdate(friend: { name: string; age: number }) {
    console.log(friend);
    console.log(this.id);
    this.http
      .put(
        'http://localhost:8080/api/v1/friends/' +
          this.id +
          '?name=' +
          friend.name +
          '&age=' +
          friend.age,
        null
      )
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigateByUrl('/home');
  }
}
