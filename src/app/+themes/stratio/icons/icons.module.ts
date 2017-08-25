
/*
 * Copyright (c) 2017. Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software is licensed under the Apache Licence 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared';
import { IconsComponent } from './icons.component';
import { IconComponent } from './icon/icon.component';
import { IconsService } from './icons.service';
import { routing } from './icons.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [IconsComponent, IconComponent],
   providers: [IconsService]
})
export class IconsModule { }

