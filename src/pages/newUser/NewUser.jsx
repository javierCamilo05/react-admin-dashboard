import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import "./newUser.scss";

function NewUser() {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Agregar Usuario</h1>
      </div>
      <form action="">
        <div className="fields">
          <TextField className="field" required id="name" label="Nombres" />
          <TextField className="field" required id="lastname" label="Apelldios" />
        </div>
        <div className="fields">
          <TextField className="field"
            id="doc"
            select
            label="Tipo de Documento"
            helperText="Tipo de Documento"
          >
            <MenuItem>
              Cedula
            </MenuItem>
            <MenuItem>
              Tarjeta de Identidad
            </MenuItem>
          </TextField>
          <TextField className="field" required id="doc-2" label="Documento" />
        </div>
        <div className="fields">
          <TextField className="field" required id="email" type="email" label="Correo" />
          <TextField className="field"
            id="standard-password-input"
            label="Contraseña"
            type="Contraseña"
            required
          />
        </div>
        <div className="fields">
          <TextField className="field"
            id="rol"
            required
            select
            label="Rol"
            helperText="Rol"
          >
            <MenuItem>
              Admin
            </MenuItem>
          </TextField>
          <TextField className="field"
            required
            id="password-2"
            label="Repetir Contraseña"
            type="Contraseña"
          />
        </div>
        <Button variant="contained" color="success">Agregar Empleado</Button>
      </form>
    </div>
  );
};

export default NewUser;