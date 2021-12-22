import React, { useContext, useMemo } from 'react';
import { Context } from '../../DashBoard';
import lang from '../../language';

const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
function Column({ count, max, index }) {
  let progress = ((100 * count) / max.toFixed(0));

  if (progress < max && progress < 30) {
    progress += 10;
  }
  return (
    <div className="mention_wrapper">
      <span className="mention_hour">{week[index]}</span>
      <div className="mention_progress">
        <div className="mention_count" style={{ height: `${progress}%` }}><span>{count}</span></div>
      </div>
    </div>
  );
}
export default function ResourcesColumnGraph() {
  const { data } = useContext(Context);
  console.log();
  // eslint-disable-next-line max-len
  const list = useMemo(() => data.mention.days.map((count, i, arr) => <Column key={i} count={count} max={Math.max(...arr)} index={i} />), [data]);
  return (
    <>
      <span className="section_title">{lang[data.main.lang].mlastweek}</span>
      <div className="mention_chart margin-15">
        {list}
      </div>
    </>
  );
}
