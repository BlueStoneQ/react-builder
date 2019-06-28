import React, { Component } from 'react';
import style from './ListApp.less';
import styled from 'styled-components';

const Item =  styled.li`
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

class ListApp extends Component {
  render () {
    return (
      <ul className={style.listWrap}>
        {[1, 2, 3, 4, 5].map((v, i) => (
          <Item key={v+i}>{v}</Item>
        ))}
      </ul>
    );
  }
}

export default ListApp;