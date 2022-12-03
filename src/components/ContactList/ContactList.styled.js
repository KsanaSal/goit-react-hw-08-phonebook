import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 40px;
`;

export const ListItem = styled.li`
  font-size: 24px;
`;
export const Button = styled.button`
  border: 2px solid #cb52fb;
  border-radius: 4px;
  background-color: #fff;
  font-size: 18px;
  padding: 8px 12px;
  margin-top: 20px;
  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.1);
  background-color: rgba(58, 255, 233, 0.5);

  &:hover {
    color: #3affe9;
    background-color: #cb52fb;
  }
`;
export const ListItemWrapper = styled.div`
  display: flex;
  width: 650px;
  justify-content: space-between;
  align-items: flex-end;
`;
