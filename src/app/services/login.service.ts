import {​​​​​HttpClient}​​​​​ from '@angular/common/http';
import {​​​​​ Injectable }​​​​​ from '@angular/core';
import {​​​​​ Register }​​​​​ from '../models/register.model';

@Injectable()
export class LoginService
{​​​​​

    cardNumber:any;
    username:any;

    constructor(private getHttp:HttpClient,private putHttp:HttpClient, private postHttp:HttpClient)
    {​​​​​
    }​​​​​
    public GetUserLoginCheck(username:string, password:string)
    {​​​​​
        return this.getHttp.get("http://localhost:63352/api/Login?username="+username+"&password="+password);
    }​​​​​
    public GetAdminLoginCheck(username:string, password:string)
    {​​​​​
        return this.getHttp.get("http://localhost:63352/api/AdminLogin?username="+username+"&password="+password);
    }​​​​​

    public GetCardNumberWithUsername(username:string)
    {
        return this.getHttp.get("http://localhost:63352/api/login?username="+username);
    }

    public GetUserWithEmail(email:string){
        return this.getHttp.get("http://localhost:63352/api/UsernameWithEmail?email="+email);
    }
}​​​​​   