import { Component, OnInit } from '@angular/core';
import { SampletestService } from './sampletest.service';

@Component({
  selector: 'app-sampletest',
  templateUrl: './sampletest.component.html',
  styleUrls: ['./sampletest.component.scss'],
})

export class SampletestComponent implements OnInit {
    public sampletest = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        pass: '',
    }

    constructor (
        private sampletestService: SampletestService,
    ) { }

    ngOnInit() {
        this.sampletest.created_by = sessionStorage.getItem('email'); 
    }
}