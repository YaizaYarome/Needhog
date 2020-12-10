import { EventEmitter } from '@angular/core';
import { Component, Input, Output, OnInit } from '@angular/core';
import { Mounts, Mount, Sources } from 'src/app/interfaces/mounts';

@Component({
  selector: 'app-mount-card',
  templateUrl: './mount-card.component.html',
  styleUrls: ['./mount-card.component.css'],
})
export class MountCardComponent implements OnInit {
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  @Input() mount!: Mount;
  texts: Sources[] = [];
  constructor() {}

  ngOnInit(): void {
    this.texts = this.mount.sources;
  }

  toggleFavourite() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
