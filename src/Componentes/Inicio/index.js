import Post from "Componentes/Post";
import styles from "./Inicio.module.css";
import posts from "json/posts.json";

const Inicio = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post}></Post>
        </li>
      ))}
    </ul>
  );
};

export default Inicio;
