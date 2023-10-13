import React, { useEffect } from 'react';
import SignPdf from './SignPdf';
import { Grid, Container } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetSpecificSignedDocumentQuery } from 'store/API/documentApi';
import ResponseHandler from 'utils/ResponseHandler';
import { Loader } from 'components';
import { getRandomValue } from 'utils';
import AlertMessage from 'utils/AlertMessage';

const uid = getRandomValue();
const SignPdfContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetSpecificSignedDocumentQuery(
    {
      documentActionUserSignatureDraftID: id,
      uid: uid
    },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    if (error) {
      ResponseHandler(error?.data);
      navigate('/dashboard');
    }
  }, [error]);

  useEffect(() => {
    if (data?.data) {
      if (!data?.data?.pdfContent) {
        AlertMessage('Oops !! no one has signed.', 'error');
        navigate('/dashboard');
      }
    }
  }, [data]);

  return (
    <>
      <Container maxWidth="xxl" style={{ padding: 0 }}>
        <Grid container spacing={2}>
          {data?.data && <SignPdf data={data?.data} />}
        </Grid>
      </Container>
      {isLoading && <Loader />}
    </>
  );
};

export default SignPdfContainer;
