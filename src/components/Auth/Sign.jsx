import { useEffect, useState } from 'react';
import { LOGIN, SIGN } from '../../pages/AuthPage.jsx';
import * as Styled from './Styled.jsx';

export function Sign({ setAuthMethod }) {
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });

  const [emailVaild, setEmailValid] = useState({
    isValid: false,
    validMessage: '',
  });

  const [passwordVaild, setPasswordValid] = useState({
    isValid: false,
    validMessage: '',
  });

  const [isDisable, setIsDisable] = useState(true);

  const onHandlerChangeEmail = event => {
    const { value } = event.target;

    /* 유효성 검사 */
    const reg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    setEmailValid({
      isValid: reg.test(value) ? true : false,
      validMessage: reg.test(value)
        ? '올바른 형식입니다!'
        : '@ 또는 .이 들어간 이메일 형식이어야 합니다!',
    });

    setLoginState({
      ...loginState,
      email: value,
    });
  };

  const onHandlerChangePassword = event => {
    const { value } = event.target;

    /* 유효성 검사 */
    setPasswordValid({
      isValid: value.length >= 8 ? true : false,
      validMessage:
        value.length >= 8 ? '올바른 형식입니다!' : '8자리 이상 입력해주세요!',
    });

    setLoginState({
      ...loginState,
      password: value,
    });
  };

  useEffect(() => {
    if (emailVaild.isValid === true && passwordVaild.isValid === true)
      setIsDisable(false);
    else setIsDisable(true);
  }, [emailVaild.isValid, passwordVaild.isValid]);

  return (
    <Styled.Form>
      <Styled.Title>Sign</Styled.Title>
      <Styled.AuthInput
        type="text"
        placeholder="이메일 형식의 아이디를 입력해주세요."
        value={loginState.email}
        onChange={onHandlerChangeEmail}
      />
      <Styled.EmailValidText isValid={emailVaild.isValid}>
        {emailVaild.validMessage}
      </Styled.EmailValidText>
      <Styled.AuthInput
        type="password"
        placeholder="8자리 이상의 비밀번호를 입력해주세요."
        value={loginState.password}
        onChange={onHandlerChangePassword}
      />
      <Styled.PasswordValidText isValid={passwordVaild.isValid}>
        {passwordVaild.validMessage}
      </Styled.PasswordValidText>
      <Styled.SubmitInput type="submit" value={SIGN} disabled={isDisable} />
      <Styled.CaptionText onClick={() => setAuthMethod(LOGIN)}>
        이미 회원이신가요?
      </Styled.CaptionText>
    </Styled.Form>
  );
}
