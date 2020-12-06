import {
    Button,
    Flex
} from "@chakra-ui/core";
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from "./Header";


const Dashboard = () => {
    const history = useHistory();
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;
    const [ userName, setUserName ] = useState('');
    const handleGame = () => {
        history.push({pathname: '/game', state: userName});
    }
    const handleQuiz = () => {
        history.push({pathname: '/quiz', state: userName});
    }
    const emptyCheck = (value) => {
        return value && Object.keys(value).length === 0 && value.constructor === Object;
      }
    useEffect(() => {
        if (userInfo && !emptyCheck(userInfo)) {
            setUserName(userInfo.name);
        }
    }, [userInfo]);
    return (
        <Fragment>
            <Header />
            {userName && <Flex align="center" justify="center" height="100vh" direction="column">
            Welcome! {userName}
            <h3>Would like to play a game</h3>
            <Button size="lg" type="button" onClick={handleGame}>Tic Toc Toe</Button>
            <Button  size="lg" type="button" onClick={handleQuiz}>Quiz</Button>
            </Flex>}
        </Fragment>
    )
}

export default Dashboard
