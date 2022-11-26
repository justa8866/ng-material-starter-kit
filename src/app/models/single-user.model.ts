export interface SingleUserModel {
  readonly id: number;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly phone: string;
  readonly name: IName;
  readonly address: IAddress;
}

export interface IName {
  firstname: string;
  lastname: string;
}

export interface IAddress {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: IGeolocation;
}

export interface IGeolocation {
  lat: string;
  long: string;
}
