import { Component, OnInit } from '@angular/core';
import { Presente } from 'src/app/model/presente'
import { MatTableDataSource } from '@angular/material/table';
import { PresenteService } from 'src/app/service/presente.service';


@Component({
  selector: 'app-presentes',
  templateUrl: './presentes.component.html',
  styleUrls: ['./presentes.component.css']
})

export class PresentesComponent implements OnInit {

  ELEMENT_DATA: Presente[] = [];
  displayedColumns: string[] = ['nome', 'presente'];
  dataSource = new MatTableDataSource<Presente>(this.ELEMENT_DATA);

  constructor(private service: PresenteService) { }

  ngOnInit(): void {
    this.listAll();
  }

  listAll() {
    this.service.listAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Presente>(resposta);
      console.log(resposta);
    })
  }

}
