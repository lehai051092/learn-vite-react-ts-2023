import { Student } from '@/models';

export interface StudentFeatureProps {
  student: Student;
}

export function StudentFeature({ student }: StudentFeatureProps) {
  const { name, isHero } = student;

  return (
    <div>
      Student: {name} {isHero ? 'is-hero' : 'no-hero'}
    </div>
  );
}
