export type SignInCredential = {
  email: string
  password: string
}

export type OTPSignInCredential = {
  mobile: number
}

export type ForgotPasswordReq = {
  email: string
}

export type OTPForgotPasswordReq = {
  mobile: number
}

export interface SignInResponse {
  id: string
  fullName: string
  authority:[]
  phoneNumber: string
  email: string
  access_token: string
}

export interface ResponseInfoObject {
  status: 'success' | 'failed';
  error_code?: number;
  message?: string;
}

export type SignUpResponse = SignInResponse

export type SignUpCredential = {
  name: string
  username: string
  password: string
}

export type OTPSignUpCredential = {
  mobile: number
}
