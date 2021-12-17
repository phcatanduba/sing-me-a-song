import styled from 'styled-components';
import axios from 'axios';

import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewSong() {
    const [song, setSong] = useState({ name: '', youtubeLink: '' });
    const navigate = useNavigate();

    function addSong(event) {
        event.preventDefault();
        console.log(song);
        const promise = axios.post(
            'https://singmeasongsong.herokuapp.com/recommendations',
            song
        );

        promise.then(() => {
            navigate('/');
        });
    }

    return (
        <main>
            <Navbar />
            <Container>
                <Form onSubmit={addSong}>
                    <Title>Recomende um som</Title>
                    <input
                        placeholder="Nome do som"
                        value={song.name}
                        onChange={(e) => {
                            setSong({
                                name: e.target.value,
                                link: song.youtubeLink,
                            });
                        }}
                    />
                    <input
                        placeholder="Link do youtube do som"
                        value={song.link}
                        onChange={(e) => {
                            setSong({
                                name: song.name,
                                youtubeLink: e.target.value,
                            });
                        }}
                    />
                    <button type="submit">Recomendar</button>
                </Form>
            </Container>
        </main>
    );
}

const Title = styled.h1`
    color: white;
    font-size: 32px;
`;

const Form = styled.form`
    width: 600px;
    height: 300px;
    margin-top: 80px;
    background-color: #3e88ef;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;

    input {
        height: 30px;
        color: black;
        font-weight: 400;
        padding-left: 5px;
    }

    button {
        height: 30px;
        color: black;
        font-weight: 400;
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
