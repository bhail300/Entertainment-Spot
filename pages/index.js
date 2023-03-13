import Nav from "../comps/navbar";
import { Text } from "@nextui-org/react";
import { Moviemenu } from "../comps/menumovie";
import { Gamemenu } from "../comps/menugame";
import { Menutitlecard } from "../comps/menutitlecard";

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  minHeight: "100vh"
};

const menuStyle = {
  width: "100%",
  height: "100%",
  gridRow: "2" // Add this property to avoid overlapping with Menutitlecard
};

export default function Home() {
  const text = "E-SPOT is a entertainment web app using RAWG.io & themoviedb.org api to view trending Games and Movies"
  return (
    <div>
      <Nav/>
      <div>
        <Menutitlecard/>
        <div style={containerStyle}>
          <div style={menuStyle}>
            <Moviemenu />
          </div>
          <div style={menuStyle}>
            <Gamemenu />
          </div>
        </div>
      </div>
    </div>
    
  );
}

