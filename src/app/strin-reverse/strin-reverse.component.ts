import { Component } from '@angular/core';

@Component({
  selector: 'app-strin-reverse',
  templateUrl: './strin-reverse.component.html',
  styleUrls: ['./strin-reverse.component.css']
})
export class StrinReverseComponent {
  inputText:string=''
  reversedText:string=''

  onChange(){
    this.reversedText=''
  }

  reverseString(){
    this.reversedText=this.inputText.split('').reverse().join('')
  }
}
