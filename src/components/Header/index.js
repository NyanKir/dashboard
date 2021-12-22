import React, { useContext, useState } from 'react';
import logo from './assets/logo.svg';
import loader from './assets/loader.svg';
import search from './assets/search.svg';
import { Context } from '../../DashBoard';

function Input() {
  const {handleSearch, loading} = useContext(Context);
  const [value, setValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(value);
    }
  };
  return (
    <div className="search">
      <p className="search_title">Dashboard</p>
      <div className="search_label">
        <div className="search_svg">
          <img src={search} alt="Search" />
        </div>

        <input type="text" className="search_input" placeholder="Ключевое слово" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} />
        <div>
          <button className="search_btn" type="submit" onClick={() => handleSearch(value)}>
            {loading ? <img src={loader} alt="Spinner" width={40} height={40} /> : <span>Scan</span>}
          </button>
        </div>
      </div>

    </div>

  );
}

export default function Header() {
  const {data} = useContext(Context);
  return (
    <header className="header section">
      <img src={logo} alt="Logo" className="my-auto" width={60} height={60} />
      <div className="header_desc">
        <span className="header_title" id="header-title">{data?.main?.name || 'Media Scan Bot'}</span>
        <p className="header_links" id="header-link">
          <a
            href={data?.main?.link_site || 'https://mediascan.cc'}
            className="header_links"
            target="_blank"
            rel="noreferrer"
          >
            {data?.main?.link_site || 'https://mediascan.cc'}
          </a>
        </p>
        <p className="header_links" id="header-tel">
          <a
            href={data?.main?.link_tg || 'https://t.me/media_scan_bot'}
            className="header_links"
            target="_blank"
            rel="noreferrer"
          >
            {data?.main?.link_tg || 'https://t.me/media_scan_bot'}
          </a>
        </p>
      </div>
      <Input />
    </header>
  );
}

export function MobileHeader() {
  return (
    <div className="search">
      <Input />
    </div>
  );
}
