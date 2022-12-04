import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 95%;
  top: 0;
  z-index: 1;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-radius: 4px;
  box-shadow: 5px 7px 9px rgba(86, 33, 110, 0.3);
  background: linear-gradient(
    90deg,
    rgb(203, 82, 251) 0%,
    rgb(58, 255, 233) 97%
  );
`;
