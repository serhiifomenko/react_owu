import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {
  return (
    <>
     <MyComponent text='Hello World!'/>
      {
        MyComponent({text: 'Hello3'})
      }
    </>
  );
}

export default App
