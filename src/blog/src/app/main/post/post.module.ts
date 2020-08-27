import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarPostComponent } from './criar-post/criar-post.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule, MatCardFooter } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListarPostsComponent } from './listar-posts/listar-posts.component';
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CriarPostComponent, ListarPostsComponent],
  exports: [ListarPostsComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,    
    MatCardModule,    
    FormsModule,    
    MatSnackBarModule,
    SliderModule,
    BrowserAnimationsModule,
    MatIconModule
  ]
})
export class PostModule { }
