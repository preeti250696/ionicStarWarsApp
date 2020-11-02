import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
  filmId:any;
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.filmId = this.activateRoute.snapshot.paramMap.get('id');
  }

}
