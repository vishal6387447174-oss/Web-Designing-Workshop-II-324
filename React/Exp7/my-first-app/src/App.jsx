import Student from "./components/Student";

function App() {
  return (
    <div>
      <h1>Student Details</h1>

      <Student name="Aman" course="React JS" marks={92} />
      <Student name="Priya" course="Web Designing" marks={88} />
      <Student name="Rahul" course="JavaScript" marks={76} />
    </div>
  );
}

export default App;
