import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {labels} from "../../helpers/spec-helpers/label.spec-helpers";
import {Label} from "../../models/label";
import {Note} from "../../models/note";
import {notesArray} from "../../helpers/spec-helpers/note.spec-helpers";

describe('ApiService', () => {
  let apiService: ApiService;
  let mainApi = 'https://61ee5f30d593d20017dbad98.mockapi.io/pinguin/api';
  let getLabelsApi = `${mainApi}/noteLabels`;
  let getNotesApi = `${mainApi}/notes`;
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
  controller.expectOne(getLabelsApi).flush(labels);
  expect(actualLabels).toEqual(labels)
  });
  it('get Notes from API', () => {
    let actualNotes: Note[] | undefined;

    apiService.getNotes().subscribe(
      (notes:any) => {
      actualNotes = notes
      }
    );
  controller.expectOne(getNotesApi).flush(notesArray);
  expect(actualNotes).toEqual(notesArray)
  });
});
