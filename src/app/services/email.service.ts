import {​​​​​HttpClient}​​​​​ from '@angular/common/http';
import {​​​​​ Injectable }​​​​​ from '@angular/core';
import {​​​​​ Email }​​​​​ from '../models/email.model';
@Injectable()
export class EmailService
{​​​​​
    constructor(private getHttp:HttpClient)
    {​​​​​
    }​​​​​
    public sendMail(email:Email)
    {​​​​​
        return this.getHttp.post("http://localhost:63352/api/Email",email);
    }​​​​​
}​​​​​