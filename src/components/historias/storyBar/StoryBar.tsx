import StoryItem from "../storyItem/StoryItem";
import type { Usuarios } from "../../../types/Usuario";
import './storyBar.css';


interface StoryBarProps {
  usuarioStory: Usuarios[];
}

function StoryBar({ usuarioStory }: StoryBarProps) {
  return (
    <div className="story-bar-container">
      {usuarioStory.map((story) => (
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
