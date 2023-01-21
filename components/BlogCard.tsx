/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from '../src/styles/BlogCard.module.css';

export default function BlogCard({title, author, datePublished, coverPhoto, slug}:any) {
  return (
    <div className={styles.card}>
      <Link
      href={"/posts/" + slug}
      className={styles.link}
      >
        <div className={styles.imageContainer}>
          <img 
            className={styles.image}
            src={coverPhoto.url} 
            alt="cover" 
          />
        </div>
      </Link>
      <div className={styles.cardInner}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.datePublished}>{datePublished}</span>
        <div className={styles.authorContainer}>
          <img 
            className={styles.authorAvatar}
            src={author.avatar.url} 
            alt="avatar" 
          />
          <span className={styles.authorName}>{author.name}</span>
        </div>
      </div>
    </div>
  )
}