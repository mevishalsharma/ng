import { Component, OnInit } from "@angular/core"
import { StudentService } from "../services/studentservice"



@Component({
    selector: "app-service",
    templateUrl: "./serviceexamplecomponent.component.html",
    styles: []
})
export class ServiceExampleComponent implements OnInit {
    private servicetitle: string = "";
    private studentList: any;


    constructor(private studentServiceObject: StudentService) {

        //let studentServiceObject = new StudentService();
        ///this.studentList = studentServiceObject.getAllStudent(); /// Commenting because, now we are calling from http web api , and its return type is observable   
    }

    ngOnInit() {
        this.getName();
        this.getStudentData();
    }

    getName() {
        this.servicetitle = "I am coming from service component "
    }

    getStudentData() {
        // this.studentServiceObject.getAllStudent().subscribe(
        //     (respData) => { this.studentList = respData },
        //     (err) => console.log("Oh God Something bad happened." + err),
        //     () => console.log("Hurray !!!  I am Completed")
        // );

        this.studentServiceObject.getAllStudent().then(data=>{
            this.studentList = data;
        })

        console.log(this.studentList);
    }


}