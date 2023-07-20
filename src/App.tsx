import { Footer, Header } from './components/common';
import { StudentFeature } from './features/labs/StudentFeature';
import { Student } from './models';

function App() {
  const student: Student = {
    name: 'John',
    age: 5,
    isHero: true,
  };

  function handleClick(student: Student) {
    console.log(student);
  }

  return (
    <div>
      <Header></Header>
      <StudentFeature student={student} onClick={handleClick}></StudentFeature>
      <Footer></Footer>
    </div>
  );
}

export default App;
