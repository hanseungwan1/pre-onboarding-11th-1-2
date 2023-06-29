import useAuthRedirection from '../../hooks/useAuthRedirection';
import Path from '../../utils/constants/path';
import React, { useState } from 'react';
import { useRouter } from '../../hooks/useRouter';
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
import { signup } from '../../apis/auth';
import { checkEmail, checkPassword } from '../../utils/helper/validationCheck';

const Signup = () => {
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

  const postSignUp = () => {
    signup(email, password).then(res => {
      if (res.status === 201) {
        alert('회원가입 성공');
        replaceTo(Path.SIGNIN);
      } else {
        alert('회원가입 실패');
      }
    });
  };

  return (
    <Center h="90vh">
      <Box
        w="30vw"
        h="35vh"
        borderWidth="1px"
        borderRadius="lg"
        position="relative"
        padding="20px"
      >
        <Text fontSize="3xl" marginBottom="20px" width="100%">
          SIGN UP
        </Text>
        <Stack spacing={6}>
          <div>
            <Input
              variant="outline"
              placeholder="이메일"
              data-testid="email-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              value={email}
            />

            {!checkEmail(email) && email.length > 0 ? (
              <Alert status="error" h="30px" marginTop="5px">
                <AlertIcon w="15px" />
                <AlertDescription fontSize="10px">
                  @를 포함해주세요.
                </AlertDescription>
              </Alert>
            ) : null}
          </div>

          <div>
            <Input
              variant="outline"
              placeholder="비밀번호"
              data-testid="password-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              value={password}
              type="password"
            />
            {!checkPassword(password) && password.length > 0 ? (
              <Alert status="error" h="30px" marginTop="5px">
                <AlertIcon w="15px" />
                <AlertDescription fontSize="10px">
                  8자 이상 입력해주세요.
                </AlertDescription>
              </Alert>
            ) : null}
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
          onClick={postSignUp}
        >
          회원가입
        </Button>
      </Box>
    </Center>
  );
};

export default Signup;
