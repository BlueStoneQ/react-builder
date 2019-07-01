/**
 * @dec listApp
 */
import React, { Component } from 'react';
import { Item } from './Item';
import style from './ListApp.less';

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