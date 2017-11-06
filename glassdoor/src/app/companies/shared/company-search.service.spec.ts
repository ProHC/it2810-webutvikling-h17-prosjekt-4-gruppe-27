import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';


import { CompanySearchService } from './company-search.service';

describe('CompanySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanySearchService],
      imports: [ HttpModule ]
    });
  });

  it('should be created', inject([CompanySearchService], (service: CompanySearchService) => {
    expect(service).toBeTruthy();
  }));
});
