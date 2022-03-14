import { userInfo } from "os"
import { performPurchase } from "../src"
import { user } from "../src/Contents/user_Object"
import { User } from "../src/Interfaces/inter_performPurchase"

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Leon Belmont",
		balance: 100
	}

	const result = performPurchase(user, 60)
	
	expect(result).toEqual({
		name: "Leon Belmont",
		balance: 40
	})
})


test("Testing balance equal the value", () => {
	const user: User = {
		name: "Sara Trantoul",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})


test("Testing balance lower than value", () => {
	const user: User = {
		name: "Rinaldo Gandolfi",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).not.toBeDefined()
})


