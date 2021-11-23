import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './Material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanActivateThisRoute } from './core/Guard/RouterGuard';
import { MyHttpInterceptor } from './core/Interceptor/interceptor.service';
import { CommonService } from './core/services/common.service';
import { Proxy } from './core/services/proxy.service';
import { SignalRService } from './core/services/SignalRService';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageUploadModule } from 'angular2-image-upload';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DashboardModule,
    LayoutModule,
    MaterialModule,
    InfiniteScrollModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [Proxy,
    CommonService,
    CanActivateThisRoute,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    },
    SignalRService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
