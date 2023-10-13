import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@mui/material';
import useStyle from './style';

const TableCard = ({ item, columns }) => {
  const classes = useStyle();
  return (
    <Card variant="outlined" className={classes.cardMain}>
      <CardContent className={classes.CardContent}>
        {columns?.map((ele, Index) => {
          if (ele.type === 'action') {
            return (
              <div className={`d_flex d_flex_content_between ${classes.cardRow}`} key={Index}>
                <h4 className={classes.cardLable}>{ele?.field}</h4>
                <div className="d_flex">{ele.render(item)}</div>
              </div>
            );
          }
          return (
            <div className={`d_flex d_flex_content_between ${classes.cardRow}`} key={Index}>
              <h4 className={classes.cardLable}>{ele?.field}</h4>
              <div className={classes.cardData}>
                <p>{item[ele?.field]}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

TableCard.propTypes = {
  columns: PropTypes.any,
  item: PropTypes.any
};

export default React.memo(TableCard);
