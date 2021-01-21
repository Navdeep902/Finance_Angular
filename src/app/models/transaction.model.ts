export class Transaction{
    Product_ID:number;
    Date:Date;
    Amount_Paid:number;
    Card_Number:number;
    EMI_Tenure:number;
    constructor(Product_ID:number, Date: Date, Amount_Paid:number=0, Card_Number:number, EMI_Tenure:number){
        this.Product_ID=Product_ID;
        this.Date=Date;
        this.Amount_Paid=Amount_Paid;
        this.Card_Number=Card_Number;
        this.EMI_Tenure=EMI_Tenure;
    }
}