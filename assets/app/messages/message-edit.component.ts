import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from './message.service';
import { Message } from './message.model';


@Component({
    selector: 'app-message-edit',
    templateUrl: './message-edit.component.html',
})

export class messageEditComponent implements OnInit {

    @Input() message: Message;
    @Output() submitClicked = new EventEmitter<string>();

    myForm: FormGroup;

    constructor(private messageService: MessageService) { }

    onSubmit() {
        this.messageService.editMessage(this.message, this.myForm.value.editField)
        .subscribe(
            result =>console.log(result)
        );
        this.submitClicked.emit();

    }
    ngOnInit() {
        this.myForm = new FormGroup({
            editField: new FormControl(this.message.content, Validators.required)
        });        
    }

    resetInput(){
        this.myForm.setValue({"editField": this.message.content})
    }

}