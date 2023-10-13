import { useDispatch } from 'react-redux';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { blueedApi } from 'store/baseQuery';

const PAGE_SIZE = 15;
const calculateMaxPages = (total, size) => {
  return Math.ceil(total / size);
};

export const isValidNotEmptyArray = (array) => {
  return !!(array && array?.length && array?.length > 0);
};

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const useInfiniteScroll = (apiMethod, queryParameters) => {
  const dispatch = useDispatch();
  const [localPage, setLocalPage] = useState(1);
  const [combinedData, setCombinedData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [apiResponse, setApiResponse] = useState({});
  const apiFilterField = JSON.stringify(queryParameters);
  const previousFilter = usePrevious(apiFilterField);
  const {
    result: fetchData = [],
    currentPage: remotePage = 1,
    totalCount: remoteTotal = 0,
    size: remoteSize = PAGE_SIZE
  } = apiResponse || {};

  useEffect(() => {
    if (previousFilter && previousFilter !== apiFilterField) {
      setCombinedData([]);
      if (localPage === 1) {
        fetchDataApi();
      } else {
        setLocalPage(1);
      }
    }
  }, [apiFilterField]);

  useEffect(() => {
    fetchDataApi();
  }, [localPage]);

  useEffect(() => {
    if (isValidNotEmptyArray(fetchData)) {
      if (localPage === 1) setCombinedData(fetchData);
      else if (localPage === remotePage) {
        setCombinedData((previousData) => [...previousData, ...fetchData]);
      }
    }
  }, [fetchData]);

  const fetchDataApi = async () => {
    try {
      setIsFetching(true);
      let params = {
        limit: PAGE_SIZE,
        pagNum: localPage,
        ...queryParameters
      };
      const result = await dispatch(
        blueedApi.endpoints[apiMethod].initiate(params, { forceRefetch: true })
      );
      if (result?.data?.status) {
        setApiResponse(result?.data?.data);
      }
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
    }
  };

  const maxPages = useMemo(() => {
    return calculateMaxPages(remoteTotal, remoteSize);
  }, [remoteTotal, remoteSize]);

  const refresh = useCallback(() => {
    setCombinedData([]);
    let previousLocalPage = localPage;
    setLocalPage(1);
    if (previousLocalPage === 1) {
      fetchDataApi();
    }
  }, []);

  const readMore = () => {
    if (localPage < maxPages && localPage === remotePage) {
      setLocalPage(localPage + 1);
    }
  };
  return {
    combinedData,
    localPage,
    readMore,
    refresh,
    remoteTotal,
    isLoading: localPage === 1 ? isFetching : false,
    isFetching: isFetching
  };
};

export default useInfiniteScroll;
