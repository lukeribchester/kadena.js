import Layout from 'components/common/Layout/Layout';
import { Loader } from 'components/common/Loader/Loader';
import HistoryPage from 'components/common/Transaction/components/HistoryPage/HistoryPage';
import TransactionBlock from 'components/common/Transaction/TransactionBlock';
import s from 'components/common/Transaction/TransactionDetails.module.css';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import { NetworkName } from 'utils/api';
import { useBlockData } from 'utils/hooks';

const TestBlockDetailsComponent = () => {
  const { headerData, parentLink, payloadData, blockInfo, error } =
    useBlockData(NetworkName.TEST_NETWORK);

  return (
    <Layout>
      <div className={s.transactionDetails}>
        <p className={s.transactionHeader}>Block Details</p>
        {blockInfo ? (
          <div
            className={`${s.transactionBlocks} ${s.transactionBlockDetails}`}
          >
            <div className={s.blocks}>
              <TransactionBlock
                blockLink={parentLink}
                title="Block Header"
                data={headerData}
              />
            </div>
            <HistoryPage data={payloadData} block="block" />
          </div>
        ) : error ? (
          <div className={`${s.transactionBlocks} ${s.error}`}>
            Requested Object not found
          </div>
        ) : (
          <Loader size={64} />
        )}
      </div>
    </Layout>
  );
};

const TestBlockDetailsDynamic: any = dynamic<any>(
  () => Promise.resolve(TestBlockDetailsComponent),
  {
    ssr: false,
  },
);

const TestBlockDetails: NextPage = () => {
  return <TestBlockDetailsDynamic />;
};

export default TestBlockDetails;
