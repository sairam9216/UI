import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useStyle from './style';
import ShareDocumentInfoCard from 'components/ShareDocumentInfoCard/ShareDocumentInfoCard';
import { NoDataFound } from 'components';
import { DialogFormContainer } from 'components';
function Row(props) {
  const classes = useStyle();
  const { row, columns, docLinkClick, documentZoomClick } = props;
  const [open, setOpen] = React.useState(false);
  const [isReadMore, setIsReadMore] = React.useState(false);
  const [activeDetail, setActiveDetail] = React.useState();
  const documentHistoryData = row?.documentHistoryModel;

  const moreDetailClick = (e, detail) => {
    e?.stopPropagation();
    setIsReadMore(!isReadMore);
    setActiveDetail(detail);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell className={classes.noBorder} width={60}>
          <IconButton
            className={classes.iconButton}
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon color={'primary.main'} /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {columns.map((column, i) => {
          const value = row[column.field];
          return (
            <TableCell key={i} className={classes.noBorder}>
              {column.type ? column.render(row) : value}
            </TableCell>
          );
        })}
      </TableRow>
      <TableRow>
        {documentHistoryData.length > 0 && <TableCell width={60} sx={{ p: 0 }}></TableCell>}
        <TableCell className={classes.accordionCell} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box className={classes.sliderDynWidth}>
              {documentHistoryData.length > 0 ? (
                <Box className={`d_flex overflow ${classes.scrollBar}`}>
                  {documentHistoryData.map((history, Index) => {
                    return (
                      <ShareDocumentInfoCard
                        key={Index}
                        historyInfo={history}
                        docLinkClick={docLinkClick}
                        documentZoomClick={documentZoomClick}
                        readMoreClick={(e) => moreDetailClick(e, history)}
                      />
                    );
                  })}
                </Box>
              ) : (
                <NoDataFound />
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      {/* Read more modal  */}
      <DialogFormContainer
        open={isReadMore}
        dialogSize={'sm'}
        isFooter={false}
        isHeader={true}
        headerTitle={'Document Review Detail'}
        headerClose={true}
        close={() => setIsReadMore(false)}>
        <Box>
          <Box className={classes.fromSection}>
            <Box className={`d_flex`} sx={{ pb: 1 }}>
              <h4 className={classes.label}>From : </h4>
              <p className={classes.description}>{activeDetail?.fromUser}</p>
            </Box>
            <Box className={`d_flex`} sx={{ pb: 1 }}>
              <h4 className={classes.label}>To : </h4>
              <p className={classes.description}>{activeDetail?.toUser}</p>
            </Box>
            <Box className={`d_flex `} sx={{ pb: 2 }}>
              <h4 className={classes.label}>Subject : </h4>
              <p className={classes.description}>{activeDetail?.subject}</p>
            </Box>
          </Box>
          <Box sx={{ pt: 2 }} className={classes.borderTop}>
            <h4 className={classes.label}>Message</h4>
            <p className={classes.description}>{activeDetail?.message}</p>
          </Box>
        </Box>
      </DialogFormContainer>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.any,
  columns: PropTypes.any,
  docLinkClick: PropTypes.any,
  documentZoomClick: PropTypes.any
};

export default function DocumentListTable({ columns, rows, docLinkClick, documentZoomClick }) {
  const classes = useStyle();
  return (
    <Box className={classes.tableBox}>
      <TableContainer className={classes.tableContainer}>
        <Table aria-label="collapsible table">
          <TableHead className={classes.tableHeader}>
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableCell} />
              {columns.map((column, i) => (
                <TableCell key={i} align={column.align} className={classes.tableCell}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.length > 0 ? (
              rows.map((row, index) => {
                return (
                  <Row
                    key={index}
                    columns={columns}
                    row={row}
                    docLinkClick={docLinkClick}
                    documentZoomClick={documentZoomClick}
                  />
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length + 1}>{<NoDataFound />}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
DocumentListTable.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  docLinkClick: PropTypes.any,
  documentZoomClick: PropTypes.any
};
