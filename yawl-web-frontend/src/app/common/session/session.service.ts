import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

// @ts-ignore
import {Observable, Observer, Subscriber, of} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import {env} from "../../../environments/environment";

/**
 * The service for session management.
 *
 * @author Philipp Thomas
 * @editedBy Robin Steinwarz
 */
@Injectable()
export class SessionService {

  private userUrl = env.apiUrl + 'user';
  private loginUrl = env.url + 'login';
  private logoutUrl = env.url + 'logout';

  private loggedIn = false;
  private username = "";
  private authorities = [];

  private sessionCheckInterval = null;

  redirectUrl: string | undefined;


  constructor(private http: HttpClient) {
    this.startIntervalSessionCheck();
  }

  startIntervalSessionCheck() {
    if (!this.sessionCheckInterval) {
      // @ts-ignore
      this.sessionCheckInterval = setInterval(() => {
        this.checkLoggedIn();
      }, 10000);
    }
  }


  stopIntervalSessionCheck() {
    if (this.sessionCheckInterval) {
      // @ts-ignore
      clearInterval(this.sessionCheckInterval);
      this.sessionCheckInterval = null;
    }
  }

  isIntervalSessionCheckRunning(): boolean {
    return this.sessionCheckInterval != null;
  }


  checkLoggedIn(callback?: any) {
    let headers = new HttpHeaders();
    this.http.get<HttpResponse<any>>(this.userUrl, {headers, withCredentials: true}).subscribe(
      (res: any) => {
        this.loggedIn = true;
        this.username = res.username;
        this.authorities = res.authorities;
        //this.startIntervalSessionCheck();
        callback && callback();
      },
      (error) => {
        this.loggedIn = false;
        this.username = "";
        this.authorities = [];
        callback && callback();
      });

  }


  login(username: string, password: string): Observable<boolean> {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    let payload = 'username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
    let response: Observable<any> = this.http.post<HttpResponse<any>>(this.loginUrl, payload, {headers,  observe: "response", withCredentials: true});

    response.subscribe({
      next: this.handleLoginResponse.bind(this),
      error: this.handleLoginError.bind(this)
    })

    return response;
  }


  private handleLoginResponse(res: any) {
    if (res.ok) {
      this.loggedIn = true;
      this.username = "admin";
      //this.startIntervalSessionCheck();
    }

    return res.ok;
  }


  private handleLoginError(error: any): Observable<boolean> {
    if (error.status && error.status == 401) {
      return of(false);
    }
    let errMsg = (error.message)
      ? error.message
      : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return of(errMsg);
  }


  loginFake(username: string, password: string): void {
    this.loggedIn = username == "admin";
  }


  logout(): Observable<boolean> {
    let headers = new HttpHeaders();

    return this.http.get<HttpResponse<any>>(this.logoutUrl, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => {
        this.loggedIn = false;
        this.username = "";
        this.authorities = [];
        //this.stopIntervalSessionCheck();
        return;
      }),
      catchError((error) => this.handleLogoutError(error))
    );
  }


  private handleLogoutError(error: any): Observable<any> {
    let errMsg = (error.message)
      ? error.message
      : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return of(errMsg);
  }


  isLoggedIn() {
    return this.loggedIn;
  }


  getUsername() {
    return this.username;
  }


  getAuthorities(): String[] {
    return this.authorities;
  }


  hasAuthoritiy(authority: String): boolean {
    for (let entry of this.authorities) {
      if (entry == authority) {
        return true;
      }
    }
    return false;
  }


  hasRole(role: String): boolean {
    for (let authority of this.authorities) {
      if (authority == "ROLE_" + role) {
        return true;
      }
    }
    return false;
  }
}
