import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  //reps the 9 moves on a gameboard (array of strings)
  squares: any[] = [];
  //determine current player using board
  xIsNext: boolean = false;
  //x or o
  winner: string = '';

  constructor() { }

  //this method is used if you need initial set-up work
  ngOnInit(): void {
    this.newGame();
  }

  //game setup for a brand new game
  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }

  get player(){
    //show name of player as string; if xIsNext is true, then the value is 'x', else it will be 'O'
    return this.xIsNext ? 'X' : 'O';
  }

  //click event handler; for when user clicks on button to maek move
  makeMove(idx: number){
    //check index in array it's been clicked on. if been clicked, nothing happens. if emtpy or null, then
    if(!this.squares[idx]){
      //splice in index of square it's been clicked on with player who clicked it
      this.squares.splice(idx, 1, this.player);
      //set current user to opposite player
      this.xIsNext = !this.xIsNext; 
    }

    //comes from react tutorial 
    this.winner = this.calculateWinner();
  }

  //algorithm to determine if user has won the game
  calculateWinner(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i<lines.length; i++){
      const [a, b, c] = lines[i];
      if(
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
