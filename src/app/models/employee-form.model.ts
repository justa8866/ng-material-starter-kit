export interface EmployeeFormModel {
  readonly status: string;
  readonly data: IData;
}

export interface IData {
  name: string;
  salary: number;
  age: number;
  id: number;
}
