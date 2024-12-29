export const ENDPOINTS = {
  AUTH: {
    SIGN_UP: '/auth/signUp',
    CONFIRM_REGISTRATION: '/auth/confirmRegistration',
    RESEND_CONFIRM_REGISTRATION: '/auth/resend',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refreshToken',
  },
  READER: {
    GET_ALL: 'reader/',
    CREATE: '/reader/create',
    UPDATE: (id: string) => `/reader/${id}`,
    DELETE: (id: string) => `/reader/delete/${id}`,
  },
  CATEGORY: {
    GET_ALL: '/category/',
    CREATE: '/category/create',
    UPDATE: (id: string) => `/category/${id}`,
    DELETE: (id: string) => `/category/delete/${id}`,
  },
  BRAND: {
    GET_ALL: '/brand/',
    CREATE: '/brand/create',
    UPDATE: (id: string) => `/brand/${id}`,
    DELETE: (id: string) => `/brand/delete/${id}`,
  },
  NEWS: {
    GET_ALL: '/news/',
    CREATE: '/news/create',
    UPDATE: '/news/update',
    GET: (id: string) => `/news/${id}`,
    DELETE: (id: string) => `/news/delete/${id}`,
    GENERATE: '/news/generateNews',
    GENERATE_STREAM: '/news/generateNewsStream',
    FIND: '/news/findSelectedText',
    REFER: '/news/referSelectedText',
  },
};
