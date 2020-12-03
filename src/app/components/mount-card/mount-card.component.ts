import { Component, Input, OnInit } from '@angular/core';
import { Mounts } from 'src/app/interfaces/mounts';

@Component({
  selector: 'app-mount-card',
  templateUrl: './mount-card.component.html',
  styleUrls: ['./mount-card.component.css'],
})
export class MountCardComponent implements OnInit {
  @Input() mount!: Mounts;
  constructor() {}

  ngOnInit(): void {}
}
