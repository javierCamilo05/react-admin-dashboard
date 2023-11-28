import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import "./newFood.scss";
// import { useQuery } from "@tanstack/react-query";



function NewFood() {
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
        <h1>Agregar Comida</h1>
      </div>
      <form>
        <div className="fields">
          <TextField className="field" required id="name" label="Nombre" />
        </div>
        <div className="fields">
          <TextField className="field"
            id="doc"
            select
            label="Categoria"
            helperText="Categoria"
          >
            <MenuItem>
              Hamburguesa
            </MenuItem>
            <MenuItem>
              Pizza
            </MenuItem>
          </TextField>
        </div>
        <div className="fields">
          <TextField className="ingredient" required id="email" type="email" label="Ingredientes" />
          <Button variant="contained" className="btn" color="success">Agregar Ingrediente</Button>
        </div>
        <Button variant="contained" color="success">Agregar Comida</Button>
      </form>
    </div>
  );
};

export default NewFood;