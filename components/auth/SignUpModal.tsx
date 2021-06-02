import React, { useState } from "react";
import styled from "styled-components";
import CloseXIcon from "../../public/static/svg/modal/modal-close-x.svg";
import MailIcon from "../../public/static/svg/auth/mail.svg";
import PersonIcon from "../../public/static/svg/auth/person.svg";
import ClosedEyeIcon from "../../public/static/svg/auth/eye-closed.svg";
import OpenedEyeIcon from "../../public/static/svg/auth/eye-opened.svg";
import palette from "../../styles/palette";
import { dayList, monthList, yearList } from "../../lib/StaticData";
import Input from "../common/Input";
import Selector from "../common/Selector";
import Button from "../common/Button";

interface Props {}

const SignUpModal: React.FC = (props: Props) => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };

  const onChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <CloseXIcon className="modal-close-x-icon" />
      <div className="input-wrapper">
        <Input
          placeholder="이메일 주소"
          type="email"
          name="email"
          value={email}
          icon={<MailIcon />}
          onChange={onChangeEmail}
        />
      </div>
      <div className="input-wrapper">
        <Input
          type="text"
          placeholder="이름(Ex. 찬민)"
          icon={<PersonIcon />}
          value={firstname}
          onChange={onChangeFirstName}
        />
      </div>
      <div className="input-wrapper">
        <Input
          type="text"
          placeholder="성(Ex. 김)"
          onChange={onChangeLastName}
          value={lastname}
          icon={<PersonIcon />}
        />
      </div>
      <div className="input-wrapper sign-up-password-input-wrapper">
        <Input
          type={hidePassword ? "password" : "text"}
          placeholder="비밀번호 설정하기"
          icon={
            hidePassword ? (
              <ClosedEyeIcon onClick={toggleHidePassword} />
            ) : (
              <OpenedEyeIcon onClick={toggleHidePassword} />
            )
          }
          onChange={onChangePassword}
          value={password}
        />
      </div>
      <p className="sign-up-birthday-label">생일</p>
      <p className="sign-up-modal-birthday-info">
        만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른 에어비앤비 이용자들에게
        공개되지 않습니다.
      </p>
      <div className="sign-up-modal-birthday-selectors">
        <div className="sign-up-modal-birthday-month-selector">
          <Selector options={monthList} disabledOptions={["월"]} defaultValue="월" />
        </div>
        <div className="sign-up-modal-birthday-day-selector">
          <Selector options={dayList} disabledOptions={["일"]} defaultValue="일" />
        </div>
        <div className="sign-up-modal-birthday-year-selector">
          <Selector options={yearList} disabledOptions={["년"]} defaultValue="년" />
        </div>
      </div>
      <div className="sign-up-modal-submit-button-wrapper">
        <Button type="submit">가입하기</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 568px;
  padding: 32px;
  background-color: white;
  z-index: 11;
  .modal-close-x-icon {
    cursor: pointer;
    display: block;
    margin: 0 0 40px auto;
  }
  .input-wrapper {
    position: relative;
    margin-bottom: 16px;

    svg {
      position: absolute;
      right: 11px;
      top: 16px;
    }
  }
  .sign-up-password-input-wrapper {
    svg {
      cursor: pointer;
    }
  }
  .sign-up-birthday-label {
    font-size: 16px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 8px;
  }
  .sign-up-modal-birthday-info {
    margin-bottom: 16px;
    color: ${palette.charcoal};
  }

  .sign-up-modal-birthday-selectors {
    display: flex;
    margin-bottom: 24px;
    .sign-up-modal-birthday-month-selector {
      margin-right: 16px;
      flex-grow: 1;
    }
    .sign-up-modal-birthday-day-selector {
      margin-right: 16px;
      width: 25%;
    }
    .sign-up-birthday-year-selector {
      width: 33.33%;
    }
  }
  .sign-up-modal-submit-button-wrapper {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${palette.gray_eb};
  }
`;

export default SignUpModal;
