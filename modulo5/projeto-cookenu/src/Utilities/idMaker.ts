import { v4 } from 'uuid'

export default function idMaker(): string {
    return v4()
}