import "./App.css";
import Profile from "./Profile/myprofil";
import image from "./Profile/fares.jpg";
import ActionLink from "./Profile/alert";



function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", 
        margin: "auto",
        marginTop:"10%",
        width : "min-content",
        justifyContent: "center"  
      }}>
      <Profile
        img={image}
        fullName= "FARES MOHAMED"
        profession="DEVELLOPEUR"
      />
      <ActionLink />
    </div>
  );
}

export default App;