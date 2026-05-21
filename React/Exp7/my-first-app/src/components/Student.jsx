function Student({ name, course, marks }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>
    </div>
  );
}

export default Student;
