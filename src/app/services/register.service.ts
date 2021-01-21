import {​​​​​HttpClient}​​​​​ from '@angular/common/http';
import {​​​​​ Injectable }​​​​​ from '@angular/core';
import {​​​​​Register}​​​​​ from '../models/register.model';
@Injectable()

export class RegisterService{​​​​​
    constructor(private getHttp:HttpClient,private putHttp:HttpClient){​​​​​
    }​​​​​
   /* public getAllUsersFromApi(){​​​​​
        return this.getHttp.get("http://localhost:60716/api/Registers");
    }​​​​​
*/
    public addUserUsingApi(reg:any){​​​​​
        console.log('service:'+reg);
        return this.getHttp.post("http://localhost:63352/api/Register",reg);
    }​​​​​

   /* public updateCustomer(id:number,customer:Customer){​​​​​
        return this.putHttp.put("http://localhost:61488/api/Customer/"+id,customer);
    }​​​​​*/

    public GetCheckUser(username: string){
        return this.getHttp.get("http://localhost:63352/api/UsernameExist?username="+username);
    }
}​​​​​