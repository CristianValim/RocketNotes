import { IoLogOutOutline } from 'react-icons/io5';
import { Container, Profile, Logout } from './styles.js';

export function Header() {
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/CristianValim.png"
                alt="Foto do usuário"/>

                <div>
                    <span>Bem-vindo</span>
                    <strong>Cristian Valim</strong>
                </div>
            </Profile>

            <Logout>
                <IoLogOutOutline /> 
            </Logout>
        </Container>
        )
}