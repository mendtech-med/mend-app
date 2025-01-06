export enum AuthKeys {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
  EXPIRY = 'expiry',
  USER_EMAIL = 'user_email',
  GIVEN_NAME = 'given_name',
  FAMILY_NAME = 'family_name',
}

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordRegex =
  /^(?!\s+)(?!.*\s+$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$^*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ])[A-Za-z0-9$^*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ]{8,256}$/;



export interface IOpt {
  label: string;
  value: string;
}

export const PLAN_OPTIONS: IOpt[] = [
  { label: 'Pro Monthly', value: 'pro-monthly' },
  { label: 'Collaborate Monthly', value: 'collaborate-monthly' },
  { label: 'Enterprise Monthly', value: 'enterprise-monthly' },
  { label: 'Pro Annually', value: 'pro-annually' },
  { label: 'Collaborate Annually', value: 'collaborate-annually' },
  { label: 'Enterprise Annually', value: 'enterprise-annually' },
];