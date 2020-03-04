import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

 @Input() Instruction: string;
 
 
  sideA:number;
  sideB:number;
  sideC:number;
  
  

  show:boolean=false;
  

  ngOnInit() {
  }

 
  Reset()
  {
    this.sideC= 0;
    this.sideA=0;
    this.sideB =0;
    this.show=false;
  }

  Pythagorean()
  { this.show=true;
    this.sideC= Math.round(Math.sqrt(Math.pow(this.sideA, 2) +Math.pow(this.sideB, 2) ));  
                           
  }
}
