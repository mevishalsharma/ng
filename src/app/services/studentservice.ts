import { Injectable } from "@angular/core"

import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class StudentService {
    private apiURL: string = "http://www.filltext.com/?rows=20&fname={firstName}&lname={lastName}";
    private studentData: any;

    constructor(private ht: HttpClient) {
        //this.studentData = [{ "fName": "UF1", "lName": "UL1" }, { "fName": "UF2", "lName": "UL2" }, { "fName": "UF3", "lName": "UL3" }];
    }

    getAllStudent() {
        return this.ht.get(this.apiURL).toPromise();
        //return this.studentData;
    }

}