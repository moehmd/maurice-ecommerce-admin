import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button' ;
 import { MatIconModule} from '@angular/material/icon' ;
  import { MatFormFieldModule } from '@angular/material/form-field' ;
 import  {MatInputModule} from '@angular/material/input';
   import {MatCardModule} from "@angular/material/card";
   import { MatSelectModule} from '@angular/material/select';
    import {MatExpansionModule} from '@angular/material/expansion';
    import  {MatSnackBarModule} from '@angular/material/snack-bar';
      import {MatToolbarModule} from '@angular/material/toolbar';
      import {MatDialogModule} from '@angular/material/dialog';
      import {MatDividerModule} from '@angular/material/divider';
     import  {MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
    imports: [
                MatButtonModule,
                MatIconModule,
                MatFormFieldModule,
                MatInputModule,
                MatCardModule,
                MatSelectModule,
                MatExpansionModule,
                MatSnackBarModule,
                MatCheckboxModule,
                MatToolbarModule,
                MatDialogModule,
                MatTabsModule,
                MatAutocompleteModule,
                MatDividerModule,
                MatPaginatorModule,
                MatTableModule,
                MatSortModule
             ],
    exports: [
                MatButtonModule,
                MatIconModule,
                MatFormFieldModule,
                MatInputModule,
                MatCardModule,
                MatSelectModule,
                MatExpansionModule,
                MatSnackBarModule,
                MatCheckboxModule,
                MatToolbarModule,
                MatDialogModule,
                MatTabsModule,
                MatAutocompleteModule,
                MatPaginatorModule,
                MatTableModule
             ]
})
export class MaterialModule {

}
