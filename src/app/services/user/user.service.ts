import { AuthResponse } from './../../models/interfaces/user/auth/AuthResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SignupUserResponse } from './../../models/interfaces/user/SignupUserResponse';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { enviroment } from 'src/environments/environments';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = enviroment.API_URL;

  constructor(private http: HttpClient) { }

  signupUser(requestDatas: SignupUserRequest): Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`, requestDatas
    )
  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.API_URL}/auth`, requestDatas);
  }
}


