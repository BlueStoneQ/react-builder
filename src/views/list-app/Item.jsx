import styled from 'styled-components';

export const Item =  styled.li`
  width: 200px;
  height: 30px;
  &:nth-child(odd) {
    background: rgba(250, 250, 0, 0.4)
  }
  &:nth-child(even) {
    background: rgba(0, 250, 250, 0.4);
  }
  &:hover {
    background: rgba(250, 0, 0, 0.4);
  }
`;