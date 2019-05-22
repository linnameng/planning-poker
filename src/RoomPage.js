import List from "./CardList";
import React from 'react';
import Header from './Header';

const RoomPage = () =>
    <>
    <Header title="Room"/>
    <List listItems={stories}/>
    </>;

const stories = [
    {
        title: 'Story A',
        description: 'some description for story A',
        priority: 'High'
    },
    {
        title: 'Story B',
        description: 'some description for story B',
        priority: 'High'
    },
    {
        title: 'Story C',
        description: 'some description for story C',
        priority: 'Medium'
    },
    {
        title: 'Story D',
        description: 'some description for story D',
        priority: 'Low'
    },
]

export default RoomPage;