import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  
  public  baseUrl = "https://letstalk-be.herokuapp.com" || "http://localhost:3000"
  
  public headers:HttpHeaders= new HttpHeaders({
    'Content-Type':'application/json',
    'Accept':"application/json",
    'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE',
    'Authorization':''
});

  constructor(private _http: HttpClient) { }
  
  public getAudits(pageIndex: any, pageSize: any){
    let params= new HttpParams();
    return this._http.get(`${this.baseUrl}/public/audits/${pageIndex}/${pageSize}`,{headers :this.headers,params})
  }
}
