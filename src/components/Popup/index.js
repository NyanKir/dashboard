import React, { useContext } from 'react';
import { Context } from '../../DashBoard';

export default function Popup() {
  const {data} = useContext(Context);
  return (
    <div className={`mobile-popup ${data.main.authorized ? '' : 'active'}`} id="mobile-popup">
      <a href="https://t.me/media_scan_bot?start=ka_ZYQzDHmsHgP3" id="link_hash_tg" target="_blank" rel="noreferrer">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="23"
            height="23"
            rx="11.5"
            fill="white"
            stroke="#787880"
            strokeOpacity="0.2"
          />
          <path
            d="M12.4399 22.5163C17.9392 22.5163 22.3971 18.0319 22.3971 12.5001C22.3971 6.96838 17.9392 2.48401 12.4399 2.48401C6.94072 2.48401 2.48273 6.96838 2.48273 12.5001C2.48273 18.0319 6.94072 22.5163 12.4399 22.5163Z"
            fill="url(#paint0_linear_165:5)"
          />
          <path
            d="M5.97443 12.9266C7.14399 12.2837 8.44954 11.747 9.66938 11.2077C11.768 10.3243 13.8749 9.45623 16.0031 8.64805C16.4172 8.51035 17.1612 8.37571 17.2341 8.98808C17.1941 9.85491 17.0298 10.7167 16.9171 11.5784C16.631 13.4735 16.3004 15.3621 15.9779 17.251C15.8668 17.8802 15.0771 18.2059 14.5717 17.8032C13.3573 16.9846 12.1336 16.1739 10.9346 15.3362C10.5419 14.938 10.9061 14.3661 11.2568 14.0817C12.2571 13.0979 13.3178 12.2621 14.2658 11.2276C14.5215 10.6113 13.766 11.1307 13.5168 11.2898C12.1474 12.2315 10.8116 13.2307 9.36791 14.0584C8.63047 14.4635 7.77098 14.1173 7.03387 13.8913C6.37298 13.6182 5.4045 13.343 5.97436 12.9266L5.97443 12.9266Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_165:5"
              x1="9.64908"
              y1="-6.78947"
              x2="-4.07693"
              y2="15.2723"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#34B0DF" />
              <stop offset="1" stopColor="#1E88D3" />
            </linearGradient>
          </defs>
        </svg>

        <span>{data.main.name}</span>
        <button className="" type="button">Start</button>
      </a>

    </div>
  );
}
