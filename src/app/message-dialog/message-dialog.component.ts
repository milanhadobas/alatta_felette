import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent {
  title: string;
  message: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }) {
    this.title = data.title;
    this.message = data.message;
  }
}

