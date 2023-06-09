import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})

/**
 * Service for making HTTP GET requests to the specified API endpoint.
 * @param apiUrl The API endpoint URL to send the GET request to.
 * @param requestParams Optional parameters to be included in the GET request.
 * @returns An observable that emits the response from the GET request.
 */
export class HttpService {
  hostname = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) {}

  public get(apiUrl: string, requestParams?: any): Observable<any> {
    let httpOptions = this.setRequestHeaders(requestParams);
    return this.httpClient.get(this.hostname + apiUrl, httpOptions);
  }

  /**
 * Service for making HTTP POST requests to the specified API endpoint.
 * @param apiUrl The API endpoint URL to send the POST request to.
 * @param requestBody The request body to be included in the POST request.
 * @returns An observable that emits the response from the POST request.
 */

  public post(apiUrl: string, requestBody: any): Observable<any> {
    let httpOptions = this.setRequestHeaders();
    return this.httpClient.post(
      this.hostname + apiUrl,
      requestBody,
      httpOptions
    );
  }

  /**
 * Service for making HTTP PUT requests to the specified API endpoint.
 * @param apiUrl The API endpoint URL to send the PUT request to.
 * @param requestBody The request body to be included in the PUT request.
 * @param requestParams The request parameters to be included in the PUT request.
 * @returns An observable that emits the response from the PUT request.
 */

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

  /**
 * Service for making HTTP DELETE requests to the specified API endpoint.
 * @param apiUrl The API endpoint URL to send the DELETE request to.
 * @param requestParams The request parameters to be included in the DELETE request.
 * @returns An observable that emits the response from the DELETE request.
 */

  public delete(apiUrl: string, requestParams?: any): Observable<any> {
    let httpOptions = this.setRequestHeaders(requestParams);
    return this.httpClient.delete(this.hostname + apiUrl, httpOptions);
  }

  /**
 * Set the request headers including Content-Type, Access-Control-Allow-Origin, and Authorization.
 * @param httpParams The request parameters to be included in the request.
 * @returns The options object containing the request headers and parameters.
 */

  private setRequestHeaders(httpParams?: any): any {
    let httpHeaders = new HttpHeaders();
    // Set the Content-Type header to 'application/json'
    httpHeaders = httpHeaders.append('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders = httpHeaders.append(
        // Set the Authorization header using the JWT token retrieved from local storage

      'Authorization', `${'Bearer '}${localStorage.getItem('jwt')}`
    );

    // Create the options object with the headers
    let httpOptions = { headers: httpHeaders};
    if (httpParams) {
      httpOptions = Object.assign(httpOptions, { params: httpParams });
    }
    return httpOptions;
  }
}
