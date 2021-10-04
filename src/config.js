import { CircularProgress } from '@mui/material';
import { Spin, notification } from 'antd';

export const run = () => {
  Spin.setDefaultIndicator(<CircularProgress />);

  notification.config({
    placement: 'topRight',
    top: 72,
  });
};
