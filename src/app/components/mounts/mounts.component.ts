import { Component, OnInit } from '@angular/core';
import { Mounts } from 'src/app/interfaces/mounts';
import { MountsService } from 'src/app/services/mounts.service';

@Component({
  selector: 'app-mounts',
  templateUrl: './mounts.component.html',
  styleUrls: ['./mounts.component.css'],
})
export class MountsComponent implements OnInit {
  public mounts: Mounts[] = [];

  constructor(private mountsService: MountsService) {}

  ngOnInit(): void {
    this.mountsService.get10Mounts().subscribe(
      (respMounts) => (this.mounts = respMounts.results),
      (error) => console.log(error),
      () => console.log(this.mounts)
    );
  }
}
