import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../modele/Book';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  listBook:[Book];
  bookList = [
    {
      title: 'eXtreme Programming Explained',
      autor: 'Jhon smith',
      date: '11:09 PM - 1 Jan 2016',
      img: 'https://cdn.balibaris.com/23870-home_alternate/tshirt-mitch-marine.jpg',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
        '      Phasellus nec iaculis mauris',
      price: 10.99
    },
    {
      title: 'Women Sun and Moon Print Pants Hippie Boho Leggings Pants',
      autor: 'wish',
      date: '19:09 PM - 1 fev 2021',
      price: 109.99,
      img: 'https://canary.contestimg.wish.com/api/webimage/5ae5a28299cd1427607b8298-large.jpg?cache_buster=fb99b0983ccb77fe8c52a6800cc5f65d',
      description: 'Sun and Moon Print Leggings in Black Purely Celestial! The Sun and Moon leggings feature a vibrant urban style print that will surely turn heads! These bold leggings pair well with an oversized tank and combat boots. Stretchy graphic print leggings with an elastic waistband 95% polyester, 5% spandex.'
    }, {
      title: 'eXtreme Programming Explained',
      autor: 'Jhon smith',
      price: 10.99,
      date: '11:09 PM - 1 Jan 2016',
      img: 'https://cdn.balibaris.com/23870-home_alternate/tshirt-mitch-marine.jpg',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
        '      Phasellus nec iaculis mauris.'
    },
    {
      title: 'Mens Vintage style ethnique veau-longueur lâche cordon sarouel décontracté Sarouel',
      autor: 'wish',
      date: '12:09 PM - 1 Jan 2020',
      price: 10.99,
      img: 'https://canary.contestimg.wish.com/api/webimage/5e1e8331c6dba3068af4b4e2-large.jpg?cache_buster=f9c1158496716ba8f99d2392d7eb0b3d',
      description: 'Mens Vintage style ethnique veau-longueur lâche cordon sarouel décontracté Sarouel.'
    },
    {
      title: 'eXtreme Programming Explained',
      autor: 'Jhon smith',
      price: 15.99,
      date: '11:09 PM - 1 Jan 2016',
      img: 'https://cdn.balibaris.com/23870-home_alternate/tshirt-mitch-marine.jpg',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
        '      Phasellus nec iaculis mauris.'
    },
    {
      title: 'Women Sun and Moon Print Pants Hippie Boho Leggings Pants',
      autor: 'wish',
      price: 80.99,
      date: '19:09 PM - 1 fev 2021',
      img: 'https://canary.contestimg.wish.com/api/webimage/5ae5a28299cd1427607b8298-large.jpg?cache_buster=fb99b0983ccb77fe8c52a6800cc5f65d',
      description: 'Sun and Moon Print Leggings in Black Purely Celestial! The Sun and Moon leggings feature a vibrant urban style print that will surely turn heads! These bold leggings pair well with an oversized tank and combat boots. Stretchy graphic print leggings with an elastic waistband 95% polyester, 5% spandex.'
    },
    {
      title: 'Women Sun and Moon Print Pants Hippie Boho Leggings Pants',
      autor: 'wish',
      date: '19:09 PM - 1 fev 2021',
      price: 109.99,
      img: 'https://canary.contestimg.wish.com/api/webimage/5ae5a28299cd1427607b8298-large.jpg?cache_buster=fb99b0983ccb77fe8c52a6800cc5f65d',
      description: 'Sun and Moon Print Leggings in Black Purely Celestial! The Sun and Moon leggings feature a vibrant urban style print that will surely turn heads! These bold leggings pair well with an oversized tank and combat boots. Stretchy graphic print leggings with an elastic waistband 95% polyester, 5% spandex.'
    }
  ];

  current = 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg';


  modification:boolean = false;

  PrintText(title, size): string{
    let res = title;
    if (title.length > size){
      res = res.substring(0, size);
      res = res + '...';
      return res;
    }
    return title;
  }

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getBook((result) => {
        console.log(result);
        this.listBook = result
        console.log("books charged");
      },
      (error) => {
        console.log(error);
      },"http://127.0.0.1:8090/books")
  }

  bookOpened() {

  }
}
