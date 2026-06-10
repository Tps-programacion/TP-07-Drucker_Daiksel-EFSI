import StoryItem from "../storyItem/StoryItem";
import type { Story } from "../../types/story";
import './storyBar.css';


interface StoryBarProps {
  stories: Story[];
}

function StoryBar({ stories }: StoryBarProps) {
  return (
    <div className="story-bar-container">
      {stories.map((story) => (
        <StoryItem
          key={story.id}
          fotoPerfil={story.fotoPerfil}
          username={story.username}
        />
      ))}
    </div>
  );
}

export default StoryBar;
