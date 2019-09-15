import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';

@Component({
  selector: 'app-short-desc',
  templateUrl: './short-desc.component.html',
  styleUrls: ['./short-desc.component.css']
})
export class ShortDescComponent implements OnInit {

  movies: Movie[]

  constructor() { }

  ngOnInit() {
  }

}
