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