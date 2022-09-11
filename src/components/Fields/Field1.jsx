import { SimpleGrid } from "@chakra-ui/react";
import "./Field1.css";
import React from "react";
import CardFdat from "../../requesits/Data.json";
import CardF from "../Fieldcard/CardF";
function Field1() {
  
  return (
    <div className="Field1">
      <SimpleGrid columns={[1, 2, 2]} spacingY="25vh">
        {CardFdat.map((Carddat, index) => {
          return <CardF title={Carddat.title} points={Carddat.arr} />;
        })}
      </SimpleGrid>
    </div>
  );
}
export default Field1;
