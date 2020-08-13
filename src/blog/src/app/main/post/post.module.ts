import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarPostComponent } from './criar-post/criar-post.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule, MatCardFooter } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [CriarPostComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,    
    MatCardModule,        
    FormsModule,    
    MatSnackBarModule
  ]
})
export class PostModule { }
