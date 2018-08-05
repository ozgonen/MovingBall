import {Component, Input} from '@angular/core';
import {BallDirections} from '../model/ball-directions';
import {horizontalSteps, moveAmount, verticalSteps} from '../consts/consts';

@Component({
  selector: 'app-screen',
  template: `
    <div
      [ngStyle]="ballDirections"
      class="ball"
    ></div>
  `,
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent {
  ballDirections = {
    marginTop: '0',
    marginLeft: '0'
  };

  @Input() set moveBall(value: BallDirections) {
    if (value) {
      this.ballDirections = this.moveTheBall(value);
    }
  }

  /**
   * Changes the ball directions object
   * by the object
   * @param value
   */
  private moveTheBall(value: BallDirections) {
    let {marginTop, marginLeft} = this.ballDirections;
    const top: number = parseInt(marginTop, 10);
    const left: number = parseInt(marginLeft, 10);
    switch (value.direction) {
      case 'up':
        if (top > -Math.abs(moveAmount * verticalSteps)) {
          marginTop = `${top - moveAmount}px`;
        }
        break;
      case 'down':
        if (top < moveAmount * verticalSteps) {
          marginTop = `${top + moveAmount}px`;
        }
        break;
      case 'left':
        if (left > -Math.abs(moveAmount * horizontalSteps)) {
          marginLeft = `${left - moveAmount}px`;
        }
        break;
      case 'right':
        if (left < moveAmount * horizontalSteps) {
          marginLeft = `${left + moveAmount}px`;
        }
        break;
      case 'reset':
        marginLeft = '0px';
        marginTop = '0px';
        break;

    }

    return {marginTop, marginLeft};
  }


}
