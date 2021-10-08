import { NgModule, Component, OnInit, AfterViewInit, ElementRef, NgZone, ViewChild, SystemJsNgModuleLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

  export class LoginComponent implements OnInit {

    formLogin: FormGroup;

    constructor(private fb: FormBuilder,public router: Router){

    }

    ngOnInit(): void {
        this.formLogin = this.fb.group({
        username: [  '', Validators.required],
        password: [ '', [Validators.required, Validators.minLength(6)]]
        })
    }

    public errorHandling = (control: string, error: string) => {
        return this.formLogin.controls[control].hasError(error);
    }

    ingresar(){

        console.log(this.formLogin.invalid);

         if (this.formLogin.invalid) {
            console.log("Hola mundo!!!");
        }else{
            if(this.formLogin.value.username!='marathon'){
                document.getElementById("msg").innerHTML = "Usuario incorrecta";
            }
            if(this.formLogin.value.password!='123456789'){
                document.getElementById("msg").innerHTML = "contraseña incorrecta";
            }
            if(this.formLogin.value.username=='marathon' && this.formLogin.value.password=='123456789'){
                this.router.navigate(['/consulta-ruc']);
            }  

            
        }

        
    }


  }