import React from 'react';
import { Styled } from '../styles/privacy';

const Privacy = () => {
  return (
    <Styled.Container>
      <Styled.PrivacyTitle>개인정보처리방침</Styled.PrivacyTitle>
      <Styled.Paragraph>
        (주)수일개발(이하 '회사'라 합니다)은 AnyDANAPlus 서비스 이용자의
        개인정보를 매우 중요시하며, 「정보통신망 이용촉진 및 정보보호 등에 관한
        법률」, 「개인정보 보호법」 등 관계법령을 준수하고 있습니다.
      </Styled.Paragraph>
      <Styled.Paragraph>
        회사는 본 개인정보 처리방침을 통하여 이용자께서 제공하시는 개인정보가
        어떠한 용도 및 방식으로 이용되고 있는지, 회사가 개인정보보호를 위해
        어떠한 조치를 취하고 있는지 알려 드립니다.
      </Styled.Paragraph>
      <Styled.Paragraph>
        본 방침을 개정하는 경우 서비스 공지사항(또는 서면·이메일 등의 방법으로
        개별공지)을 통하여 이용자들에게 공지하겠습니다.
      </Styled.Paragraph>
      <Styled.SectionTitle>
        1. 수집하는 개인정보의 항목 및 수집 방법
      </Styled.SectionTitle>
      <Styled.Paragraph>
        회사는 이용자가 AnyDANAPlus 서비스를 이용하기 위해 로그인 할 때 아래와
        같이 이용자의 개인정보를 수집하고 있습니다.
      </Styled.Paragraph>
      <Styled.List>
        <Styled.ListItem>
          필수 항목 : 이메일 주소(ID), 비밀번호, 이름, 성별, 생년월일, 연락처,
          민감정보(인슐린 펌프 사용이력 (식사주입, 기초주입, 혈당, 탄수화물 값),
          혈당측정기 사용이력, CGM 이력)
        </Styled.ListItem>
        <Styled.ListItem>
          회사는 이용자가 서비스 회원가입 시 상기 개인정보의 수집 및 이용에
          동의함으로써 이를 수집합니다. 이용자는 위 정보 수집 및 이용에 동의하지
          않을 수 있으나, AnyDANAPlus 서비스 이용에 필수적인 필수 항목 정보 및
          민감정보(필수)의 수집 및 이용에 동의하지 않을 경우 AnyDANAPlus 서비스
          이용이 제한될 수 있습니다. (이용자가 AnyDANAPlus 계정에 로그인하지
          않는 한 웹 서버에 사용자 데이터 (인슐린 펌프 이력, 혈당 측정 값)를
          저장하지 않습니다.)
        </Styled.ListItem>
      </Styled.List>
      <Styled.SectionTitle>2. 개인정보 수집 및 이용 목적</Styled.SectionTitle>
      <Styled.SubSectionTitle>
        본인 식별 및 회원 관리를 위해 사용합니다.
      </Styled.SubSectionTitle>
      <Styled.List>
        <Styled.ListItem>회원 가입, 서비스 사용 시 본인 식별</Styled.ListItem>
        <Styled.ListItem>
          고객 상담, 민원 내용 처리, 고지 사항 전달
        </Styled.ListItem>
        <Styled.ListItem>회원관리(비인가 사용 방지)</Styled.ListItem>
      </Styled.List>
      <Styled.SubSectionTitle>
        AnyDANAPlus 서비스 제공을 위해 사용합니다.
      </Styled.SubSectionTitle>
      <Styled.List>
        <Styled.ListItem>
          이용자의 건강 관리 서비스 제공(인슐린 펌프의 주입이력 및 혈당측정기의
          혈당이력을 AnyDANAPlus 모바일 앱 및 웹 홈페이지에서 확인 가능)
        </Styled.ListItem>
        <Styled.ListItem>
          이용자 본인이 등록한 이용자(보호자 및 의료진)와의 데이터 공유
        </Styled.ListItem>
      </Styled.List>
      <Styled.SubSectionTitle>
        서비스 개선을 위해 사용합니다.
      </Styled.SubSectionTitle>
      <Styled.List>
        <Styled.ListItem>
          기존 서비스 개선 및 신규 서비스 개발을 위한 서비스 이용 분석 및 계량화
        </Styled.ListItem>
      </Styled.List>
      <Styled.SectionTitle>3. 개인정보의 보유 및 이용 기간</Styled.SectionTitle>
      <Styled.Paragraph>
        원칙적으로는, 회사는 이용자로부터 수집한 민감정보의 이용목적이 달성되면
        이를 지체 없이 파기합니다. 다만, 「전자상거래 등에서의 소비자 보호에
        관한 법률」 등 관련 법률에서 민감정보를 보존할 필요가 있다고 정하는
        경우, 회사는 그 법령에서 정하는 기간 동안 이용자의 민감정보를 보유할 수
        있습니다.
      </Styled.Paragraph>
      <Styled.SectionTitle>
        4. 개인정보의 파기 절차 및 파기 방법
      </Styled.SectionTitle>
      <Styled.SubSectionTitle>파기 절차</Styled.SubSectionTitle>
      <Styled.Paragraph>
        이용자의 개인정보는 목적이 달성된 후 별도의 전자적 파일 형태로
        옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한
        정보보호 사유에 따라(보유 및 이용 기간 참조) 일정 기간 저장된 후
        파기합니다. 별도의 전자적 파일 형태로 옮겨진 개인정보는 법률에 의한
        경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.
      </Styled.Paragraph>
      <Styled.SubSectionTitle>파기 방법</Styled.SubSectionTitle>
      <Styled.Paragraph>
        전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을
        사용하여 삭제합니다. 서면양식에 기재하거나, 종이에 출력된 개인정보는
        분쇄기로 분쇄 또는 소각하여 파기합니다.
      </Styled.Paragraph>
      <Styled.SectionTitle>5. 개인 정보 열람 및 삭제 처리</Styled.SectionTitle>
      <Styled.Paragraph>
        이용자는 언제든지 제공된 개인 정보를 열람, 삭제를 요청하실 수 있습니다.
      </Styled.Paragraph>
      <Styled.Paragraph>
        회원탈퇴를 원할 때는 AnyDANAPlus의 설정 메뉴를 선택한 다음 “회원탈퇴”를
        통해 탈퇴할 수 있습니다. 이용자가 비밀번호 변경을 원하시면 설정 메뉴를
        선택한 다음 “비밀번호 변경하기”를 통해 변경할 수 있습니다. 이용자의 ID와
        비밀번호는 원칙적으로 이용자 본인만 사용하도록 되어 있습니다. 회사의
        고의 또는 과실이 없는 경우에 이용자의 ID와 비밀번호 도용 또는 기타
        타인의 사용으로 의해 발생된 문제에 대하여 회사가 책임지지 않습니다.
        어떠한 경우에도 비밀번호는 타인에게 알려 주지 마시고 로그온(log-on)
        상태에서는 주위의 다른 사람에게 개인 정보가 유출되지 않도록 특별한
        주의를 기울여 주시기 바랍니다. 공공장소나 타인이 사용할 수 있는 컴퓨터를
        사용하실 경우에는 서비스 이용이 끝나시면 반드시 로그아웃 (Logout)을 해
        주시기 바랍니다.
      </Styled.Paragraph>
      <Styled.SectionTitle>6. 쿠키(Cookie) 운영</Styled.SectionTitle>
      <Styled.Paragraph>
        쿠키는 AnyDANAPlus 서비스 운영하는데 이용되는 서버가 사용자의 브라우저에
        보내는 조그마한 데이터로 이용자가 AnyDANAPlus에 log-in한 상태에서
        이용자의 인증을 위해 사용되고 있습니다. 그 쿠키는 회원님의 PC에 저장되지
        않으며 log-out시 자동 삭제됩니다.
      </Styled.Paragraph>
      <Styled.Paragraph>
        단, 회원님의 선택에 의해 쿠키의 저장을 거부하실 수 있으나, 이 경우 여러
        가지 불편이 야기될 수 있습니다.
      </Styled.Paragraph>
      <Styled.SectionTitle>7. 기술적, 관리적 조치</Styled.SectionTitle>
      <Styled.Paragraph>
        회사는 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출,
        변조 또는 훼손되지 않도록 안전성 확보를 위하여 최선의 방법을 취하고
        있습니다.
      </Styled.Paragraph>
      <Styled.List>
        <Styled.ListItem>접근통제장치 운영</Styled.ListItem>
        <Styled.ListItem>
          접속기록의 위조, 변조 방지를 위한 조치
        </Styled.ListItem>
        <Styled.ListItem>개인정보의 암호화</Styled.ListItem>
      </Styled.List>
      <Styled.Paragraph>
        회사는 개인 정보 취급 직원을 최소화는 물론 각 직원 별 회원정보 접근
        권한을 달리하고, 수시보안교육을 통해 본 정책의 준수를 강조하고 있습니다.
      </Styled.Paragraph>
      <Styled.SectionTitle>8. 개인정보 보호 문의처</Styled.SectionTitle>
      <Styled.Paragraph>
        개인 정보 관련하여 의견이 있으신 분은 고객센터 (전화: 02-3463-0041 또는
        이메일: sooil1979.dev@gmail.com)으로 연락 주시면 접수 즉시 조치하고 처리
        결과를 통보해 드리겠습니다.
      </Styled.Paragraph>
    </Styled.Container>
  );
};

export default Privacy;
