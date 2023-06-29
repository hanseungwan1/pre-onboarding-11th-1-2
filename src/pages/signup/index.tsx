import React, { useEffect, useState } from 'react';
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

const Signup = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [passEmail, setPassEmail] = useState<boolean>(false);
  const [passPassword, setPassPassword] = useState<boolean>(false);

  useEffect(() => {
    if (passEmail && passPassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [passEmail, passPassword]);

  const postSignUp = () => {
    // signup(email, password).then(async (res ) => {
    //     if (res.status === 201) {
    //       return navigate("/signin");
    //     } else {
    //       alert(res.data.message);
    //     }
    //   });
  };

  const onCheckEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes('@')) {
      setPassEmail(true);
    } else {
      setPassEmail(false);
    }
    setEmail(e.target.value);
  };

  const onCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 8) {
      setPassPassword(true);
    } else {
      setPassPassword(false);
    }
    setPassword(e.target.value);
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
              onChange={onCheckEmail}
              value={email}
            />

            {!passEmail && email.length > 0 && (
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
              onChange={onCheckPassword}
              value={password}
              type="password"
            />
            {!passPassword && password.length > 0 && (
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
          isDisabled={isDisabled}
          onClick={postSignUp}
        >
          회원가입
        </Button>
      </Box>
    </Center>
  );
};

export default Signup;
