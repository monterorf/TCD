import { of } from 'rxjs';
import { StoreService }  from './store.service';

let httpClientSpy: { get: jasmine.Spy };
let storeService: StoreService;

beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    storeService = new StoreService(httpClientSpy as any);
  });


  it('should return expected stores (HttpClient called once)', (done: DoneFn) => {
    const expectedStores: any =
    [
        {
            "id": 1,
            "name": "Soler",
            "address": "Blvd Soler 351, fraccionamiento Soler",
            "phone": "6649789812"
        },
        {
            "id": 2,
            "name": "Boulevard",
            "address": "Blvd Aguacaliente 4523, Colonia Cacho",
            "phone": "6649789812"
        }
    ]

     
  
    httpClientSpy.get.and.returnValue(of(expectedStores));
  
    storeService.getStores().subscribe(
      response => {
        expect(response).toEqual(expectedStores, 'Response');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });