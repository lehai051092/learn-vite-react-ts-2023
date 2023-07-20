import { MainLayout } from './components/layout';
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
      <MainLayout>
        <StudentFeature student={student} onClick={handleClick} />
      </MainLayout>
    </div>
  );
}

export default App;
