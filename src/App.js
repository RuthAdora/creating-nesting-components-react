
import './App.css';


function MyButton() {
  return (
    <button>
      Login
    </button>
  );
}
function MyButton2() {
  return (
    <button>
      Sign up
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Adora Beauty </h1>
      <MyButton />
      <MyButton2/>
    </div>
  );
}


