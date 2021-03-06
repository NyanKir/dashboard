import React from 'react';

export default function Chart({count}) {
  let progress;
  if (count <= 10) {
    progress = ((100 * count) / 10).toFixed(0);
  }
  if (count > 10 && count <= 100) {
    progress = ((100 * count) / 100).toFixed(0);
  }
  if (count > 100 && count <= 1000) {
    progress = ((100 * count) / 1000).toFixed(0);
  }
  if (count > 1000 && count <= 10000) {
    progress = ((100 * count) / 10000).toFixed(0);
  }
  if (count > 10000 && count <= 100000) {
    progress = ((100 * count) / 100000).toFixed(0);
  }
  if (count > 100000 && count <= 1000000) {
    progress = ((100 * count) / 1000000).toFixed(0);
  }

  return (
    <svg
      width="132"
      height="133"
      viewBox="0 0 132 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="linear1"
          x1="41.4505"
          y1="17.9652"
          x2="41.5315"
          y2="112.704"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DFFF01" />
          <stop offset="1" stopColor="#33FF01" />
        </linearGradient>
        <linearGradient
          id="linear2"
          x1="0.0673844"
          y1="0.872093"
          x2="0.0673829"
          y2="127.431"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4DFFDF" />
          <stop offset="1" stopColor="#4DA1FF" />
        </linearGradient>
        <linearGradient
          id="linear3"
          x1="32.9039"
          y1="0.87209"
          x2="33.0133"
          y2="128.945"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAFF01" />
          <stop offset="1" stopColor="#FF7D05" />
        </linearGradient>
        <linearGradient
          id="linear4"
          x1="0.0673844"
          y1="0.872093"
          x2="0.0673829"
          y2="127.431"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4DFFDF" />
          <stop offset="1" stopColor="#4DA1FF" />
        </linearGradient>
      </defs>
      <path
        d="M65.9088 6.25728C73.8045 6.25728 81.6228 7.81245 88.9175 10.834C96.2121 13.8555 102.84 18.2843 108.423 23.8673C114.006 29.4504 118.435 36.0785 121.457 43.3731C124.478 50.6678 126.033 58.4861 126.033 66.3818C126.033 74.2775 124.478 82.0958 121.457 89.3905C118.435 96.6851 114.006 103.313 108.423 108.896C102.84 114.479 96.2121 118.908 88.9175 121.93C81.6228 124.951 73.8045 126.506 65.9088 126.506C58.0132 126.506 50.1948 124.951 42.9002 121.93C35.6055 118.908 28.9775 114.479 23.3944 108.896C17.8113 103.313 13.3826 96.6851 10.361 89.3905C7.33949 82.0958 5.78432 74.2775 5.78432 66.3818C5.78432 58.4861 7.33949 50.6678 10.361 43.3731C13.3826 36.0785 17.8113 29.4504 23.3944 23.8673C28.9775 18.2843 35.6055 13.8555 42.9002 10.834C50.1948 7.81245 58.0132 6.25728 65.9088 6.25728L65.9088 6.25728Z"
        stroke="#05050F"
        strokeWidth="4.89873"
        className="animate_circle animation-duration-15 "
      />
      <path
        d="M66.1908 22.2138C71.9534 22.2138 77.6597 23.3489 82.9837 25.5542C88.3077 27.7594 93.1452 30.9918 97.22 35.0666C101.295 39.1414 104.527 43.9789 106.732 49.3029C108.938 54.6269 110.073 60.3332 110.073 66.0958C110.073 71.8585 108.938 77.5647 106.732 82.8887C104.527 88.2127 101.295 93.0503 97.22 97.1251C93.1452 101.2 88.3077 104.432 82.9837 106.638C77.6597 108.843 71.9534 109.978 66.1908 109.978C60.4281 109.978 54.7219 108.843 49.3979 106.637C44.0739 104.432 39.2363 101.2 35.1615 97.1251C31.0867 93.0503 27.8544 88.2127 25.6491 82.8887C23.4438 77.5647 22.3088 71.8585 22.3088 66.0958C22.3088 60.3332 23.4438 54.6269 25.6491 49.3029C27.8544 43.9789 31.0867 39.1414 35.1615 35.0666C39.2363 30.9917 44.0739 27.7594 49.3979 25.5541C54.7219 23.3489 60.4281 22.2138 66.1908 22.2138L66.1908 22.2138Z"
        stroke="#05050F"
        strokeWidth="4.89873"
      />
      <path
        d="M 67.092 21.41 C 100.754 21.41 121.791 58.118 104.961 87.483 C 97.15 101.11 82.714 109.506 67.092 109.506 C 33.43 109.506 12.392 72.799 29.224 43.435 C 37.034 29.806 51.47 21.41 67.092 21.41"
        stroke="url(#linear1)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={(+progress) === 0 ? '280 280' : `${275 * (progress / 100)} 280`}
        strokeDashoffset="0"
        className="circle"
      />

      <path
        d="M65.741 5.87209C75.8815 5.87209 85.8603 8.4137 94.7653 13.2646C103.67 18.1155 111.217 25.121 116.717 33.6407C122.216 42.1604 125.493 51.9227 126.247 62.0351C127.001 72.1476 125.208 82.2877 121.032 91.5287C116.857 100.77 110.432 108.817 102.345 114.934C94.2572 121.052 84.7655 125.045 74.7371 126.549C64.7087 128.052 54.4633 127.018 44.9375 123.541C35.4117 120.064 26.9093 114.255 20.2073 106.645"
        stroke="url(#linear2)"
        strokeWidth="10"
        strokeLinecap="round"
        className="animate_circle animation-duration-15"
      />
      <path
        d="M9.17426 88.4886C6.29268 81.0601 4.90245 73.1369 5.08295 65.1711C5.26346 57.2054 7.01116 49.3533 10.2263 42.063C13.4414 34.7727 18.061 28.187 23.8212 22.682C29.5815 17.1771 36.3696 12.8606 43.798 9.97897"
        stroke="url(#linear3)"
        strokeWidth="10"
        strokeLinecap="round"
        className="animate_circle animation-duration-15"
      />
      <path
        d="M92.2301 66.0958C92.2301 80.477 80.5719 92.1352 66.1908 92.1352C51.8096 92.1352 40.1514 80.477 40.1514 66.0958C40.1514 51.7147 51.8096 40.0565 66.1908 40.0565C80.5719 40.0565 92.2301 51.7147 92.2301 66.0958Z"
        fill="#05050F"
        stroke="#05050F"
      />
    </svg>
  );
}
