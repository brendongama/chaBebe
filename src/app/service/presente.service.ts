import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Presente} from '../model/presente';
import { API_CONFIG } from '../config/api.config';

@Injectable({
    providedIn: 'root'
  })

  export class PresenteService {

    constructor(private http: HttpClient) { }

    listAll(): Observable<Presente[]> {
        return this.http.get<Presente[]>(`${API_CONFIG.baseUrl}presentes`);
      }

      create(presente: Presente): Observable<Presente> {
        return this.http.post<Presente>(`${API_CONFIG.baseUrl}presentes`, presente);
      } 
  }  