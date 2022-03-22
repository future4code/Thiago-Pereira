import { StyledMenu } from "./style"



export const CompMenu = () => {
    return(
        <StyledMenu>
            <div className="menu-text">
                <h1>Milhões de filmes, séries e pessoas para descobrir. Explore Já.</h1>
            </div>

            <div className="menu-setup">
                <h5>Filtre por:</h5>

                <label>
                    <span>
                        Comédia
                    </span>
                    <input type={'checkbox'}/>
                </label>

                <label>
                    <span>
                        Comédia
                    </span>
                    <input type={'checkbox'}/>
                </label>

                <label>
                    <span>
                        Comédia
                    </span>
                    <input type={'checkbox'}/>
                </label>

                <label>
                    <span>
                        Comédia
                    </span>
                    <input type={'checkbox'}/>
                </label>

                <label>
                    <span>
                        Comédia
                    </span>
                    <input type={'checkbox'}/>
                </label>

                <label>
                    <span>
                        Comédia
                    </span>
                    <input type={'checkbox'}/>
                </label>

                <label>
                    <span>
                        Comédia
                    </span>
                    <input type={'checkbox'}/>
                </label>
            </div>
        </StyledMenu>
    )
}