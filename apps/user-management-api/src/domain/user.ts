export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO 8061 Date Scalar */
  ISODateScalar: Date;
}

export interface IUser extends IUserInput{
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserInput {
  name: string;
  dob: Date;
  address: string;
  description: string;
}
