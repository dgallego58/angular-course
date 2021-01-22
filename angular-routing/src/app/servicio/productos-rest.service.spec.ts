import { TestBed } from '@angular/core/testing';

import { ProductosRestService } from './productos-rest.service';

describe('ProductosRestService', () => {
  let service: ProductosRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
