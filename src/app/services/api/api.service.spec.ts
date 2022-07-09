import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {backEndLabel, frontEndLabel, labels, securityLabel} from "../../helpers/spec-helpers/label.spec-helpers";
import {Label} from "../../models/label";

describe('ApiService', () => {
  let apiService: ApiService;
  let getNotesApi = 'https://61ee5f30d593d20017dbad98.mockapi.io/pinguin/api/noteLabels'
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ApiService]
    });
    apiService = TestBed.inject(ApiService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('get Labels from API', () => {
    let actualLabels: Label[] | undefined;

    apiService.getLabels().subscribe(
      (labels:any) => {
      actualLabels = labels
      }
    );
  controller.expectOne(getNotesApi).flush(labels);
  expect(actualLabels).toEqual(labels)
  });
});
