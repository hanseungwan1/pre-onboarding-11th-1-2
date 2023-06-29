import React, { useEffect, useState, ChangeEvent } from 'react';
import { checkSignin } from './signin.hook';
import { checkEmail, checkPassword } from './signin.hook';
// import { useNavigate } from 'react-router-dom';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Center,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

const SignIn = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disable, setDisable] = useState<boolean>(true);

  const EmailHanlder = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const PasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const loginHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    checkSignin(email, password);
  };
  return (
    <Center h="90vh">
      <Box
        w="30vw"
        h="50vh"
        borderWidth="1px"
        borderRadius="lg"
        position="relative"
        padding="20px"
      >
        <Text fontSize="3xl" marginBottom="20px" width="100%">
          SIGN IN
        </Text>
        <Stack spacing={6}>
          <div>
            <Input
              variant="outline"
              placeholder="이메일"
              data-testid="email-input"
              onChange={EmailHanlder}
              value={email}
            />
            {checkEmail(email) === 'fail' && (
              <Alert status="error" h="30px" marginTop="5px">
                <AlertIcon w="15px" />
                <AlertDescription fontSize="10px">
                  @를 포함해주세요.
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div>
            <Input
              variant="outline"
              placeholder="비밀번호"
              data-testid="password-input"
              onChange={PasswordHandler}
              value={password}
              type="password"
            />
            {checkPassword(password) === 'fail' && (
              <Alert status="error" h="30px" marginTop="5px">
                <AlertIcon w="15px" />
                <AlertDescription fontSize="10px">
                  8자 이상 입력해주세요.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </Stack>

        <Button
          colorScheme="teal"
          size="md"
          w="87%"
          position="absolute"
          bottom="0"
          left="20px"
          marginBottom="20px"
          data-testid="signup-button"
          isDisabled={
            checkEmail(email) === 'success' &&
            checkPassword(password) === 'success'
              ? false
              : true
          }
          onClick={loginHandler}
        >
          로그인
        </Button>
      </Box>
    </Center>
  );
};

export default SignIn;
