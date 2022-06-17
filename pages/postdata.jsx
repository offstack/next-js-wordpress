import Head from 'next/head'

import { getEvents, getPosts } from '../utils/wordpress';

import Post from "../components/Post";
import Event from "../components/Event";
import Navbar from "../components/Navbar";

export default function Postdata({ posts, events }) {

  const jsxPosts = posts.map(post => {
    const featuredMedia = post['_embedded']['wp:featuredmedia'][0];
    return (
      <Post post={post} featuredMedia={featuredMedia} key={post.id} />
    )
  });

  const jsxEvents = events.map(event => {
    const featuredMedia = event['_embedded']['wp:featuredmedia'][0];
    return (
      <Event event={event} featuredMedia={featuredMedia} key={event.id} />
    )
  });

  return (
    <>
      <Navbar>

        <Head>
          <title>Post</title>
          <meta name="description" content="Keep up to date with the latest trends in tech" />
          <link rel="icon" href="/favicon.ico" />
          {/* You can add more metadata here, like open graph tags for social media, etc */}
        </Head>
      </Navbar>

      <div className="container pt-5 bg-warning">
      <div className="row">
          <div className="col-lg-12">
            <h2 className="pb-3">Our blog posts</h2>
            {jsxPosts}
          </div>
        </div>
        <h1 className="text-center pb-5">Data Post</h1>
        
      </div>
    </>
  )

}

export async function getStaticProps({ params }) {

  const posts = await getPosts();
  const events = await getEvents();
  return {
    props: {
      posts,
      events
    },
    revalidate: 10, // In seconds
  }

}
