public with sharing class AccountListController {
    @AuraEnabled(cacheable = true)
    public static Account[] getAccounts() {
        return [select Id, Name from Account];
    }
}