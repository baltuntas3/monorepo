import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { DataFormat } from '../dataFormat';

@Component({
  selector: 'burak-hellocomponent',
  templateUrl: './hellocomponent.component.html',
  styleUrls: ['./hellocomponent.component.css'],
})
export class HellocomponentComponent implements OnInit {
  Message: any = '';
  Arr: DataFormat[] = [];
  constructor(private service: DataServiceService) {
    service.getSimpleData().subscribe((data) => {
      this.Message = data;
    });

    service.getData().subscribe((data) => {
      console.log(data);
      this.Arr = data;
    });
  }

  ngOnInit(): void {}
}
