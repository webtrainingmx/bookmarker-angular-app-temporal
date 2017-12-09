import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BookmarksService} from '../services/bookmarks.service';
import {Bookmark} from '../models/bookmark.model';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {
  isBeingSave = false;
  title = new FormControl('', [Validators.required]);
  url = new FormControl('', [Validators.required,
    Validators.pattern(/$http|https:\/\/.*/)])


  constructor(public _bookmarksService: BookmarksService,
              public dialogRef: MatDialogRef<EditBookmarkComponent>,
              @Inject(MAT_DIALOG_DATA) public bookmark: any) {
  }

  getErrorMessageForTitle() {
    return this.title.hasError('required') ?
      'Por favor ingresa un valor' : '';
  }

  getErrorMessageForURL() {
    return this.title.hasError('required') ?
      'Por favor ingresa una URL válida' : '';
  }

  onSubmit(event: Event) {
    event.preventDefault();

    console.log(this.title.value, this.url.value);
    this.isBeingSave = true;

    this._bookmarksService.update(this.bookmark).subscribe(
      // @TODO: Call to bookmarks' service
      (data: Bookmark) => {
        console.log('Bookmark actualizado', data);
        this.isBeingSave = false;
        this.dialogRef.close();
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Un error ha ocurrido', err.error.message);
        } else {
          console.log(`Backend ha regresado un error ${err.status}, body fue: ${err.error}`);
        }
      },
      () => {
        console.log('Todo ha terminado...');
      }
    );
  }

  ngOnInit() {
  }

}
