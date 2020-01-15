import { TestBed } from '@angular/core/testing';

import { MysqlService } from './mysql.service';

describe('MysqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MysqlService = TestBed.get(MysqlService);
    expect(service).toBeTruthy();
  });
});
