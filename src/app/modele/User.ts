import DateTimeFormat = Intl.DateTimeFormat;

export class User {

  id: number;

  username: string;

  password: string;

  role: string;

  creation_date: DateTimeFormat;

  last_modification_date: DateTimeFormat;

}
