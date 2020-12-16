import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class SendFormServiceService {
  formsCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.formsCollection = afs.collection('formInfoNeedhogg');
  }

  saveDataForm(data: any) {
    console.log(data, '------------');
    const id = this.afs.createId();
    const data2 = { id, ...data };
    //this.afs.collection("formInfoNeedhogg").doc('123').collection()
    this.formsCollection = this.afs.collection<any>('formInfoNeedhogg');
    this.formsCollection.doc(id).set(data2);
  }
}
