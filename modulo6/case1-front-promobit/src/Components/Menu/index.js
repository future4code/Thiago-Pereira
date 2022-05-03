import { StyledMenu } from "./style"


export const CompMenu = () => {
    return(
        <StyledMenu>
            <div className="menu-text">
                <h1>Milhões de filmes, séries e pessoas para descobrir. Explore Já.</h1>
            </div>

            <div className="menu-setup">
                <h5>Filtre por:</h5>
            </div>

            <div className="menu-label">
                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Ação
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Aventura
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Animação
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Comédia
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Crime
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Documentário
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Drama
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Família
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Faroeste
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Fantasia
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Guerra
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        História
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Terror
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Música
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Mistério
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Romance
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Ficção Científica
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Cinema TV
                    </span>
                </label>

                <label>
                    <input type={'checkbox'}/>
                    <span className="checked-span">
                        Thriller
                    </span>
                </label>

            </div>
        </StyledMenu>
    )
}