export interface LoginFormData {
  email: string;
  password: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}



export interface AuthResponse {
  token: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}
