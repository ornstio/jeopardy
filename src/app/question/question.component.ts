import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Status } from '../categories';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question;
  @Output() answered = new EventEmitter<number>();
  public isOpen = false;
  constructor() { }

  ngOnInit() {
  }

  getAnswer(){
    return this.question.answers.find(a => a.id == this.question.answer).title;
  }

  open($event: MouseEvent, container: HTMLElement){
    if(this.isOpen || this.question.status != Status.Unanswered) return;
    this.isOpen = true;
    container.parentElement.style.position = 'unset';
    container.classList.add('active');
    $event.stopPropagation();
  }

  close($event: MouseEvent, container: HTMLElement){
    if(!this.isOpen) return;
    this.isOpen = false;
    container.parentElement.style.position = 'relative';
    container.classList.remove('active');
    $event.stopPropagation();
  }

  answer($event,container,id){
    this.question.status = this.question.answer == id ? Status.Correct : Status.Incorrect;
    this.answered.emit(this.question.status == Status.Correct ? this.question.value : -this.question.value);
    this.close($event,container)
  }

}
