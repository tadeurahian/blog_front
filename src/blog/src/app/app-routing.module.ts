import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CriarPostComponent } from './main/post/criar-post/criar-post.component';
import { ListarPostsComponent } from './main/post/listar-posts/listar-posts.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
}, {
  path: '',
  component: MainComponent,
  canActivate: [AuthGuard]
}, {
  path: 'posts/criar',
  component: CriarPostComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
