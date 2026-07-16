import EventsHero from "../components/events/EventsHero";
import UpcomingEvents from "../components/events/UpcomingEvents";
import EventTimeline from "../components/events/EventTimeline";
import AnnualCalendar from "../components/events/AnnualCalendar";
import EventGallery from "../components/events/EventGallery";
import Achievements from "../components/events/Achievements";
import EventCTA from "../components/events/EventCTA";

const Events = () => {
  return (
    <>
      <EventsHero />

      <UpcomingEvents />

      <EventTimeline />

      <AnnualCalendar />

      <EventGallery />

      <Achievements />

      <EventCTA />
    </>
  );
};

export default Events;