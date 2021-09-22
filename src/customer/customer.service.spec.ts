import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerModel } from './customer.model';
import { CustomerService } from './customer.service';

type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

describe('CustomerService', () => {
  let service: CustomerService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerService]
    }).compile();

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
