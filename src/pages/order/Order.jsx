import { useState } from "react";
import "./order.scss";
// import { useQuery } from "@tanstack/react-query";



function Order() {
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
        <h1>Pedido</h1>
        
      </div>
      
    </div>
  );
};

export default Order;