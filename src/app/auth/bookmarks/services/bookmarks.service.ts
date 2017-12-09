import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BookmarksResponse} from '../models/bookmarks-response.model';

@Injectable()
export class BookmarksService {
  apiURL;

  constructor(public http: HttpClient) {
    this.apiURL = 'http://bookmarks-api-cakephp.webtraining.zone';
  }

  getAll(): Observable<BookmarksResponse> {

    const url = `${this.apiURL}/bookmarks.json`;
    return this.http.get<BookmarksResponse>(url);
  }


}
