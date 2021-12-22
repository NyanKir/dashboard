import React, { useContext, useMemo, useState } from 'react';
import { Context } from '../../DashBoard';
import lang from '../../language';

let timeout;

function CheckboxesGroups({
  title, data, keys, regions = false, sources = false,
}) {
  const { data: fetchedData, setSources, setRegions} = useContext(Context);
  const [checkboxes, setCheckboxes] = useState(data);
  const handleCheckbox = (e, key) => {
    clearTimeout(timeout);

    const copyCheck = { ...checkboxes };
    const keyses = Object.keys(copyCheck);

    copyCheck[key] = e.target.checked;
    // eslint-disable-next-line no-param-reassign
    data[key] = e.target.checked;
    const isAllOff = keyses.every((k) => copyCheck[k] === false);
    if (isAllOff) {
      keyses.forEach((k) => {
        if (k !== key) {
          copyCheck[k] = true;
          // eslint-disable-next-line no-param-reassign
          data[k] = true;
        }
      });
    }

    if (regions) {
      timeout = setTimeout(() => {
        setRegions(copyCheck);
      }, 500);
    }
    if (sources) {
      timeout = setTimeout(() => {
        setSources(copyCheck);
      }, 500);
    }

    setCheckboxes(copyCheck);
  };

  const list = useMemo(() => keys.map((key, i) => (
    <div className="group_switch" key={i}>
      <label className=" switch">
        <input className="switchevent" type="checkbox" checked={checkboxes[key]} onChange={(e) => handleCheckbox(e, key)} />
        <span className="slider round" />
      </label>
      <p>{lang[fetchedData.main.lang][key]}</p>
    </div>
  )), [checkboxes]);
  return (
    <div className="group">
      <p className="group_title">{title}</p>
      {list}
    </div>

  );
}

export default function Settings() {
  const {data: {settings}} = useContext(Context);
  return (
    <div className="group">
      <CheckboxesGroups title="Страны" data={settings.regions} keys={settings.dict_regions} regions />
      <CheckboxesGroups title="Ресурсы" data={settings.sources} keys={settings.dict_sources} sources />
    </div>
  );
}

export function SettingsMobile() {
  const {data: {settings}} = useContext(Context);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`mobile-aside ${isActive ? 'active' : ''}`} id="mobile-filter-btns">
      <CheckboxesGroups title="Страны" data={settings.regions} keys={settings.dict_regions} regions />
      <CheckboxesGroups title="Ресурсы" data={settings.sources} keys={settings.dict_sources} sources />
      <div className="mobile-aside_btn" onClick={() => setIsActive((s) => !s)}>
        <span>ф и л ь т р</span>
      </div>
    </div>
  );
}
