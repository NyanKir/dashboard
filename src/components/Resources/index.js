import React, { useContext, useMemo, useState } from 'react';
import Switcher from '../Switcher';
import { Context } from '../../DashBoard';
import lang from '../../language';

function Row({ item }) {
  const { data } = useContext(Context);

  return (
    <>
      <tr className="mention-24_tr">
        <th className="mention-24_td">
          {item.name.substring(0, 15)}
          (...)
        </th>
        <th className="mention-24_td">{lang[data.main.lang][item.type]}</th>
        <th className="mention-24_td">{item.count}</th>
      </tr>
      <tr className="mention24_space">
        <td />
        <td />
        <td />
      </tr>
    </>
  );
}

export default function Resources() {
  const [isOneDay, setIsOneDay] = useState(false);
  const { data } = useContext(Context);

  const list = useMemo(() => data[isOneDay ? 'top1' : 'top7'].map((el, index) => <Row key={index} item={el} />), [isOneDay]);
  return (
    <>
      <span className="section_title">{lang[data.main.lang].topMention}</span>
      <div className="switcher-table">
        <span className={`swithcer-title ${(!isOneDay && 'current')}`} data-value="top1" onClick={() => setIsOneDay(false)}>24 часа</span>
        <Switcher onChange={() => setIsOneDay((s) => !s)} checked={isOneDay} />
        <span className={`swithcer-title ${(isOneDay && 'current')}`} data-value="top7" onClick={() => setIsOneDay(true)}>7 дней</span>
      </div>
      <table className="mention-24" id="mentionSwitcher">
        <tbody>
          <tr className="mention-24_header">
            <th className="mention-24_th tableTitle">{lang[data.main.lang].t_title}</th>
            <th className="mention-24_th tableType">{lang[data.main.lang].t_type}</th>
            <th className="mention-24_th table24h">{lang[data.main.lang][!isOneDay ? 't_day' : 't_7d']}</th>
          </tr>
          <tr className="mention24_space h5">
            <td />
            <td />
            <td />
          </tr>
        </tbody>
        <tbody>
          {list}
        </tbody>
      </table>
    </>

  );
}
