import AlertMessage from './AlertMessage';

const ResponseHandler = (response, closeModal) => {
  const { data, error, status, message } = response;
  if (data && data?.status) {
    AlertMessage(data.message, 'success');
    closeModal();
  } else {
    if (error && error?.data?.message) {
      AlertMessage(error.data.message, 'error');
    } else if (!status) {
      AlertMessage(message, 'error');
    } else {
      AlertMessage('Something went wrong', 'error');
    }
    closeModal && closeModal();
  }
  return response;
};

export default ResponseHandler;
