import { v4 } from 'uuid'

export default function idGenerator(): string {
    return v4()
}