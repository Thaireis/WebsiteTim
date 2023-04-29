import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-friend',
  templateUrl: './create-friend.component.html',
  styleUrls: ['./create-friend.component.css'],
})
export class CreateFriendComponent implements OnInit {
  friends: any;
  newFriendForm: any;
  http: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  private serverUrl = 'http://localhost:8080/api/v1/friends/add';

  onSubmit() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http
      .post(
        this.serverUrl,
        { id: 'friend.id', age: 'friend.age', name: 'friend.name' },
        { headers: headers }
      )
      .map((res: Response) => res.json());

    this.friends = {
      firstname: '',
      lastname: '',
    };
  }
}
