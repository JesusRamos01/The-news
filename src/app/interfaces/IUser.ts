import { Country } from './index';

export interface IUser {
    id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    country: Country;
  }

  export interface IUserCreate extends Omit <IUser, 'id'> {

  }

    export interface IUserLogin {
        email: string;
        password: string;
    }

  