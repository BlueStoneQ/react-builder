/**
 * @dec listApp
 */
import React, { Component } from 'react';
import { Item } from './Item';
import style from './ListApp.less';

class ListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
  }
  render() {
    const { dataList } = this.state;
    return (
      <ul className={style.listWrap}>
        {dataList.map((v, i) => (
          <Item key={v+i}>{v}</Item>
        ))}
      </ul>
    );
  }
}

export default ListApp;