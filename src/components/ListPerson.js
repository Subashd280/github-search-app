import React from "react";
// import axios from "axios"
import { withStyles, makeStyles } from "@material-ui/core/styles";
import "/home/subash/Documents/React/react_intro/src/App.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  image: {},
}))(TableCell);

class Listperson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          users: result.data,
        });
      });
  }

  handleDelete = (id) => {
  try{
     fetch('https://reqres.in/api/users/' +id, {
      method: "DELETE",
    }).then((response) => response.json())
      .then((result) => {
        alert("data selected")
        console.log(result);
        this.getData();
      });
  }catch(error){
    console.log(error);
  }
    
  }
  

  render() {
    const { users } = this.state;
    return (
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Id</StyledTableCell>
                <StyledTableCell align="center">First_name</StyledTableCell>
                <StyledTableCell align="center">Last_name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Avatar</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((item, id) => (
                <TableRow key={id}>
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell align="center">{item.first_name}</TableCell>
                  <TableCell align="center">{item.last_name}</TableCell>
                  <TableCell align="center">{item.email}</TableCell>
                  <TableCell align="center">
                    <img src={item.avatar} alt="avatar" />
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => {this.handleDelete(item.id)}}>
                      Delete
                    </Button>
                    <Button align="center">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default Listperson;
