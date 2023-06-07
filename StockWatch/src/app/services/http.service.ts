import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  hostname = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) {}

  public get(apiUrl: string): Observable<any> {
    let httpOptions = this.setRequestHeaders();
    return this.httpClient.get(this.hostname + apiUrl, httpOptions);
  }

  public post(apiUrl: string, requestBody: any): Observable<any> {
    let httpOptions = this.setRequestHeaders();
    return this.httpClient.post(
      this.hostname + apiUrl,
      requestBody,
      httpOptions
    );
  }

  public put(
    apiUrl: string,
    requestBody?: any,
    requestParams?: any
  ): Observable<any> {
    let httpOptions = this.setRequestHeaders(requestParams);
    return this.httpClient.put(
      this.hostname + apiUrl,
      requestBody,
      httpOptions
    );
  }

  public delete(apiUrl: string, requestParams?: any): Observable<any> {
    let httpOptions = this.setRequestHeaders(requestParams);
    return this.httpClient.delete(this.hostname + apiUrl, httpOptions);
  }

  private setRequestHeaders(httpParams?: any): any {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders = httpHeaders.append(
      'Authorization', `${'Bearer '}${localStorage.getItem('jwt')}`
    );
    let httpOptions = { headers: httpHeaders};
    if (httpParams) {
      httpOptions = Object.assign(httpOptions, { params: httpParams });
    }
    return httpOptions;
  }

