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
          {isBtnClick && <div>관리자 페이지</div>}
          <button onClick={() => setIsBtnClick(!isBtnClick)}>{isBtnClick ? '로그아웃' : '로그인'}</button>
        </S.TextBox>
      </S.Header>

      <S.Wrapper>
        {!isBtnClick ? (
          <S.Text>
            <MenuBookIcon sx={{ fontSize: 40 }} />
            AI 기반 도서 추천 플랫폼
          </S.Text>
        ) : (
          <S.AdminWrapper>
            <S.Text>관리자 페이지</S.Text>
            <S.AdminTableDiv>
              <S.AdminTextWrapper>
                <S.Text>관리자 메뉴</S.Text>
                <S.AdminListDiv>사용자 정보 가져오기</S.AdminListDiv>
              </S.AdminTextWrapper>
              <S.TableWrapper>
                <S.Table>
                  <S.ID>아이디</S.ID>
                  <S.Name>이메일</S.Name>
                  <S.Gwonhan>권한</S.Gwonhan>
                </S.Table>
                <S.Table>
                  <S.ID>1</S.ID>
                  <S.Name>asdf</S.Name>
                  <S.Gwonhan>ROLE_USER</S.Gwonhan>
                </S.Table>
                <S.Table>
                  <S.ID>2</S.ID>
                  <S.Name>bitcocom@empas.com</S.Name>
                  <S.Gwonhan>ROLE_USER</S.Gwonhan>
                </S.Table>
                <S.Table>
                  <S.ID>3</S.ID>
                  <S.Name>s23005@gsm.hs.kr</S.Name>
                  <S.Gwonhan>ROLE_ADMIN</S.Gwonhan>
                </S.Table>
              </S.TableWrapper>
            </S.AdminTableDiv>
          </S.AdminWrapper>
        )}
      </S.Wrapper>
    </>
  );
}

export default App;
