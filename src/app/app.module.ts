import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatTableModule} from '@angular/material';

import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {LoginComponent} from './public/login/login.component';
import {HomeComponent} from './auth/home/home.component';
import {NotFoundComponent} from './common/not-found/not-found.component';
import {routes} from './router';
import {PublicGuard} from './common/guards/public.guard';
import {AuthGuard} from './common/guards/auth.guard';
import {AuthenticationService} from './common/services/authentication.service';
import {Ng2Webstorage} from 'ngx-webstorage';
import {BookmarksService} from './auth/bookmarks/services/bookmarks.service';

import {TokenInterceptor} from './auth/interceptors/token.interceptor';
import {BookmarksComponent} from './auth/bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    BookmarksComponent
  ],
  imports: [
    // Core
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Material
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    // Custom
    Ng2Webstorage,
  ],
  providers: [
    PublicGuard,
    AuthGuard,
    AuthenticationService,
    BookmarksService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
