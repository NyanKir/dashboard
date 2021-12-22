import React, { useContext, useMemo, useRef } from 'react';
import { Context } from '../../DashBoard';
import lang from '../../language';

export default function AsideBtns() {
  const {data, currentPost, setCurrentPost} = useContext(Context);
  const btns = useMemo(() => Object.keys(data.list).map((item, i) => (
    <button className={`aside_blog-btn ${currentPost === item ? 'active' : ''}`} key={i} type="button" onClick={() => setCurrentPost(item)}>
      {lang[data.main.lang][item]}
      (
      {Object.keys(data.list[item]).length}
      )
    </button>
  )), [currentPost]);
  return (
    <>
      <p className="aside_title section_title">Источники упоминаний</p>
      {btns}
    </>
  );
}

export function MobileBtns() {
  const {data, currentPost, setCurrentPost} = useContext(Context);
  const content = useRef(null);
  const handler = (item) => {
    // eslint-disable-next-line max-len
    window.scrollTo(content.current.parentElement.offsetLeft, content.current.parentElement.offsetTop);
    setCurrentPost(item);
  };
  const btns = useMemo(() => Object.keys(data.list).map((item, i) => (
    <span className={`mobile-aside_btn-event ${currentPost === item ? 'active' : ''}`} key={i} onClick={() => handler(item)}>
      {lang[data.main.lang][item]}
    </span>
  )), [currentPost]);
  return (
    <div className="blog_mobile-panel scroll" ref={content}>
      {btns}
    </div>
  );
}
