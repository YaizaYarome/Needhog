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
  count: number = 10;

  constructor(private mountsService: MountsService) {}

  onScroll() {
    console.log('has scrolleado');
    if (this.mounts.length < this.allMounts.length) {
      this.count++;
    } else {
      console.log('You reached the end, Kupó!');
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.mountsService.getMounts().subscribe(
      (respMounts) => {
        this.allMounts = respMounts.results;
        console.log('thisAllMounts', this.allMounts);
        this.mounts = this.allMounts.slice(0, this.count);
      },
      (error) => console.log(error),
      () => console.log(this.mounts)
    );
  }
}
