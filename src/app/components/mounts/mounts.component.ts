import { Component, OnInit } from '@angular/core';
import { Mount, Mounts } from 'src/app/interfaces/mounts';
import { MountsService } from 'src/app/services/mounts.service';

@Component({
  selector: 'app-mounts',
  templateUrl: './mounts.component.html',
  styleUrls: ['./mounts.component.css'],
})
export class MountsComponent implements OnInit {
  public mounts: Mount[] = [];
  public allMounts: Mount[] = [];
  public mountsData: Mounts;
  count: number = 0;
  counter: number = 0;

  constructor(private mountsService: MountsService) {}

  ngOnInit(): void {
    this.mountsService.getMounts().subscribe(
      (respMounts) => {
        this.mountsData = respMounts;
        this.allMounts = this.mountsData.results;
        this.count = this.mountsData.count;
      },
      (error) => console.log(error),
      () => this.draw10Mounts()
    );
  }

  draw10Mounts() {
    if (this.counter <= this.count) {
      this.mounts = this.mounts.concat(
        this.allMounts.slice(this.counter, this.counter + 10)
      );
      this.counter += 10;
    }
  }
}
