import { Component, OnInit } from '@angular/core';
import { Minions } from 'src/app/interfaces/minions';
import { MinionsService } from 'src/app/services/minions.service';

@Component({
  selector: 'app-minions',
  templateUrl: './minions.component.html',
  styleUrls: ['./minions.component.css'],
})
export class MinionsComponent implements OnInit {
  public minions: Minions[] = [];

  constructor(private mountsService: MinionsService) {}

  ngOnInit(): void {
    this.mountsService.get10Minions().subscribe(
      (respMounts) => (this.minions = respMounts.results),
      (error) => console.log(error),
      () => console.log(this.minions)
    );
  }
}
