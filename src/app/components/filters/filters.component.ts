import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
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

  mountSearch: Observable<string>;
  searchBarFilter = new FormControl();
  filteredMounts: Observable<Mount[]>;

  ngOnInit() {
    this.mountSearch = this.searchBarFilter.valueChanges.pipe(
      startWith(''),
      map((mount) => this._filter(mount))
    );
  }

  checked = false;
  unchecked = true;
  labelPosition: 'alfabetical' | 'release' | 'order';

  _filter(nombre): any {
    console.log(nombre);
    const filterValue = nombre.toLowerCase() || '';

    const searchResult = this.allMounts.filter((mount) =>
      mount.name.toLowerCase().includes(filterValue)
    );
    if (searchResult.length === 0) {
      this.filteredMounts.pipe().subscribe((res) => {
        (this.allMounts = res), console.log(res);
      });
    } else {
      this.allMounts = searchResult;
    }
  }
}
