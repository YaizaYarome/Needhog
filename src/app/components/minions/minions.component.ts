import { Component, OnInit } from '@angular/core';
import { Minions } from 'src/app/interfaces/minions';
import { SortingService } from 'src/app/services/sorting.service';

@Component({
  selector: 'app-minions',
  templateUrl: './minions.component.html',
  styleUrls: ['./minions.component.css'],
})
export class MinionsComponent implements OnInit {
  public minions: Minions[] = [];
  public allMinions: Minions[] = [];
  public count: number = 10;
  public containerMinions = '.containerScroll';

  constructor(private sortingService: SortingService) {}

  ngOnInit(): void {
    this.sortingService.getMinions().subscribe(
      (respMinions) => {
        this.sortingService.itemsArray = this.allMinions;
        this.sortingService.orderByName();
        this.allMinions = respMinions.results;
        this.minions = this.allMinions.slice(0, this.count);
      },
      (error) => console.log(error),
      () => console.log(this.allMinions)
    );
  }

  onScroll() {
    console.log('has scrolleado');
    this.count = this.count + 10;
    this.minions = this.allMinions.slice(0, this.count);
  }

  backToTop() {
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
  }
}
