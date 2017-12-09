import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public http: HttpClient) {

  }

  ngOnInit() {

    this.http.get('http://bookmarks-api-cakephp.webtraining.zone/users.json')
      .subscribe(data => {
        console.log(data);
      });

  }


}
