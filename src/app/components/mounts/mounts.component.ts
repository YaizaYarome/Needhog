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
  public count: number = 10;
  public containerMonturas = '.containerScroll';

  constructor(private mountsService: MountsService) {}

  ngOnInit(): void {
    this.mountsService.getMounts().subscribe(
      (respMounts) => {
        this.allMounts = respMounts.results;
        console.log('thisAllMounts', this.allMounts);
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

    console.log(this.count);
  }

  /***** Sortings *****/

  orderByNumber() {
    this.allMounts.sort(function (mount1, mount2) {
      return mount1.id - mount2.id;
    });
  }

  orderByName() {
    this.allMounts.sort(function (a, b) {
      const mount1 = a.name;

      const mount2 = b.name;

      return mount1.localeCompare(mount2);
    });
  }

  orderByRelease() {
    this.allMounts.sort(function (a, b) {
      const patch1 = a.patch;

      const patch2 = b.patch;

      return patch1.localeCompare(patch2);
    });
    console.log(this.allMounts);
  }
}
