import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    templateUrl: './404.html',
    styleUrls: ['./404.scss']
})
export class PageNotFoundComponent {
  constructor(private router: Router) { }
}