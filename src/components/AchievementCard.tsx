import { Achievement } from '../types';

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div className="achievement fade-up">
      <h4>{achievement.title}</h4>
      <div className="time">{achievement.time}</div>
    </div>
  );
}
