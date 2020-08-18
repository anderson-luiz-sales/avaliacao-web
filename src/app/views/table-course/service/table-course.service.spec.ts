import { TestBed } from '@angular/core/testing';

import { TableCourseService } from './table-course.service';

describe('TableCourseService', () => {
  let service: TableCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
