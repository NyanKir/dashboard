import React, { useContext } from 'react';
import Chart from '../Chart';
import { Context } from '../../DashBoard';
import lang from '../../language';

export default function ResourcesCountGraph() {
  const {data} = useContext(Context);
  return (
    <>
      <span className="keyword_text section_title">
        {lang[data.main.lang].keyword_text}
        <br />
        <span className="keyword_name">{data.keyword}</span>
      </span>
      <div className="keyword_wrapper">
        <span className="keyword_count">{lang[data.main.lang].keyword_count}</span>
        <div className="keyword_charts">
          <div className="keyword_chart">
            <Chart count={data.mention.day_1} />
            <p className="keyword_date">24 часа</p>
            <p className="keyword_chart-score">{data.mention.day_1 ? data.mention.day_1 : '🤷'}</p>
          </div>
          <div className="keyword_chart">
            <Chart count={data.mention.day_7} />
            <p className="keyword_date keyword_7date">7 дней</p>
            <p className="keyword_chart-score">{data.mention.day_7 ? data.mention.day_7 : '🤷'}</p>
          </div>
        </div>
      </div>
    </>
  );
}
