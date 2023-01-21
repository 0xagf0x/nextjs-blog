/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/Slug.module.css';
import {GraphQLClient, gql} from 'graphql-request';

const graphcms = new GraphQLClient("https://api-us-west-2.hygraph.com/v2/cld63e58r1jec01um4zhf2rne/master");

// add what data we want to pull out
const QUERY = gql`
  query Post($slug: String!) {
    post(where: {slug: $slug}) {
      id,
      title,
      slug,
      datePublished,
      author {
        id,
        name,
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql
`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const {posts} = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post:any) => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false,
  }
};

export async function getStaticProps({params}:any) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, {slug});
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  }
};

export default function BlogPost({post}:any) {
  return (
    <main className={styles.blog}>
      <div className={styles.blogContainer}>
        <div className={styles.coverContainer}>
          <img className={styles.cover} src={post.coverPhoto.url} alt="cover" />
        </div>
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.authorContainer}>
          <img className={styles.avatar} src={post.author.avatar.url} alt="avatar" />
          <span className={styles.datePublished}>{post.datePublished}</span>
        </div>
        <div 
          className={styles.blogPost}
          dangerouslySetInnerHTML={{ __html: post.content.html}}
          >
        </div>
      </div>
    </main>
  )
}