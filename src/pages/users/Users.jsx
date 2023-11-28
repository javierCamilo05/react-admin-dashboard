import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "Nombres",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Apellidos",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Correo",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Celular",
    width: 200,
  }
];

function Users() {
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
        <h1>Empleados</h1>
        <Link to="/new-user">Agregar Empleado</Link>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
    </div>
  );
};

export default Users;