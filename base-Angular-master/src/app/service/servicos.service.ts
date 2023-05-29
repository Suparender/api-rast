import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
HttpClient
Observable

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private url: string = "http://localhost:3000/alunos/"
  constructor(private http: HttpClient) { }

  listarAlunos(): Observable<any> {

    return this.http.get(`${this.url}`)
  }

}
