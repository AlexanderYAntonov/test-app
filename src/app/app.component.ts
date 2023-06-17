import {Component, OnInit} from '@angular/core';
import { take } from 'rxjs';
import {ListService} from '@expero/test-lib';

@Component({
  selector: 'app-root',
  template: `
    <tl-list [list]="list"></tl-list>
    <div tlBorder>I am bordered now</div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  list: string[] = [];

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.listService.list.pipe(take(5)).subscribe((value => this.list = [...this.list, value]));
  }
}
