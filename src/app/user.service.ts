import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  env=environment;
  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.env.apiUrl}/${this.env.prefix}/read`);
  }
  getOneUsers(id:number):Observable<User>{
    return this.http.get<User>(`${this.env.apiUrl}/${this.env.prefix}/sear/`+id);
  }
  postUsers(data:User):Observable<User>{
    return this.http.post<User>(`${this.env.apiUrl}/${this.env.prefix}/create`,data);
  }
  putUsers(id:number ,data:User):Observable<User>{
    return this.http.put<User>(`${this.env.apiUrl}/${this.env.prefix}/update/`+id,data);
  }

}
