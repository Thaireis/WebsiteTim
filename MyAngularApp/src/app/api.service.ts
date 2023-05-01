import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiBaseUrl = 'http://localhost:8080/api/library';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private apiClient: HttpClient) {}
}
