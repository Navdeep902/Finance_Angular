import {​​​​​ Component, OnInit }​​​​​ from '@angular/core';
import {​​​​​ NgForm }​​​​​ from '@angular/forms';
import {​​​​​ Router }​​​​​ from '@angular/router';
import {​​​​​ Register }​​​​​ from 'src/app/models/register.model';
import {​​​​​ RegisterService }​​​​​ from 'src/app/services/register.service';

@Component({​​​​​
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}​​​​​)

export class RegisterComponent implements OnInit {​​​​​
  
  isExist:any;
  user: any;
  register: Register;

  constructor(private registerService:RegisterService, private _router:Router) {​​​​​ 
      this.register=new Register();
  }​​​​​

  InsertUser(temp:any){
    this.registerService.GetCheckUser(temp.value.username).subscribe(d=>{
      this.isExist=d;
    })
    if(!this.isExist)
    {
      this.register.Name=temp.value.Name;
      this.register.email=temp.value.email;
      this.register.Phone_No=temp.value.Phone_No;
      this.register.username=temp.value.username;
      this.register.Password=temp.value.Password;
      this.register.Address=temp.value.Address;
      this.register.Card_Type=temp.value.Card_Type;
      this.register.Fees_Paid=true;
      this.register.document=temp.value.document;
      this.register.Bank_Name=temp.value.Bank_Name;
      this.register.Account_Number=temp.value.Account_Number;
      this.register.IFSC_Code=temp.value.IFSC_Code;
      this.registerService.addUserUsingApi(this.register).subscribe(d=>{console.log(d)})
      alert('You are register '+ temp.value.Name);
      this._router.navigate(['/login']);
    }
    else
    {
      alert(temp.value.username+' already exist');
    }
  }​​​​​
 
  ngOnInit(): void {​​​​​
  }​​​​​
}​​​​​


