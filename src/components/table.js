import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'Email', minWidth: 100 },
  {
    id: 'population',
    label: 'Roles',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Extra Permission',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('Usman', 'Usman@user.com', "Admin", "Setting"),
  createData('Azhan', 'azhan@user.com', "Editor", "Backups"),
  createData('Shahzaib', 'shahzaib@user.com', "-", "Logs"),
  createData('Nawaz', 'nawaz@user.com', "Admin", "Backups"),
  createData('Mohsin', 'mohsin@user.com', "Moderator", "Backups"),
  createData('ALi', 'ali@user.com', "Editor", "-"),
  createData('Hamza', 'hamza@user.com', "Admin", "-"),
  createData('Arslan', 'arslan@user.com', "Moderator", "Logs"),
  createData('Imran', 'imran@user.com', "Moderator", "Backups"),
  createData('Zeeshan', 'zeeshan@user.com', "-", "Setting"),
  createData('Naeem', 'naeem@user.com', "Admin", "Logs"),
  createData('Usman', 'Usman@user.com', "Editor", "Backups"),
  createData('Azhan', 'azhan@user.com', "Admin", "Setting"),
  createData('Shahzaib', 'shahzaib@user.com', "Moderator", "Backups"),
  createData('Zaib', 'zaib@user.com', "Editor", "Setting"),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 400,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      
      
    
      
      
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
