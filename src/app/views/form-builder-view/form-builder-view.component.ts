import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-builder-view',
  templateUrl: './form-builder-view.component.html',
  styleUrls: ['./form-builder-view.component.scss']
})
export class FormBuilderViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
