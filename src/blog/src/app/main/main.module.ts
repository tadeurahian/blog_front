import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ListarPostsComponent } from './post/listar-posts/listar-posts.component';
import { PostModule } from './post/post.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    PostModule,
    MatButtonModule,
    MatIconModule
  ],
  bootstrap: [ListarPostsComponent]
})
export class MainModule { }
