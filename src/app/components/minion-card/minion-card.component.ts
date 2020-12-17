import { EventEmitter } from '@angular/core';
import { Component, Input, Output, OnInit } from '@angular/core';
import { Minion, Sources } from 'src/app/interfaces/minions';

@Component({
  selector: 'app-minion-card',
  templateUrl: './minion-card.component.html',
  styleUrls: ['./minion-card.component.css'],
})
export class MinionCardComponent implements OnInit {
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  @Input() minion!: Minion;
  texts: Sources[] = [];
  constructor() {}

  ngOnInit(): void {
    this.texts = this.minion.sources;
  }

  toggleFavourite() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
