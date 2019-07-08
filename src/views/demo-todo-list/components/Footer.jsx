/**
 * 过滤todo的按钮
 */
import React from 'react';
import FilterLink from '../containers/FilterLink';
import { SHOW_ALL, SHOW_COMPELETED, SHOW_ACTIVE } from '../constants';

const Footer = () => (
  <p>
    Show:
    {'  '}
    <FilterLink filter={SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={SHOW_ACTIVE}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter={SHOW_COMPELETED}>
      Completed      
    </FilterLink>
  </p>
);

export default Footer;