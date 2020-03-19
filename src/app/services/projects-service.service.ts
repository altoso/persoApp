import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private firestore: AngularFirestore) {
  }

  getProjects(): any {
    return this.firestore.collection('projects').valueChanges();
  }
}
