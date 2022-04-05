import { useEffect, useState } from "react"
import { deleteUserById } from "../../API/deleteUserById"
import { getAllUsers } from "../../API/getAllUsers"
import { CompChart } from "../../Components/Graphic"
import { CompHeader } from "../../Components/Header"
import { StyledPageHome, StyledTable } from "./style"


export const PageHome = () => {
    const [users, set_users] = useState([])
    const [watcher, set_watcher] = useState(1)

    useEffect(() => {
        getAllUsers(set_users)
    }, [watcher])

    const addNewUser = (user) => {
        set_users([...users, user])
    }

    const deleteUser = (id) => {
        deleteUserById(id)
        set_watcher(watcher + 1)
    }

    const renderedUsers = users && users.map((user, index) => {
        return(
            <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name} </td>
                <td>{user.lastName}</td>
                <td>{user.participation}</td>
            </tr>
        )
    })

    return(
        <div>
            <CompHeader 
                addNewUser={addNewUser}
            />

            <StyledPageHome>
                <div>
                    DATA
                </div>

                <div>
                    "texto apresentativo que no Case ta só um Lorem Ipsulom"
                </div>

                <div className="users-dates">
                    <div className="users-table">
                        <StyledTable>
                            <tr>
                                <th></th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Participation</th>
                            </tr>
                            {renderedUsers}
                        </StyledTable>
                    </div>

                    <div className="users-graphic">
                        <div>
                            <CompChart 
                                users={users}
                            />
                        </div>
                    </div>
                </div>

            </StyledPageHome>
        </div>
    )
}