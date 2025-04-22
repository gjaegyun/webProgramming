import { useEffect, useState } from 'react';

import * as S from './index';

import MenuBookIcon from '@mui/icons-material/MenuBook';

function App() {
  const [isBtnClick, setIsBtnClick] = useState<boolean>(false);

  useEffect(() => {
    if (isBtnClick) {
      const fakeAccessToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
        'eyJ1c2VybmFtZSI6InMyMzAwNUBnc20uaHMuayIsImlhdCI6MTY4NzAwMDAwMH0.' +
        's3cr3tS1gn4tur3Valu3';
      localStorage.setItem('token', fakeAccessToken);
    } else {
      localStorage.removeItem('token');
    }
  }, [isBtnClick]);

  return (
    <>
      <S.GlobalStyle />
      <S.Header>
        <S.Title>AI 온라인 서점</S.Title>
        <S.TextBox>
          {isBtnClick && <div>s23005@gsm.hs.kr님</div>}
          <button onClick={() => setIsBtnClick(!isBtnClick)}>{isBtnClick ? '로그아웃' : '로그인'}</button>
        </S.TextBox>
      </S.Header>

      <S.Wrapper>
        <S.Text>
          <MenuBookIcon sx={{ fontSize: 40 }} />
          AI 기반 도서 추천 플랫폼
        </S.Text>
      </S.Wrapper>
    </>
  );
}

export default App;
