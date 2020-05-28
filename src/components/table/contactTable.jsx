import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import Spinner from "../spinner/spinner.component";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ContactTable = ({ isPending, contactList }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      {!isPending && contactList !== null ? (
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>SI.No</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Contact</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contactList.results.map((person, index) => (
              <StyledTableRow key={person.id.value}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {person.name.first + " " + person.name.last}
                </StyledTableCell>
                <StyledTableCell align="right">{person.gender}</StyledTableCell>
                <StyledTableCell align="right">
                  {person.dob.age}
                </StyledTableCell>
                <StyledTableCell align="right">{person.email}</StyledTableCell>
                <StyledTableCell align="right">{person.phone}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Spinner />
      )}
    </TableContainer>
  );
};
const mapStateToProps = ({
  contactListReducer: { isPending, contactList },
}) => ({
  isPending,
  contactList,
});

export default connect(mapStateToProps)(ContactTable);
