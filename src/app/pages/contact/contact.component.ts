import { Component } from "@angular/core";

import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
    name = this._formBuilder.group({
        nameCtrl: ["", Validators.required],
    });
    email = this._formBuilder.group({
        emailCtrl: ["", Validators.required],
    });
    text = this._formBuilder.group({
        textCtrl: ["", Validators.required],
    });
    isLinear = true;

    constructor(private _formBuilder: FormBuilder) {}

    formMessage() {
        if (this.text.valid) {
            console.log(
                JSON.stringify("nom : " + this.name.value.nameCtrl, null, 4)
            );
            console.log(
                JSON.stringify("email : " + this.email.value.emailCtrl, null, 4)
            );
            console.log(
                JSON.stringify("message : " + this.text.value.textCtrl, null, 4)
            );
            alert("Votre message a bien été envoyé.");
        }
    }
}
