import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories/categories';
import * as _ from 'underscore';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Status } from '../categories/status';

@Component({
  selector: 'app-jeopardy',
  templateUrl: './jeopardy.component.html',
  styleUrls: ['./jeopardy.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        animate(1000, keyframes([
          style({ opacity: 0 }),
          style({ opacity: 1 })
        ]))
      ]),
      transition(':leave', [
        animate(1000, keyframes([
          style({ opacity: 1 }),
          style({ opacity: 0 })
        ]))
      ]),
    ]),
    trigger('fadeIn', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        animate(250, keyframes([
          style({ opacity: 0 }),
          style({ opacity: 1 })
        ]))
      ])
    ])
  ]
})
export class JeopardyComponent implements OnInit {

  public categories = [];
  public score = 0;
  public questionValue = '';

  ngOnInit(){
    this.shuffle();
  }

  reset(){
    this.categories.forEach(category => {
      category.questions.forEach(question => {
        question.status = Status.Unanswered;
      })
    });
    this.score = 0;
  }

  shuffle(){
    var categories = Categories.slice();
    this.categories = [];
    categories.forEach(category => {
      category.questions.forEach(question => {
        question.status = Status.Unanswered;
      })
      var randomCategory = { title: category.title, questions: []};
      var questions = _.groupBy(category.questions,'value');
      for(var question in questions){
        var q = _.shuffle(questions[question])[0];
        q.answers = _.shuffle(q.answers);
        randomCategory.questions.push(q);
      }
      _.sortBy(randomCategory.questions,'value');
      this.categories.push(randomCategory);
    })
    this.score = 0;
  }

  scored($event){
    this.questionValue = $event < 0 ?  `-${$event}` : `+${$event}`;
    setTimeout(() => {
      this.questionValue = null;
    },1000);
    this.score += $event;
  }

}
