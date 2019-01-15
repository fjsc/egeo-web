/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import {
  TestBed
} from '@angular/core/testing';

import {Http} from '@angular/http';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {StInfoCardComponent} from './st-info-card.component';


describe('StInfoCardComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StInfoCardComponent],
      imports: [RouterTestingModule],
      providers: []
    });
  });

  let stInfoCardComponent: StInfoCardComponent;
  let fakeOptions: string[] = ['tab 1', 'tab 2', 'tab 3'];

  beforeEach(() => {
    stInfoCardComponent = new StInfoCardComponent();
  });

  it ('Should be able to change the photo to default photo when photo url is broken', () => {
    stInfoCardComponent.photo = 'broken/img/url';
    stInfoCardComponent.onPhotoError();

    expect(stInfoCardComponent.photo).toBe(stInfoCardComponent.defaultPhoto);
  });
  it ('if qaTag is defined generateQaTag returns this string', () => {
    stInfoCardComponent.qaTag = 'test';
    let id = stInfoCardComponent.generateQaTag();

    expect(id).toEqual('qaTag-test');
  });
  it ('if qaTag is not defined generateQaTag returns title', () => {
    stInfoCardComponent.qaTag = undefined;
    stInfoCardComponent.title = 'title';
    let id = stInfoCardComponent.generateQaTag();

    expect(id).toEqual('qaTag-title');
  });
});
