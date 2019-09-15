import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';


@Component({
  selector: 'app-rate-run',
  templateUrl: './rate-run.component.html',
  styleUrls: ['./rate-run.component.css']
})
export class RateRunComponent implements OnInit {

  MOVIES: Movie[];



  constructor() { }

  ngOnInit() {
    this.MOVIES = MOVIES;
  }

}
