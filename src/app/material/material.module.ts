import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

const MaterialComponents: any[] | Type<any> | ModuleWithProviders<{}> = [];

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
  ],
  exports: [
    MaterialComponents,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
  ],
})
export class MaterialModule {}
