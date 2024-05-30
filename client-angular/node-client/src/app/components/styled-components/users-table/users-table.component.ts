import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../../models/user.model';
import { UsersDataSource } from './dataSource'; // Adjust the path as necessary
import { Router } from '@angular/router';

@Component({
  selector: 'users-table-component',
  templateUrl: 'users-table.component.html',
  styleUrls: ['users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  constructor(
    private router: Router
  ) { }
  @Input()
  usersInput!: Observable<UserModel[]>;

  displayedColumns: string[] = ['email', 'password', 'name', 'linksCount'];
  dataSource!: UsersDataSource;

  ngOnInit() {
    this.dataSource = new UsersDataSource(this.usersInput);
  }

  onRowClicked(row: UserModel) {
    console.log('Row clicked: ', row.id);
    this.router.navigate(["/admin/user",row.id])
  }
}

