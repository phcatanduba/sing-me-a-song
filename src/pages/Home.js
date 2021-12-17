import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import SingMe from '../components/SingMe';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Container>
                <Buttons>
                    <SingMe />
                    <Link to="/new-song">
                        <NewSongButton>Recomende</NewSongButton>
                    </Link>
                </Buttons>
            </Container>
        </main>
    );
}

const NewSongButton = styled.button`
    color: white;
    background-color: #3e88ef;
    border-radius: 5px;
    width: 100%;
    min-height: 80px;
    border: none;
    font-size: 32px;
    cursor: pointer;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
    width: 80%;
    max-width: 480px;
    iframe {
        margin-bottom: 20px;
    }

    button {
        margin-bottom: 20px;
    }
`;

const Container = styled.div`
    margin-top: 80px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
