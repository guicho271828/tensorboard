/* Copyright 2020 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
/**
 * @fileoverview Module for rendering list of runs from experiments in a table.
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {ColorPickerModule} from 'ngx-color-picker';

import {AlertModule} from '../../../alert/alert_module';
import {FilterInputModule} from '../../../widgets/filter_input/filter_input_module';
import {RangeInputModule} from '../../../widgets/range_input/range_input_module';
import {RunsGroupMenuButtonComponent} from './runs_group_menu_button_component';
import {RunsGroupMenuButtonContainer} from './runs_group_menu_button_container';
import {RunsTableComponent} from './runs_table_component';
import {RunsTableContainer} from './runs_table_container';

@NgModule({
  imports: [
    ColorPickerModule,
    CommonModule,
    FilterInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    RangeInputModule,
    AlertModule,
  ],
  exports: [RunsTableContainer],
  declarations: [
    RunsGroupMenuButtonComponent,
    RunsGroupMenuButtonContainer,
    RunsTableComponent,
    RunsTableContainer,
  ],
})
export class RunsTableModule {}
