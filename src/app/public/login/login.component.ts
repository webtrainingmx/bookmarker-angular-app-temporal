import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthenticationService} from '../../common/services/authentication.service';
import {Session} from 'selenium-webdriver';
import {SessionStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(public authService: AuthenticationService,
              public locker: SessionStorageService,
              public router: Router) {
  }

  getErrorMessageForUsername() {
    const hasError = this.username.hasError('required');
    return hasError ? 'Nombre de usuario es requerido' : '';
  }

  getErrorMessageForPassword() {
    const hasError = this.password.hasError('required');
    return hasError ? 'Contraseña es requerida' : '';
  }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();

    this.authService.logIn(this.username.value, this.password.value)
      .subscribe((data) => {
        this.authService.user = data;
        this.locker.store('user', data);
        this.router.navigate(['/home']);

      }, (error: HttpErrorResponse) => {
        if (error.status === 406) {
          console.error('Unable to login');
        }

        console.error(error);
        this.authService.hasSession = false;
      });
  }

}
