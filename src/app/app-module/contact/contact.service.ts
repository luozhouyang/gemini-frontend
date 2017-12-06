import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Contact} from './contact';
import {of} from 'rxjs/observable/of';
import {MockContact} from './mock.contact';

@Injectable()
export class ContactService {

  private contact: Contact;

  constructor() {
  }

  public getContactInfo(): Observable<Contact> {
    return of(MockContact.getMockContact());
  }

  public clearContactInfo() {
    this.contact = null;
  }

}
