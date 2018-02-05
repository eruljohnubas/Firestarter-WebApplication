import { Injectable } from '@angular/core';
import {AngularFireModule} from 'angularfire2'
import {Registration} from './registration.model'
import { database } from 'firebase';
import { AngularFireList } from 'angularfire2/database/interfaces';
@Injectable()
export class RegisterService {
  registrationList: AngularFireList<any>;
  selectedRegister: Registration = new Registration;


  constructor() { }

}
