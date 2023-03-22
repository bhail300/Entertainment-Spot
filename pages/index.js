import Head from "next/head";
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
  return (
    <>
     <Head>
        <title>Home</title>
        <meta name="author" content="Blen, Horus, Zahir" />
        <meta property="og:title" content="Entertainment-Spot" />
        <meta property="og:description" content="BCIT Digital Design and Development Program" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/e_spot.svg" />
     </Head>
     <main>
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
     </main>
    </>
  );
}