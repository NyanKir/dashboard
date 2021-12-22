import React from 'react';

export default function Switcher({ onChange, checked = false }) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="switch">
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className="slider round" />
    </label>
  );
}
