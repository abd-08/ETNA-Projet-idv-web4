import DateTimeFormat = Intl.DateTimeFormat;

export class Book {

  id: number;

  title: string;

  description: string;

  author: string;

  image: string;

  price:number;
  pages:number;

  quantity:number;

  date_publication: DateTimeFormat;

  creation_date: DateTimeFormat;

  last_modification_date: DateTimeFormat;

}
