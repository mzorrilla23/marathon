import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Compania } from './compania';
import {ConsultaRucService} from './consulta-ruc.service';

@Component({
  selector: 'app-consulta-ruc',
  templateUrl: './consulta-ruc.component.html',
  styleUrls: ['./consulta-ruc.component.css']
})
export class ConsultaRucComponent implements OnInit {

  formCompania: FormGroup;
  errorMessage: string;
  companiaReal:Compania=new Compania();

  constructor(private fb: FormBuilder, private consultaRucService: ConsultaRucService) { }

  ngOnInit() {

    this.formCompania = this.fb.group({
      ruc: [  '', Validators.required]
      })

  }


  consultar(){
    console.log(this.formCompania.value);
    console.log(this.formCompania.value.ruc);
    if (this.formCompania.invalid) {
      document.getElementById("demo").innerHTML = "Por favor ingrese ruc";

    }else{
      document.getElementById("demo").innerHTML="";
      this.consultaRucService.getCompania(this.formCompania.value.ruc).subscribe(
        compania=>{
          console.log(compania)
          this.companiaReal=compania;
          ;
          document.getElementById("demo").innerHTML = JSON.stringify(compania);
        },
        error =>{
          console.log(error);
          document.getElementById("demo").innerHTML = JSON.stringify(error);
          this.errorMessage = error as any;
        }
      );
    }

  }

}
