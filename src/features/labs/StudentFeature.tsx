import { Student } from '@/models';

export interface StudentFeatureProps {
  student: Student;
  onClick?: (student: Student) => void;
}

export function StudentFeature({ student, onClick }: StudentFeatureProps) {
  const { name, isHero } = student;

  return (
    <div onClick={() => onClick?.(student)}>
      Student: {name} {isHero ? 'is-hero' : 'no-hero'}
    </div>
  );
}
