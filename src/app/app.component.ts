import {Component} from '@angular/core';
import {Direction} from './model/direction';
import {BallDirections} from './model/ball-directions';
import {maxHeight, maxWidth} from './consts/consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
      `:host {
      display: flex;
      margin: 10vh 0;
      width: 80%;
    }`
  ]
})
export class AppComponent {
  newBallDirection: BallDirections;
  screenWidth = `${maxWidth}px`;
  screenHeight = `${maxHeight}px`;

  moveBall(direction: Direction) {
    this.newBallDirection = {direction};
  }
}
