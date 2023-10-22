import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { PostComponent } from './post.component';
import { SharedUiModule } from 'src/app/shared/ui/shared-ui.module';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule,
    ReactiveFormsModule,
     SharedUiModule,
     FileUploadModule,
     QuillModule.forRoot()
    ],
})
export class PostModule {}
