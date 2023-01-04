import { useState } from 'react';
import { AuthLayout, Login, Sign } from '../components';

export const LOGIN = '로그인';
export const SIGN = '회원가입';

export function AuthPage() {
  const [authMethod, setAuthMethod] = useState(LOGIN);

  return (
    <AuthLayout>
      {authMethod === LOGIN ? (
        <Login setAuthMethod={setAuthMethod} />
      ) : (
        <Sign setAuthMethod={setAuthMethod} />
      )}
    </AuthLayout>
  );
}
