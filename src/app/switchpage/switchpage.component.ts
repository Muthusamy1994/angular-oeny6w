import {
  Component,
  OnInit,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked
} from "@angular/core";

@Component({
  selector: "app-switchpage",
  templateUrl: "./switchpage.component.html",
  styleUrls: ["./switchpage.component.css"]
})
export class SwitchpageComponent
   implements OnInit, OnDestroy, AfterContentInit, AfterContentChecked {
  now = new Date();
  constructor() {
    console.log("constructor1");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
  hello() {
    //alert("Accessing...");

    let decision: boolean = false;
    if (decision) alert("trueflow");
    else alert("falseflow");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
}
