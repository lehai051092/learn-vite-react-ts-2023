import { Footer, Header } from './components/common';
import { StudentFeature } from './features/labs/StudentFeature';
import { Student } from './models';

function App() {
  const student: Student = {
    name: 'John',
    age: 5,
    isHero: true,
  };

  return (
    <div>
      <Header></Header>
      <StudentFeature student={student}></StudentFeature>
      <Footer></Footer>
    </div>
  );
}

export default App;
