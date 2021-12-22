import React, { useContext, useState } from 'react';
import { Context } from '../../DashBoard';
import { MobileBtns } from '../AsideBtns';
import lang from '../../language';

function Post({
  title, link, context, timestamp, name,
}) {
  const {data} = useContext(Context);

  const textLenght = 180;
  const [isFull, setIsFull] = useState(false);
  return (
    <div className="panels_panel">
      <span className="panels_topic">
        {lang[data.main.lang].topic}
        :

        <span>
          {isFull ? title : title.slice(0, textLenght)}
        </span>
      </span>
      {title.length > textLenght ? (
        <span className={`panels_read ${isFull && 'active'}`} onClick={() => setIsFull((s) => !s)}>
          {lang[data.main.lang].read}
        </span>
      ) : null}
      <span className="panels_channel">
        Канал:
        {name}
      </span>
      <span
        className="panels_post"
      >
        <span>
          Пост:&nbsp;
          <a
            href={link}
            className="panels_link"
            target="_blank"
            rel="noreferrer"
          >
            {link}
          </a>
        </span>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
        <a />
      </span>
      <span
        className="panels_topic panels_topic-text"
      >
        Из текста:
        <span dangerouslySetInnerHTML={{
          __html: `          &quot;
          ${context.replaceAll('[…]', '').trim()}
          &quot;`,
        }}
        />
      </span>
      <span
        className="panels_date"
      >
        { new Date(timestamp * 1000).toLocaleString('de-CH').split(',')}
      </span>
    </div>
  );
}

export default function Posts() {
  const {data, currentPost} = useContext(Context);

  const list = data.list[currentPost].map(({
    title, context, name, link, timestamp,
  }) => <Post title={title} context={context} link={link} name={name} timestamp={timestamp} />);
  return (
    <>
      <MobileBtns />
      <span className="section_title">
        {lang[data.main.lang].notice}
        <br />
        <span
          className="section_keyword"
          id="keyword2"
        >
          {data.keyword}
        </span>
      </span>

      <div>
        {list}
      </div>
    </>
  );
}
