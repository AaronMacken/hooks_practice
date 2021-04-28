import './HookPractice.css';

import React, { useReducer, useState, useEffect } from 'react';

import { Container as Grid, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// TODO - modify post data via delete

// TODO - Set up SCSS
// TODO - Set up Flexbox

// TODO - Use state to conditionally style read or unread posts

// TODO - Style Post Card - WIP
// TODO - set up lint in this project

// TODO - make component for postCard

// Since we're working with object data, useReducer would be a better choice
const reducer = (state, action) => {
    switch(action.type) {
        case 'TRANSFORM':
            return state.map(post => (
                { ...post, read: false }
            ));

        case 'READ_POST':
            const newPosts = state.map(post => {
                if (post.postId == action.payload) {
                    return { ...post, read: true };
                }

                return post;
            });

            return newPosts;

        case 'DELETE_POST':
            return state;

        default:
            return state;
    }
}

const renderMessage = unreadMessages => {
    if (unreadMessages > 0) {
        return <h1>You have unread messages!!!</h1>
    }
};

// TODO: need to implement useMemo - FUNCTIONAL & CLASS
const getUnreadMessages = posts => {
    let numUnread = 0;
    posts.forEach(post => {
        if (!post.read) {
            numUnread ++;
        }
    });

    return numUnread;
}

function HookPractice(props) {
    const [posts, dispatch] = useReducer(reducer, props.posts);

    useEffect(() => {
        dispatch({type: 'TRANSFORM'});
    }, []);

    useEffect(() => {
        const numUnread = getUnreadMessages(posts);

        document.title = `You have ${numUnread} posts!`
    }, [posts]);

    const renderPosts = posts.map(post => {
        return (
            <Col xs={12} sm={6} lg={4} key={post.postId}>
                <div className="postCard">
                    {post.post}
                    - {post.author}
                    <button onClick={() => dispatch({type: 'READ_POST', payload: post.postId})}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </Col>
        );
    });

    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    { renderMessage(getUnreadMessages(posts)) }
                </Col>
                { renderPosts }
            </Row>
        </Grid>
    );
}

export default HookPractice