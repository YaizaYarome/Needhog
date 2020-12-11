import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MountsService } from 'src/app/services/mounts.service';
import { Mount } from 'src/app/interfaces/mounts';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  @Input() allMounts: Mount[];
  @Output() outFilteredMounts: Mount[];

  expansionsList = new FormControl();
  expansions: string[] = [
    'A Realm Reborn',
    'Heavensward',
    'Stormblood',
    'Shadowbringers',
  ];

  mounts: Mount[];
  searchBarFilter = new FormControl();
  filteredMounts: Mount[];

  ngOnInit() {
    this.filteredMounts = this.allMounts;
    console.log(this.filteredMounts);
  }
  checked = false;
  unchecked = true;
  labelPosition: 'before' | 'after' = 'after';
}
