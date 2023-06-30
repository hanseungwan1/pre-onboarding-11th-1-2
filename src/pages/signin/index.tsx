import React, { useState, ChangeEvent } from 'react';
import useAuthRedirection from '../../hooks/useAuthRedirection';
import Path from '../../utils/constants/path';
import { checkSignin } from './signin.hook';
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

import { checkEmail, checkPassword } from '../../utils/helper/validationCheck';
import { useRouter } from '../../hooks/useRouter';

const Signin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { replaceTo } = useRouter();

  const isAuth = useAuthRedirection({
    to: Path.TODO,
    isRedirectionIfAuth: true,
  });

  if (isAuth) {
    return <></>;
  }

  const EmailHanlder = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const PasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const response = await checkSignin(email, password);
    if (response) replaceTo(Path.TODO);
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
            {!checkEmail(email) && email.length > 0 && (
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
            {!checkPassword(password) && password.length > 0 && (
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
            checkEmail(email) && checkPassword(password) ? false : true
          }
          onClick={loginHandler}
        >
          로그인
        </Button>
      </Box>
    </Center>
  );
};

export default Signin;
