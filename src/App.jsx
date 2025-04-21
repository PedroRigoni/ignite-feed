import { Header } from './components/header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';



function App() {

  return (
    <div>

    <Header/>

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post 
        author='Pedro Rigoni'
        content=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda molestias, similique, doloribus omnis harum voluptatum fuga exercitationem, debitis facilis quis dolor beatae dignissimos possimus architecto nam nulla consectetur praesentium et?'
      />

      </main>
    </div>

    </div>

  );
}

export default App
