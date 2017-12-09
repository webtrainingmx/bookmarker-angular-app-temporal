import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BookmarksResponse} from '../models/bookmarks-response.model';
import {Bookmark} from '../models/bookmark.model';
import {AuthenticationService} from '../../../common/services/authentication.service';

@Injectable()
export class BookmarksService {
  apiURL;

  constructor(public http: HttpClient, public _authService: AuthenticationService) {
    this.apiURL = 'http://bookmarks-api-cakephp.webtraining.zone';
  }

  getAll(): Observable<BookmarksResponse> {

    const url = `${this.apiURL}/bookmarks.json`;
    return this.http.get<BookmarksResponse>(url);
  }

  update(bookmark: Bookmark): Observable<any> {
    const url = `${this.apiURL}/bookmarks/${bookmark.id}.json`;
    return this.http.put(url, bookmark, this._authService.user.api_token);
  }

}
