import { Injectable } from '@angular/core';
import {AngularFireModule} from 'angularfire2'
import {Registration} from './registration.model'
import { database } from 'firebase';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class RegisterService {
  registrationList: AngularFireList<any>;
  selectedRegister: Registration = new Registration;


  constructor(private firebase :AngularFireDatabase) { }
  
  getData(){
    this.registrationList = this.firebase.list ('register');
    return this.registrationList;
  }
  
  insertRegistration(register : Registration)
  {
    this.registrationList.push({
      name: register.name,
      occupation: register.occupation,
      address: register.address,

    })
  }

  updateRegistration(register : Registration){
    this.registrationList.update(register.$key
      {
        name: register.name,
        occupation: register.occupation,
        address: register.address,
  
      } );

  }

}
