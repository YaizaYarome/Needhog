import { Component, Input, OnInit } from '@angular/core';
import { Mount, Mounts } from 'src/app/interfaces/mounts';

@Component({
  selector: 'app-minion-card',
  templateUrl: './minion-card.component.html',
  styleUrls: ['./minion-card.component.css'],
})
export class MinionCardComponent implements OnInit {
  @Input() mount!: Mount;
  constructor() {}

  ngOnInit(): void {}
}
