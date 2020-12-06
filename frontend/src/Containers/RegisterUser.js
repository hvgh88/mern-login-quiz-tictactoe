import { Alert, Button, Flex, FormControl, Input, Spinner } from '@chakra-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import { useHistory } from 'react-router-dom';

const RegisterUser = ({location}) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ message, setMessage ] = useState(null);
	const userRegister = useSelector((state) => state.userRegister)
  	const { loading, error, userInfo } = userRegister

	  const redirect = '/dashboard'
	  useEffect(() => {
		if (userInfo) {
		  history.push(redirect)
		}
	  }, [history, userInfo, redirect])
	const handleLogin = () => {
		history.push('/login');
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
		} else {
			dispatch(register(name, email, password));
		}
	};
	return (
		<Fragment>
			<Flex align='center' justify='center' height='100vh' direction='column'>
			{message && <Alert variant='danger'>{message}</Alert>}
      		{error && <Alert variant='danger'>{error}</Alert>}
      		{loading && <Spinner
  thickness="4px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
  size="xl"
/>}
				<h3>Register Here</h3>
				<FormControl mt='20px'>
					<Input placeholder='Name' size='lg' value={name} onChange={(e) => setName(e.target.value)} />
				</FormControl>
				<FormControl mt='20px'>
					<Input
						placeholder='E-Mail Address'
						size='lg'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</FormControl>
				<FormControl mt='20px'>
					<Input
						placeholder='Password'
						size='lg'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FormControl>
				<FormControl mt='20px'>
					<Input
						placeholder='Confirm Password'
						size='lg'
						type='password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</FormControl>
				<Button mt='20px' variantColor='green' size='lg' onClick={submitHandler}>
					Register
				</Button>
				Have an Account?
				<Button size='lg' onClick={handleLogin}>
					Login
				</Button>
			</Flex>
		</Fragment>
	);
};

export default RegisterUser;
