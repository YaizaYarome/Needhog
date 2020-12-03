import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  expansions: string[] = [
    'A Realm Reborn',
    'Heavensward',
    'Stormblood',
    'Shadowbringers',
  ];

  constructor() {}

  ngOnInit(): void {}
}
