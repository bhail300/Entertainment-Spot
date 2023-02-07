import Nav from "../comps/navbar";
import { Text } from "@nextui-org/react";

export default function Home() {
  const text = "E-SPOT is a entertainment web app using RAWG.io & themoviedb.org api to view trending Games and Movies"
  return (
    <div>
      <Nav/>
      <div>
      <Text
        h1
        size={60}
        css={{
          textAlign: "center"
        }}
      >
        Welcome to
      </Text>
      <Text
        h1
        size={60}
        css={{
          color: "$red700",
          textAlign: "center"
        }}
        weight="bold"
      >
        E-SPOT !
      </Text>

      <Text 
      css={{
        textAlign: "center"
      }}
      >{text}</Text>



      </div>
      
    </div>
    
  );
}

