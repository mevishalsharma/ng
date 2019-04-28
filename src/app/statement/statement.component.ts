import { Component } from "@angular/core";
@Component({
    selector: 'statement-component',
    templateUrl: 'statement.component.html'
})
export class StatementComponent {
    message: string = "This is statement component"
    private list: any = [
        { fName: "Anand", lName: "Dubey" },
        { fName: "Vishal", lName: "Sharma" }

    ]
    private show:boolean=true;
    showDiv(){
        if(this.show){
            this.show=false;
        }
        else{
            this.show=true;
        }
    }
}