import React, { useContext } from 'react';
import Wrapper from '../Wrapper';
import Settings from '../Settings';
import AsideBtns from '../AsideBtns';
import { Context } from '../../DashBoard';
import lang from '../../language';

export default function Aside() {
  const {data, firstRender} = useContext(Context);

  return (
    <aside className="aside">
      <Wrapper classNames={['aside_section', 'aside_tlg']}>
        {data && (
        <>
          <p className="aside_tlg-title section_title">
            {lang[data.main.lang].get_notices}
            :
            {data.keyword}
          </p>
          <a
            href={data.main.link_hash_tg}
            className="aside_tlg-btn"
            target="_blank"
            rel="noreferrer"
          >
            Start
          </a>
          <div className="aside_tlg-foot">
            <span>{data.main.name}</span>
          </div>
        </>
        )}
      </Wrapper>
      <Wrapper classNames={['aside_section', 'aside_regions']} firstRender={firstRender}>
        {(data || !firstRender) && <Settings />}
      </Wrapper>
      <Wrapper classNames={['aside_section', 'blog']}>
        {data && <AsideBtns />}
      </Wrapper>
    </aside>
  );
}
