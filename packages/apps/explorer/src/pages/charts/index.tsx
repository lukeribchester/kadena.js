import React, { FC } from 'react';
import { useWindowSize } from 'utils/hooks';

const ChartsPage: FC = () => {
  const { height } = useWindowSize();

  return (
    <embed
      type="text/html"
      src="https://kadena.sexy/public/dashboard/f0513f15-8d0d-4e50-950f-35f6a72c0fe2?date_filter=past30days~#refresh=900"
      width="100%"
      height={`${height}px`}
    />
  );
};

export default ChartsPage;
