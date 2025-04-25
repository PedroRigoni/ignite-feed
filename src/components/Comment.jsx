import styles from './Comment.module.css';

import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

const [likeCount, setLikeCount] = useState(0);

function handleDeleteComment() {

        onDeleteComment(content);
    }

function handleLikeComment() {
    setLikeCount(likeCount + 1);
}


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/maykbrito.png' alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Rigoni</strong>
                            <time title='21 de abril de 2025 as 21:38' dateTime="2025-21-04 21:38:47">Cerca de 1h atras</time>
                        </div>

                        <button onClick={handleDeleteComment} tittle='deletar comentario'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p> {content} 👏👏</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span> {likeCount} </span>
                    </button>
                </footer>

            </div>
        </div>
    );
}