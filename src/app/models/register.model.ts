export interface RegisterModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: IName;
  readonly address: IAddress;
  readonly phone: string;
}

export interface IName {
  readonly firstname: string;
  readonly lastname: string;
}

export interface IAddress {
  readonly city: string;
  readonly street: string;
  readonly number: string;
  readonly zipcode: string;
  readonly geolocation: IGeolocation;
}

export interface IGeolocation {
  readonly lat: string;
  readonly long: string;

}
