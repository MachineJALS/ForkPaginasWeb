import { useState } from "react";
import { Cupos1 } from "./cupos1/cupos1";

export function LayoutCupos() {
  const [cupos, setCupos] = useState(0)

  return (
    <>
      <Cupos1 count={cupos} setCount={setCupos} />
    </>
  )
}