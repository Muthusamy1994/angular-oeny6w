import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loginpage",
  templateUrl: "./loginpage.component.html",
  styleUrls: ["./loginpage.component.css"]
})
export class LoginpageComponent implements OnInit {
  hellos: string = "hi";
  constructor() {}

  ngOnInit() {}
  hello() {
    alert("Successful");
  }
  hi = "";
}
