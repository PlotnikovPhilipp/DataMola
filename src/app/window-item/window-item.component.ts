import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-window-item',
  templateUrl: './window-item.component.html',
  styleUrls: ['./window-item.component.sass'],
  inputs: ['name', 'genre', 'season', 'network', 'date']
})
export class WindowItemComponent implements OnInit {
  name: string;
  genre: string;
  season: string;
  network: string;
  date: string;
  listOfGenres: Array<string>;

  ngOnInit() {
    this.listOfGenres = this.genre.split('|');
  }

}
