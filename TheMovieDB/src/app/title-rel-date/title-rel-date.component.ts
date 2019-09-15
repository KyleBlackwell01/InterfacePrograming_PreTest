import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';

@Component({
  selector: 'app-title-rel-date',
  templateUrl: './title-rel-date.component.html',
  styleUrls: ['./title-rel-date.component.css']
})
export class TitleRelDateComponent implements OnInit {


  MOVIES: Movie[];




  constructor() { }

  ngOnInit() {
    this.MOVIES = MOVIES;
  }

 

}
