import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Flex,
  Input,
  FormControl,
  Alert,
  Spinner,
} from "@chakra-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../actions/userActions'

const Homepage = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = '/dashboard';
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])
  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <Fragment>
      <Flex align="center" justify="center" height="100vh" direction="column">
      {error && <Alert variant='danger'>{error}</Alert>}
      {loading && <Spinner
  thickness="4px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
  size="xl"
/>}
        <FormControl mt="20px">
          <Input placeholder="E-Mail Address" size="lg" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </FormControl>
        <FormControl mt="20px">
          <Input placeholder="Password" size="lg" type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </FormControl>
        <Button
          mt="20px"
          variantColor="green"
          size="lg"
          onClick={submitHandler}
        >
          Login
        </Button>
      </Flex>
    </Fragment>
  );
};

export default Homepage;