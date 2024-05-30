import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserModel } from '../../../models/user.model';
import { map } from 'rxjs/operators';

export class UsersDataSource extends DataSource<UserModel> {
  private dataSubject = new BehaviorSubject<UserModel[]>([]);

  constructor(private usersInput: Observable<UserModel[]>) {
    super();
  }

  connect(): Observable<UserModel[]> {
    return this.usersInput.pipe(
      map(users => users.map(user => ({
        ...user,
        linksCount: user.linksIds.length
      }))),
      map(users => {
        this.dataSubject.next(users);
        return users;
      })
    );
  }

  disconnect(): void {
    this.dataSubject.complete();
  }
}

