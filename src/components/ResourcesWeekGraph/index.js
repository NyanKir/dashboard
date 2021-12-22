import React, { useContext, useMemo } from 'react';
import { Context } from '../../DashBoard';
import getProgress from '../../utils';
import lang from '../../language';

function Row({ count, title, max}) {
  const { data } = useContext(Context);

  if (!count) {
    return null;
  }
  return (
    <div className="mention-resource_wrapper">
      <span className="mention-resource_title">{lang[data.main.lang][title]}</span>
      <div className="mention-resource_progress">
        <div className="mention-resource_progress-line" style={{width: `${getProgress(count, max)}%`}} />
      </div>
      <span className="mention-resource_count">{count}</span>
    </div>

  );
}
export default function ResourcesWeekGraph({list}) {
  const {data} = useContext(Context);

  // eslint-disable-next-line max-len
  const result = useMemo(() => list.map((k, i, arr) => <Row key={i} count={k.value} title={k.title} max={arr[0].value} />), [list]);
  return (
    <>
      <span className="section_title" id="mentionResources">{lang[data.main.lang].mresources}</span>
      <div id="mention_resource" className="mention-resource">
        {result}
      </div>
    </>
  );
}
