import React, { useContext, useMemo } from 'react';
import { Context } from '../../DashBoard';
import getProgress from '../../utils';
import lang from '../../language';

function Column({ count, max, hour }) {
  return (
    <div className="mention_wrapper">
      <span className="mention_hour">
        {hour}
        :00
      </span>
      <div className="mention_progress">
        <div className="mention_count" style={{ height: `${getProgress(count, max)}%` }}><span>{count || null}</span></div>
      </div>
    </div>

  );
}

export default function ResourcesHoursGraph() {
  const { data } = useContext(Context);

  // eslint-disable-next-line max-len
  const list = useMemo(() => data.mention.hours.map((count, i, arr) => <Column key={i} count={count} max={Math.max(...arr)} hour={i} />), [data]);
  return (
    <>
      <span className="section_title">{lang[data.main.lang].mhour}</span>
      <div className="mention_chart">
        {list}
      </div>
    </>
  );
}
