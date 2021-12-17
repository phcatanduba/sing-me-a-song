import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Container>
            <Link to={'/'} onClick={window.location.reload}>
                <Title>Sing me a song</Title>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #3e88ef;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    font-size: 32px;
`;
