import {HeroSection} from './components/HeroSection';
import {AboutSection} from './components/AboutSection';
import {RegistrationSection} from './components/RegistrationSection';
import {DonationSection} from './components/DonationSection';
import {LocationSection} from './components/LocationSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RegistrationSection />
      <DonationSection />
      <LocationSection />
    </>
  );
}