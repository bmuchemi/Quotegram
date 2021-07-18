export class Quotes {
    public showDetail:boolean;
    constructor(public id:number, public text:string, public author:string, public submitName:string, public postDate:Date){
        this.showDetail=false;
    }
}
