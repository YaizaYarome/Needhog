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

  control = new FormControl();
  mounts: MountsService;
  filteredMounts: Observable<string[]>;

  constructor() {}

  ngOnInit() {
    this.filteredMounts = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }
  checked = false;
  unchecked = true;
  labelPosition: 'before' | 'after' = 'after';

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.mounts.filter((mount) =>
      this._normalizeValue(mount).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
