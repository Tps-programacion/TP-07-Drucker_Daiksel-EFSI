import { useEffect, useState } from 'react'
import type { Story } from './components/types/story';
import StoryBar from './components/historias/storyBar/StoryBar';
import './App.css'
import { catApi } from './components/services/catApi';

function App() {
  const [stories, setStories] = useState<Story[]>([
    { id: '1', fotoPerfil: 'https://placekitten.com/200/200', username: 'UsuarioGato_1' },
    { id: '2', fotoPerfil: 'https://placekitten.com/201/200', username: 'UsuarioGato_2' },
    { id: '3', fotoPerfil: 'https://placekitten.com/202/200', username: 'UsuarioGato_3' }
  ]);;

  useEffect(() => {
    
  }, []);

  return (
    <>
      <StoryBar stories={stories} />
    </>
  );
}

export default App
