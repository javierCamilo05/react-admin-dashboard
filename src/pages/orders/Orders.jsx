import { useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";
import { orderRows } from "../../data";
import "./orders.scss";
// import { useQuery } from "@tanstack/react-query";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    type: "string",
    headerName: "Mesero",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Mesa",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Fecha",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Total",
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
        <h1>Pedidos</h1>
      </div>
      <DataTable slug="users" columns={columns} rows={orderRows} />
    </div>
  );
};

export default Foods;