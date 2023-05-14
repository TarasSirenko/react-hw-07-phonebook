import s from './AddBtn.module.css';
import React from 'react';

export default function AddBtn() {
  return (
    <button type="submit" className={s.Button}>
      Add contact
    </button>
  );
}
