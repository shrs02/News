import ids from '../ids/ids.js';
import { Client, Account,Databases, ID } from "appwrite";

class Autho{
    client = new Client();
    databases;
    account;

    constructor(){
        this.client.setEndpoint(ids.Url).setProject(ids.PId);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
    }

    async loginData({email,password}){
        try{
            return await this.account.createEmailSession(email,password);
        }
        catch (error){
            alert(error);
        }
    }
    async getCount(id){
        try {
            console.log(id);
            return await this.databases.getDocument(
                ids.DId,
                ids.CId,
                id,
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }
    async getUser(){
        try{
            return this.account.get()
            .then((resp)=>{
                console.log(resp);
                return resp;
            })
        }
        catch(error){
            console.log(error);
        }
    }

    async logoutData(){
        try{
            await this.account.deleteSessions();
            return true
        }
        catch(error){
            console.log(error);
            return false
        }
    }

    async createCart(id,country){
        try {
            console.log('lll',id);
            const resp = await this.databases.createDocument(
                               ids.DId,
                               ids.CId,
                               id,
                               {
                                   country
                               }
                           )
            if(resp){
                console.log(resp)
                return resp
            }
       }
       catch(error){
           console.log(error)
       }
    }
    async createUser({email,password,name,country}){
        try{
            const id=ID.unique()
            const response = await this.createCart(id,country) ;
            if (response) {
                return this.account.create(response.$id, email, password, name)
                .then((userAccount)=>{
                    if(userAccount){
                        console.log(userAccount)
                        this.loginData({email, password})
                    }
                })
                .then(()=>{
                    return {id:response.$id,country};
                })
                .catch((error)=>{alert(error)})
            }
        }
        catch(error){
            console.log(error);
        }
    }
}

const autho = new Autho();

export default autho