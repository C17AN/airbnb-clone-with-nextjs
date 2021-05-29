import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  closePortal: () => void;
}

const ModalPortal: React.FC<IProps> = ({ children, closePortal }) => {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.querySelector("#root-modal");
      ref.current = dom;
    }
  }, []);

  if (ref.current && mounted) {
    return createPortal(
      <Container>
        <div className="modal-background" onClick={closePortal} />
        {children}
      </Container>,
      // useEffect에서 #root-modal을 찾은 후에, 자식 요소로 현재 컴포넌트(모달)를 추가한다.
      ref.current
    );
  }
  return null;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  .modal-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }
`;

export default ModalPortal;
