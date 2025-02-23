import s from './Loader.module.css';

import dynamic from 'next/dynamic';
import React from 'react';

const PuffLoader: any = dynamic<any>(
  () => import('react-spinners/PuffLoader'),
  {
    ssr: false,
  },
);

interface Props {
  size?: number;
  text?: string;
}

export const Loader = (props: Props) => {
  return (
    <div className={s.loading}>
      <PuffLoader color="#FFFFFF" size={props.size || 40} />
      {props.text ? <p className={s.loadingText}>{props.text}</p> : null}
    </div>
  );
};
