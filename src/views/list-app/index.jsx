/**
 * @dec listApp
 */
import React, { Component } from 'react';
import { Item } from './Item';
import { axios } from 'utils';
import style from './ListApp.less';

class ListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
  }
  componentDidMount() {
    // 请求下数据
    axios.get('/api/test').then((res) => {
      this.setState({
        dataList: res.data
      });
    });
  }

  render() {
    const { dataList } = this.state;
    return (
      <ul className={style.listWrap}>
        {dataList.map((v, i) => (
          <Item key={v.title+i}>{v.title}</Item>
        ))}
      </ul>
    );
  }
}

export default ListApp;