import {Component, Input, OnInit} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {AddressService} from '../../services/address.service';
import {BookService} from '../../services/book.service';
import {Book} from '../../modele/Book';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {


  constructor(private bookservice: BookService) { }
  model: NgbDateStruct;
  @Input() book : Book = new Book();
  mode_vision:boolean = true;


  current = 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg';

  ngOnInit(): void {

  }


  changeMode(){
    if (this.mode_vision) this.mode_vision=false;
    else this.mode_vision=true;
  }

}
