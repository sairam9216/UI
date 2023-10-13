/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Box
} from '@mui/material';
import useStyle from './style';
import { TableCard, NoDataFound } from 'components';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';
const CommonTable = ({
  rows,
  columns,
  handleChangePage,
  handleChangeRowsPerPage,
  rowsPerPageOptions,
  isPagination
}) => {
  const classes = useStyle();
  const theme = useTheme();
  const { t } = useTranslation();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box className={classes.tableBox}>
      {matches ? (
        <>
          <TableContainer className={classes.tableContainer}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead className={classes.tableHeader}>
                <TableRow className={classes.tableRow}>
                  {columns.map((column, i) => (
                    <TableCell
                      key={i}
                      align={column.align}
                      className={classes.tableCell}
                      style={{ width: column.minWidth }}>
                      {t(column.label)}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.length > 0 ? (
                  rows.map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={index}
                        className={classes.stripeBg}>
                        {columns.map((column, i) => {
                          const value = row[column.field];
                          return (
                            <TableCell
                              key={i}
                              className={`${
                                column.type && column.field === 'actions' ? 'text_right' : ''
                              }`}>
                              {column.type ? column.render(row) : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
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

          {isPagination && (
            <TablePagination
              rowsPerPageOptions={rowsPerPageOptions}
              component="div"
              count={20}
              rowsPerPage={10}
              page={0}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              SelectProps={{
                MenuProps: { classes: { paper: classes.selectDropdown } }
              }}
              classes={{ menuItem: classes.menuItem }}
              className={classes.pagination}
            />
          )}
        </>
      ) : (
        <>
          <Box className={classes.cardWrap}>
            {rows?.map((item, index) => {
              return <TableCard key={index} item={item} columns={columns} />;
            })}
          </Box>
        </>
      )}
    </Box>
  );
};
CommonTable.prototype = {
  rows: PropTypes.any,
  columns: PropTypes.array,
  rowsPerPage: PropTypes.number,
  rowsPerPageOptions: PropTypes.array,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
  isPagination: PropTypes.bool
};
CommonTable.defaultProps = {
  rowsPerPageOptions: [],
  rows: [],
  columns: [],
  rowsPerPage: 5,
  handleChangePage: () => {},
  handleChangeRowsPerPage: () => {}
};

export default React.memo(CommonTable);
