import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';

export default function SingMe() {
    const [song, setSong] = useState({});

    useEffect(() => {
        setSong({});
    }, []);

    function getSong() {
        const promise = axios.get(
            'https://singmeasongsong.herokuapp.com/recommendations/random'
        );
        promise.then((response) => {
            setSong(response.data);
        });
    }

    function youtubeParser(url) {
        let regExp =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        let match = url.match(regExp);

        return match && match[7].length === 11 ? match[7] : false;
    }

    return song.youtubeLink ? (
        <>
            <iframe
                width="100%"
                height="420"
                src={
                    'https://www.youtube.com/embed/' +
                    youtubeParser(song.youtubeLink)
                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <Button onClick={getSong}>Sing Me</Button>
        </>
    ) : (
        <Button onClick={getSong}>Sing Me</Button>
    );
}

const Button = styled.button`
    color: white;
    background-color: #3e88ef;
    border-radius: 5px;
    width: 100%;
    height: 80px;
    border: none;
    font-size: 32px;
    cursor: pointer;
`;
