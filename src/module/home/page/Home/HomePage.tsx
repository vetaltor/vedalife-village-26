import { AboutSection } from '../../component/AboutSection';
import { ContactsSection } from '../../component/ContactsSection';
import { DonationSection } from '../../component/DonationSection';
import { GettingThereSection } from '../../component/GettingThereSection';
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
      <GettingThereSection />
      <ContactsSection />
      <DonationSection />
    </>
  );
}
