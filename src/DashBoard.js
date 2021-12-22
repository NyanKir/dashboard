import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import Wrapper from './components/Wrapper';
import Header, { MobileHeader } from './components/Header';
import Resources from './components/Resources';
import ResourcesColumnGraph from './components/ResourcesColumnGraph';
import ResourcesCountGraph from './components/ResourcesCountGraph';
import ResourcesHoursGraph from './components/ResourcesHoursGraph';
import ResourcesWeekGraph from './components/ResourcesWeekGraph';
import { SettingsMobile } from './components/Settings';
import Posts from './components/Posts';
import Popup from './components/Popup';
import Loader from './components/Loader';
import Aside from './components/Aside';

export const Context = createContext({});
export default function App() {
  const [data, setData] = useState(null);
  const [firstRender, setFirstRender] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState(null);
  const [search, setSearch] = useState(() => {
    const letters = ['Bitcoin', 'Tesla', 'Илон Маск', 'Криптовалюты', 'Covid'];
    const num = Math.floor(Math.random() * 4);
    return letters[num];
  });
  const [regions, setRegions] = useState(null);
  const [sources, setSources] = useState(null);
  const list = useMemo(() => {
    if (!data?.mention) {
      return [0];
    }
    const copy = {...data.mention};
    delete copy['hours'];
    delete copy['days'];
    delete copy['day_1'];
    delete copy['day_7'];
    return Object.keys(copy).map((el) => ({
      value: copy[el],
      title: el,
    })).sort((a, b) => b.value - a.value);
  }, [data]);

  const regionsParams = useMemo(() => {
    if (regions) {
      return Object.keys(regions).filter((k) => regions[k])[0];
    }
    return 'all';
  }, [regions]);

  const sourcesParams = useMemo(() => {
    if (sources) {
      return `&resource=${Object.keys(sources)
        .filter((k) => sources[k])
        .join('&resource=')}`;
    }

    return '&resource=facebook&resource=tg_ch&resource=tg_gr&resource=twitter&resource=media';
  }, [sources]);

  // eslint-disable-next-line no-shadow
  const fetching = async () => {
    const userLang = (navigator.language || navigator.userLanguage).split('-')[0];
    setLoading(true);

    try {
      const res = await fetch(`https://mediascan.cc/dashboard/keyword/json?q=${search}&lang=${userLang}&country=${regionsParams}${sourcesParams}`);
      const fetchedData = await res.json();
      setCurrentPost(Object.keys(fetchedData.list)[0]);
      setData(fetchedData);
    } catch (e) {
      alert('Something goes wrong! Please try later.');
      setLoading(false);
    }
    setLoading(false);
    if (!regions && !sources) {
      setFirstRender(false);
    }
  };

  useEffect(() => {
    fetching();
  }, [search]);

  useEffect(() => {
    fetching();
  }, [regions, sources]);

  const handleSearch = (value) => {
    const txt = value.trim();
    if (txt) {
      setFirstRender(true);
      setSearch(txt);
    }
  };
  if (loading) {
    return (
      <Context.Provider value={{firstRender, loading, data }}>
        <Loader />
      </Context.Provider>
    );
  }

  return (
    <Context.Provider value={{
      data, loading, currentPost, setCurrentPost, handleSearch, setSources, setRegions, firstRender,
    }}
    >
      <SettingsMobile />
      <Popup />

      <Header />
      <div className="main">
        <Aside />
        <main className="grid">
          <Wrapper classNames={['mobile-search']}>
            <MobileHeader />
          </Wrapper>
          <Wrapper classNames={['keyword']}>
            <ResourcesCountGraph />
          </Wrapper>

          {
            (!data['top1'] || !data['top7'])
              ? null
              : (
                <Wrapper classNames={['resource-switcher']}>
                  <Resources />
                </Wrapper>
              )
          }

          {
            data.mention.days.every((el) => el === 0)
              ? null
              : (
                <Wrapper classNames={['mention', 'col-2']}>
                  <ResourcesColumnGraph />
                </Wrapper>
              )
          }

          {
            list.every((el) => el.value === 0) ? null
              : (
                <Wrapper classNames={['resource2']}>
                  <ResourcesWeekGraph list={list} />
                </Wrapper>
              )

          }

          {
            data.mention.hours.every((el) => el === 0)
              ? null
              : (
                <Wrapper classNames={['mention']}>
                  <ResourcesHoursGraph />
                </Wrapper>
              )
          }

          {
            data.list[currentPost]
              ? (
                <Wrapper classNames={['bg-white', 'blog']}>
                  <Posts />
                </Wrapper>
              )
              : null
          }

        </main>
      </div>

    </Context.Provider>
  );
}
