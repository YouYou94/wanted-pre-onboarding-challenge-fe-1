import { useState } from 'react';
import { Layout, Login, Sign } from '../components';

export const LOGIN = '로그인';
export const SIGN = '회원가입';

export function AuthPage() {
  const [authMethod, setAuthMethod] = useState(LOGIN);

  return (
    <Layout>
      {authMethod === LOGIN ? (
        <Login setAuthMethod={setAuthMethod} />
      ) : (
        <Sign setAuthMethod={setAuthMethod} />
      )}
    </Layout>
  );
}
