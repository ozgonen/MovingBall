import {Component, EventEmitter, Output} from '@angular/core';
import {faArrowAltCircleUp, faArrowCircleDown, faArrowCircleLeft, faArrowCircleRight, faUndoAlt} from '@fortawesome/free-solid-svg-icons';
import {Direction} from '../model/direction';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  up = faArrowAltCircleUp;
  down = faArrowCircleDown;
  left = faArrowCircleLeft;
  right = faArrowCircleRight;
  undo = faUndoAlt;

  @Output() moveBall = new EventEmitter<string>();

  onButtonClick(direction: Direction) {
    this.moveBall.emit(direction);
  }

}
