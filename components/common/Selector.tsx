import React from "react";
import palette from "../../styles/palette";
import styled from "styled-components";

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  disabledOptions?: string[];
  value?: string;
}

const Selector: React.FC<IProps> = ({ options = [], disabledOptions = [], ...props }) => {
  return (
    <Container>
      <select {...props}>
        {disabledOptions.map((option, index) => (
          <option key={index} value={option} disabled>
            {option}
          </option>
        ))}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 46px;
  select {
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid ${palette.gray_eb};
    padding: 0 11px;
    border-radius: 4px;
    outline: none;
    --webkit-appearance: none;
    /* background-image: url("/static/svg/selector/selector-down-arrow.svg"); */
    background-position: right 11px center;
    background-repeat: no-repeat;
    font-size: 16px;
  }

  &:focus {
    border-color: ${palette.dark_cyan};
  }
`;

export default Selector;
