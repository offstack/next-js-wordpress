import Head from 'next/head'

import { getEvents, getPosts } from '../utils/wordpress';

import Post from "../components/Post";
import Event from "../components/Event";
import Navbar from "../components/Navbar";

export default function Home({ posts, events }) {

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
          <title>Tech Blog</title>
          <meta name="description" content="Keep up to date with the latest trends in tech" />
          <link rel="icon" href="/favicon.ico" />
          {/* You can add more metadata here, like open graph tags for social media, etc */}
        </Head>
      </Navbar>

      <div className="container pt-5">
        <h1 className="text-center pb-5">Tech Blog</h1>
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Post</h5>
                <p className="card-text">Clik Tombol untuk melihat daftar Post</p>
                <a href="/postdata" className="btn btn-primary">Go Post</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Event</h5>
                <p className="card-text">Clik Tombol untuk melihat daftar Event</p>
                <a href="/eventdata" className="btn btn-primary">Go Event</a>
              </div>
            </div>
          </div>
        </div>
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
