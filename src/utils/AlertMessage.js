import { toast } from 'react-toastify';

const AlertMessage = (msg, type = 'default') => {
  const toastProps = {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  };
  return type === 'default' ? toast(msg, toastProps) : toast[type](msg, toastProps);
};

export default AlertMessage;
