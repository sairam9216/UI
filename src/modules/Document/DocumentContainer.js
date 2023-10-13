import React, { useState, useEffect } from 'react';
import Document from './Document';
import { useDebounce } from 'utils/index';
import useInfiniteScroll from 'hooks/InfiniteScroll/InfiniteScroll';
import { useParams } from 'react-router-dom';
function DocumentContainer() {
  const [search, setSearch] = useState('');
  let { id } = useParams();
  const [paramArg, setParamArg] = useState({
    IsShared: id !== 'draft',
    Name: '',
    search: ''
  });
  const { combinedData, readMore, isLoading, isFetching, remoteTotal } = useInfiniteScroll(
    'getDocuments',
    paramArg
  );
  const searchText = useDebounce(search, 1000);

  const setPagination = () => {
    readMore();
  };

  useEffect(() => {
    setParamArg({
      ...paramArg,
      search
    });
  }, [searchText]);

  return (
    <>
      <Document
        isLoading={isLoading}
        totalCount={remoteTotal}
        isFetching={isFetching}
        setPageData={setPagination}
        allData={combinedData}
        search={search}
        setSearch={setSearch}
        IsShared={paramArg?.IsShared}
      />
    </>
  );
}
export default DocumentContainer;
