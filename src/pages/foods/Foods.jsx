import DataTable from "../../components/dataTable/DataTable";
import "./foods.scss";
import { useState } from "react";
import { foodRows } from "../../data";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';
// import { useQuery } from "@tanstack/react-query";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    type: "string",
    headerName: "Comida",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Precio",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Ingredientes",
    width: 200,
  }
];

function Foods() {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="users">
      <div className="info">
        <h1>Comidas</h1>
        <Link to="/new-user">Agregar Comida</Link>
      </div>
      <DataTable slug="users" columns={columns} rows={foodRows} />
    </div>
  );
};

export default Foods;