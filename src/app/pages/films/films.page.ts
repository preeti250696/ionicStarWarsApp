import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  openDetails() {
    this.router.navigateByUrl('/tabs/films/42')
  }
  goToPlanets() {
    this.router.navigateByUrl('/tabs/planets');
  }
}
