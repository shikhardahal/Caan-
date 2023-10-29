'use client';

import Hero from '../components/hero';
import Functions from '../components/functions';
import CallToAction from '../components/cta';
import ImportantLinks from '../components/importantLinks';
import OurMedias from '../components/medias';
import OurActivities from '../components/activities';
import AboutUs from '../components/about';
import Layout from "../components/layout"
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Functions />
      <AboutUs />
      <OurActivities />
      <OurMedias />
      <ImportantLinks />
      <CallToAction />
    </Layout>

  )
}

export default Home;