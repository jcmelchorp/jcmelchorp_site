import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url = environment.firebaseConfig.databaseURL;
  constructor(private db: AngularFirestore) { }
  /* Original function with users
  add(project: Project, userId: string) {
    const projects = this.db.list(`projects/${userId}`);
    return projects.push(project);
  } */
  add(skillChip: Skill) {
    return this.db.collection(`skills`).add(skillChip);
  }

  /* Original function with users
  get(userId: string) {
    return this.db.list(`projects/${userId}`).snapshotChanges();
  } */
  get() {
    return this.db.collection(`skills`).snapshotChanges();
  }
  /* Original function with users
  update(project: Project, userId: string) {
    return of(this.db.object(`projects/${userId}/` + project.key)
      .update({
        title: project.title,
        description: project.description,
        photoUrl: project.photoUrl
      }));
  } */
  update(skillChip: Skill) {
    delete skillChip.key;
    this.db.doc('skills/' + skillChip.key).update(skillChip);
  }

  /* Original function with users
  delete(project: Project, userId: string) {
    return this.db.object(`projects/${userId}/` + project.key).remove();
  } */
  delete(skillKey:string) {
    this.db.doc('skills/' + skillKey).delete();
  }
}
