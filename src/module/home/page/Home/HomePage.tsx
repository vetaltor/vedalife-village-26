import { AboutSection } from '../../component/AboutSection';
import { DonationSection } from '../../component/DonationSection';
import { HeroSection } from '../../component/HeroSection';
import { LocationSection } from '../../component/LocationSection';
import { RegistrationSection } from '../../component/RegistrationSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RegistrationSection />
      <LocationSection />
      <DonationSection />
    </>
  );
}
