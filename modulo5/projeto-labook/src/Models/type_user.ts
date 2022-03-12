export type Type_User = {
    id: string
    name: string
    email: string
    password: string
}

export type Type_Friendship = {
    follower_id: string
    followed_id: string
}

export type Model_toUser = {
    id: string
    name: string
    email: string
}