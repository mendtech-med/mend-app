interface Preference {
  [key: string]: string[];
}

export interface IContentCreate {
  title: string;
  categoryType: string;
  category: string;
  preferences: Preference;
}

export interface IContentClassification {
  _id?: string;
  userId: string;
  title: string;
  categoryType: string;
  category: string;
  preferences: Preference;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IBrandCreate {
  userId: string;
  brandVoiceName: string;
  content: string;
}

export interface IBrand extends Document {
  userId: string;
  _id: string;
  brandVoiceName: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ISignUpData {
  given_name: string;
  family_name: string;
  password: string;
  email: string;
}

export interface INewsCreate {
  newsTitle: string;
  brandId: string;
  readerId: string;
  categoryId: string;
}

export interface INews {
  _id: string;
  userId: string;
  newsTitle: string;
  content: string;
  refer: IRefer[];
  brandId: IBrand;
  readerId: IContentClassification;
  categoryId: IContentClassification;
  createdAt: Date;
  updatedAt: Date;
}

export interface IRefer {
  content: string;
  source: string;
  createdAt: string;
}

export interface IConfirmRegistrationData {
  email: string;
  confirmationCode: string;
}

export interface IResendConfirmRegistrationData {
  email: string;
}

export interface ISignOut {
  email?: string;
  access_token?: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ISuccess<T> {
  success: boolean;
  message: string;
  data: T;
}
