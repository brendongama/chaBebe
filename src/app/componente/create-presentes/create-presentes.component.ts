import { Component, OnInit } from '@angular/core';
import { Presente } from 'src/app/model/presente';
import { PresenteService } from 'src/app/service/presente.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-presentes',
  templateUrl: './create-presentes.component.html',
  styleUrls: ['./create-presentes.component.css']
})
export class CreatePresentesComponent implements OnInit {

  presente: Presente = {
    id: '',
    nome: '',
    descricaoPresente: ''
  }

  nome = new FormControl(null);
  descricaoPresente = new FormControl(null);

  constructor(private service: PresenteService,
    private router:          Router) { }

    create(): void {
      this.service.create(this.presente).subscribe(() => {       
        this.router.navigate(['presentes']);
      })
    }

  ngOnInit(): void {
  }

}
