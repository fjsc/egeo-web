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

import { Component, Input } from '@angular/core';

import { IconModel } from '../icons.model';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['icon.component.scss']
})

export class IconComponent {

   @Input() icon: IconModel;

   getClass(): string {
      return `icon-${this.icon.name}`;
   }

   getCode(): string {
      // let value: number = +(this.icon.key.match(/\d+/g) || [''])[0];
      return String.fromCharCode(+this.icon.key.substr(2));
   }
}
