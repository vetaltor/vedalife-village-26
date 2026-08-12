import { AboutSection } from '../../component/AboutSection';
import { ContactsSection } from '../../component/ContactsSection';
import { DonationSection } from '../../component/DonationSection';
import { GettingThereSection } from '../../component/GettingThereSection';
import { HeroSection } from '../../component/HeroSection';
import { RegistrationSection } from '../../component/RegistrationSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <PhotoSection /> */}
      <RegistrationSection />
      {/* <LocationsSection /> */}
      <DonationSection />
      <GettingThereSection />
      <ContactsSection />
    </>
  );
}
