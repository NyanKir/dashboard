import React, { useContext } from 'react';

import Wrapper from '../Wrapper';
import Header from '../Header';
import { Context } from '../../DashBoard';
import Aside from '../Aside';
import { SettingsMobile } from '../Settings';

export default function Loader() {
  const {data} = useContext(Context);

  return (
    <>
      {data && <SettingsMobile />}

      <Header />
      <div className="main">
        <Aside />
        <main className="grid">
          <Wrapper classNames={['mobile-search']} />
          <Wrapper classNames={['keyword']} />
          <Wrapper classNames={['resource-switcher']} />
          <Wrapper classNames={['mention', 'col-2']} />
          <Wrapper classNames={['resource2']} />
          <Wrapper classNames={['mention', 'ment-2']} />
        </main>
      </div>
    </>

  );
}
