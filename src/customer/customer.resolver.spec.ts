import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceService } from '../invoice/invoice.service';
import { CustomerDTO } from './customer.dto';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';


describe('CustomerResolver', () => {
  let resolver: CustomerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerResolver],
    }).compile();

    resolver = module.get<CustomerResolver>(CustomerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
