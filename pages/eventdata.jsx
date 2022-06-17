import Head from 'next/head'

import { getEvents, getPosts } from '../utils/wordpress';

import Event from "../components/Event";
import Navbar from "../components/Navbar";

export default function Eventdata({ posts, events }) {


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
        <h1 className="text-center pb-5">Page Event</h1>
        <div className="row">
          <div className="col-lg-12 bg-info">
            <h2 className="pb-3 ">Events</h2>
            {jsxEvents}
          </div>
        </div>
      </div>
    </>
  )

}

export async function getStaticProps({ params }) {

  const events = await getEvents();
  return {
    props: {
      events
    },
    revalidate: 10, // In seconds
  }

}
