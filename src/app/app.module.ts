import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { CardGameComponent } from './card-game/card-game.component';
import { WinDialogComponent } from './win-dialog/win-dialog.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CardGameComponent,
    WinDialogComponent,
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
