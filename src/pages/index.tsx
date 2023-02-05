import Image from 'next/image'
import styles from '@/styles/Home.module.css';
import { useState } from 'react';
//api request
import {GraphQLClient, gql} from 'graphql-request';
import BlogCard from 'components/BlogCard';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// import '../styles/scss/stripe.scss';
// import '../js/Gradient.js';

const graphcms = new GraphQLClient("https://api-us-west-2.hygraph.com/v2/cld63e58r1jec01um4zhf2rne/master");

// add what data we want to pull out
const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const {posts} = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}

export default function Home({posts}:any) {
  const [defaultOrder, setDefaultOrder] = useState(true);
  const [abcOrder, setAbcOrder] = useState(false);
  const [mostRecent, setMostRecent] = useState(false);
  const [labelValue, setLabelValue] = useState("");

  const sortByAlphabetical = [].concat(posts)
    .sort((a:any, b:any) => a.title > b.title ? 1 : -1)
    .map((item:any, i) => 
        <BlogCard 
          key={i}
          title={item.title}
          author={item.author}
          datePublished={item.datePublished}
          slug={item.slug}
          coverPhoto={item.coverPhoto}
        />
    );

  const sortByDatePublished = [].concat(posts)
    .sort((a:any, b:any) => a.datePublished > b.datePublished ? 1 : -1)
    .map((item:any, i) => 
        <BlogCard 
          key={i}
          title={item.title}
          author={item.author}
          datePublished={item.datePublished}
          slug={item.slug}
          coverPhoto={item.coverPhoto}
        />
    );

  const handleChange = (e: SelectChangeEvent) => {
    console.log(e.target.value);
    setLabelValue(e.target.value as string);
    if (e.target.value === "Alphabetical") {
      setAbcOrder(true);
      setMostRecent(false);
      setDefaultOrder(false);
      setLabelValue('Alphabetical');
    } else if (e.target.value === "Most Recent") {
      setAbcOrder(false);
      setMostRecent(true);
      setDefaultOrder(false);
      setLabelValue('Most Recent');
    } else {
      setAbcOrder(false);
      setMostRecent(false);
      setDefaultOrder(true);
      setLabelValue('Default');
    }
  };

  const selectOptions = [
    { value: 'Default', label: 'Default' },
    { value: 'Alphabetical', label: 'Alphabetical' },
    { value: 'Most Recent', label: 'Most Recent' },
  ]

  return (
    <>
      <main className={styles.main}>
        <FormControl  style={{width: 550}}>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sort By"
            onChange={handleChange}
            defaultValue = ""
          >
            {selectOptions.map((item:any, index:number) => (
              <MenuItem key={index + 1} value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {defaultOrder && 
          <div className={styles.cardGrid}>
            {posts.map((post:any) => (
              <BlogCard 
                key={post.id}
                title={post.title}
                author={post.author}
                datePublished={post.datePublished}
                slug={post.slug}
                coverPhoto={post.coverPhoto}
              />
            ))}
          </div>
        }

        {abcOrder && 
          <div className={styles.cardGrid}>
              {sortByAlphabetical}
          </div>
        }

        {mostRecent && 
           <div className={styles.cardGrid}>
             {sortByDatePublished}
          </div>
        }
      </main>
    </>
  )
}
