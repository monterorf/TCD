import { of } from 'rxjs';
import { User } from '../_models/User';
import { UserService }  from './user.service';

let httpClientSpy: { post: jasmine.Spy };
let userService: UserService;

beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    userService = new UserService(httpClientSpy as any);
  });


//   it('should return expected login (HttpClient called once)', (done: DoneFn) => {
//     const loginResponse: any =
//       {
//         "username": "mariela",
//         "token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJtYXJpZWxhIiwibmJmIjoxNjI5OTg2OTc2LCJleHAiOjE2MzA1OTE3NzYsImlhdCI6MTYyOTk4Njk3Nn0.C8-t022WlyNA5pD9_S7Dy_dwUWL2jIYww6MshI6Ahwwyj0IY0C7zRv6Kj8ShEAJPDc8JKwz9t6rf5IVVuh_hWQ"
//       }

//       const user: User = {
//         "id": null, 
//         "username": "mariela",
//         "password": "123"
//       }  
  
//     httpClientSpy.post.and.returnValue(of(loginResponse));
  
//     userService.login(user).subscribe(
//       response => {
//         expect(response).toEqual(loginResponse, 'Response');
//         done();
//       },
//       done.fail
//     );
//     expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
//   });