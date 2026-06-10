import './storyItem.css';

interface StoryItemProps {
  fotoPerfil: string;
  username: string;
}

function StoryItem({ fotoPerfil, username }: StoryItemProps) {
  return (
    <div className="story-item-container">
      <div className="story-ring">
        <img
          className="story-image"
          src={fotoPerfil}
          alt={username}
        />
      </div>

      <span className="story-username">{username}</span>
    </div>
  );
}

export default StoryItem;