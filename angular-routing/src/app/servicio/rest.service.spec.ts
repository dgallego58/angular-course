import { TestBed } from '@angular/core/testing';
import { Producto } from '../dominio/producto';

import { RESTService } from './rest.service';

describe('RESTService', () => {
  let service: RESTService<Producto, String>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
