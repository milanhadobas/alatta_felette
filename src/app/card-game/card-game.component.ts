import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent {
  firstCard: number | null = null;
  secondCard: number | null = null;
  gameStarted: boolean = false;
  guessMade: boolean = false;

  cardImages: string[] = [
    'assets/card1.png',
    'assets/card2.png',
    'assets/card3.png',
    'assets/card4.png',
    'assets/card5.png',
    'assets/card6.png',
    'assets/card7.png',
    'assets/card8.png',
    'assets/card9.png',
    'assets/card10.png',
    'assets/card11.png',
    'assets/card12.png'
  ];

  constructor(public dialog: MatDialog) { }

  startGame(): void {
    this.firstCard = this.getRandomCard();
    this.secondCard = null;
    this.gameStarted = true;
    this.guessMade = false;
  }

  getRandomCard(): number {
    return Math.floor(Math.random() * 12) + 1;
  }

  drawSecondCard(): void {
    do {
      this.secondCard = this.getRandomCard();
    } while (this.secondCard === this.firstCard);
  }

  guessHigher(): void {
    if (this.firstCard !== null && this.secondCard !== null && this.guessMade) {
      this.checkGuess(this.secondCard < this.firstCard);
    }
  }

  guessLower(): void {
    if (this.firstCard !== null && this.secondCard !== null && this.guessMade) {
      this.checkGuess(this.secondCard > this.firstCard);
    }
  }

  checkGuess(correct: boolean): void {
    this.guessMade = true;
    if (correct) {
      this.openDialog('Gratulálok!', 'Jól tippeltél');
      this.firstCard = this.secondCard!;
    } else {
      this.openDialog('Bocs de', 'Vesztettél, Igyál');
      this.gameStarted = false;
    }

  
    setTimeout(() => {
      if (this.gameStarted) {
        this.drawSecondCard();
      }
    }, 4000);
  }

  openDialog(title: string, message: string): void {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      data: { title, message },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  getCardImage(cardIndex: number): string {
    return this.cardImages[cardIndex - 1];
  }
}
