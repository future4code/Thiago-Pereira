export type inputUserSignupDTO = {
    name: string,
    email: string,
    password: string
}

export type inputUserLoginDTO = {
    email: string,
    password: string
}

export type getUserNoPasswordDTO = {
    id: string
    name: string,
    email: string,
}

export type paramsUserFollow = {
    id: string
}