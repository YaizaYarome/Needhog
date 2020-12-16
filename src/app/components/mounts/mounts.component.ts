import { Component, OnInit } from '@angular/core';
import { Mount, Mounts } from 'src/app/interfaces/mounts';
import { SortingService } from 'src/app/services/sorting.service';

@Component({
  selector: 'app-mounts',
  templateUrl: './mounts.component.html',
  styleUrls: ['./mounts.component.css'],
})
export class MountsComponent implements OnInit {
  public mounts: Mount[] = [];
  public allMounts: Mount[] = [];
  public count: number = 10;
  public containerMonturas = '.containerScroll';

  constructor(private sortingService: SortingService) {}

  ngOnInit(): void {
    this.sortingService.getMounts().subscribe(
      (respMounts) => {
        this.sortingService.itemsArray = this.allMounts;
        this.sortingService.orderByName();
        this.allMounts = respMounts.results;
        this.mounts = this.allMounts.slice(0, this.count);
      },
      (error) => console.log(error),
      () => console.log(this.allMounts)
    );
  }

  onScroll() {
    console.log('has scrolleado');
    this.count = this.count + 10;
    this.mounts = this.allMounts.slice(0, this.count);
  }

  orderByName() {}
}
