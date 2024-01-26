import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountListController.getAccounts';
export default class ApexIt extends LightningElement {
 @track columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Id', fieldName: 'Id'}
    ];

   @track accountList;
    renderaccountList;
   
//    @wire (getAccounts) wiredAccounts({data,error}){
//         if (data) {
//              this.accountList = data;
//         console.log(data); 
//         } else if (error) {
//         console.log(error);
//         }
//    }

   @track hasRendered = true;
   async renderedCallback(){
    if (this.hasRendered) {
        getAccounts().then(result => {
            console.log("Account Data***",JSON.stringify(result));
           this.renderaccountList = result;
           //this.componentLoaded = true;
           //this.showLoadingSpinner = false;
       })
       .catch(error => {
           console.log(error);
           //this.componentLoaded = true;
           //this.showLoadingSpinner = false;
       });
    }
    //this.hasRendered=false;
   }



}