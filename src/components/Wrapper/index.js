import React, { useContext } from 'react';
import cn from 'classnames';
import { Context } from '../../DashBoard';

export default function Wrapper({ classNames = [], children, firstRender = true}) {
  const { loading } = useContext(Context);
  if (loading && firstRender) {
    return (
      <div className={cn('section', 'blink', ...classNames)} />
    );
  }

  return (
    <div className={cn(['section ', ...classNames])}>
      {children}
    </div>
  );
}
