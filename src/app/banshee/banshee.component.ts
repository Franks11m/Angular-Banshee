import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NzCardComponent, NzCardMetaComponent } from 'ng-zorro-antd/card';
import { HttpClientModule } from '@angular/common/http';
import { BansheeService } from '../services/banshee.service';

@Component({
  selector: 'app-banshee',
  standalone: true,
  imports: [HttpClientModule, NgFor, NzCardComponent, NzCardMetaComponent],
  templateUrl: './banshee.component.html',
  styleUrl: './banshee.component.scss'
})
export class BansheeComponent implements OnInit {
  banshees : any[] = [];

  constructor(private bansheeService : BansheeService) {}

  ngOnInit(): void {
    this.bansheeService.getBanshee().subscribe(data =>{
      if(Array.isArray(data)){
        this.banshees = data;
      } else {
        console.error('La respuesta no contiene un array en la propiedad results:', data)
      }
    })
  }

}