import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { UsuarioService } from './shared/services/usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/guards/auth.guard';
import { MainModule } from './main/main.module'
import { PostModule } from './main/post/post.module';
import { PostService } from './shared/services/post/post.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogHttpInterceptor } from './shared/interceptors/http.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    MainModule,
    PostModule,
    HttpClientModule    
  ],
  providers: [UsuarioService, AuthGuard, PostService, {
    provide: HTTP_INTERCEPTORS,
    useClass: BlogHttpInterceptor,
    multi: true,
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
