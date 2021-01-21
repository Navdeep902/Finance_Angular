export class Register{​​​​​
    Name:string;
    email:string;
    Phone_No:string;
    username:string;
    Password:string;
    Address:string;
    Card_Type:boolean;
    Fees_Paid:boolean;
    document:string;
    Bank_Name:string;
    Account_Number:number;
    IFSC_Code:string;
    constructor(Name:string="",
        email:string="",
        Phone_No:string="",
        username:string="",
        Password:string="",
        Address:string="",
        Card_Type:boolean=false,
        Fees_Paid:boolean=false,
        document:string="",
        Bank_Name:string="",
        Account_Number:number=0,
            IFSC_Code:string=""
    )
    {​​​​​
        this.Name = Name;
        this.email = email;
        this.Phone_No = Phone_No;
        this.username = username;
        this.Password = Password;
        this.Address = Address;
        this.Card_Type = Card_Type;
        this.Fees_Paid = Fees_Paid;
        this.document = document;
        this.Bank_Name = Bank_Name;
        this.Account_Number = Account_Number;
        this.IFSC_Code = IFSC_Code;
    }​​​​​
}​​​​​