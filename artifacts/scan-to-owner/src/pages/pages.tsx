import { type FormEvent, useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, Bike, BusFront, CarFront, Check, CircleCheck, Clock3, LockKeyhole, Mail, MapPin, MessageCircle, Search, ShieldCheck, Tag } from 'lucide-react';
import { Link } from 'wouter';
import { brand, brands, contactReasons, faqs, vehicleTypes } from '../config';
import { Button, Card, ColorSelector, ContactReasonCard, FAQAccordion, HeroVehicleVisual, PageLayout, PricingCard, QRCodeTagMockup, SectionHeading, StandardCTA, VehicleTypeCard } from '../components/shared';

const landingVehicles = [
  { name: 'CAR', detail: 'Cars & hatchbacks', icon: CarFront },
  { name: 'SUV', detail: 'Built for more', icon: CarFront },
  { name: 'BIKE', detail: 'Two-wheel rides', icon: Bike },
  { name: 'SCOOTER', detail: 'Everyday rides', icon: Bike },
  { name: 'VAN', detail: 'Room for everyone', icon: BusFront },
];

export function HomePage() {
  const [selectedVehicle, setSelectedVehicle] = useState('CAR');
  const steps = [
    { number: '01', title: 'SCAN', description: 'A passerby scans the QR tag attached to your vehicle.', icon: Tag },
    { number: '02', title: 'SELECT A REASON', description: 'They choose what needs your attention — from lights left on to a parking issue.', icon: MessageCircle },
    { number: '03', title: 'CONTACT THE OWNER', description: 'A private contact flow gives you the context, without showing your number.', icon: ShieldCheck },
  ];
  return <PageLayout>
    <section className="hero-tech-bg relative isolate overflow-hidden px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pt-[76px]">
      <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[.88fr_1.12fr] lg:gap-2">
        <div className="relative z-10 max-w-[590px] py-4 lg:py-8">
          <p className="section-kicker inline-flex items-center gap-2 rounded-[6px] border border-[#BFD8F4] bg-white/85 px-3 py-2 text-[10px] font-bold text-[#155EEF] shadow-[0_2px_8px_rgba(11,31,58,.035)]"><span className="h-1.5 w-1.5 rounded-full bg-[#00B8D9]" /> SMART VEHICLE CONTACT</p>
          <h1 className="mt-6 font-display text-[2.65rem] font-semibold leading-[1.08] tracking-[-.06em] text-[#0B1F3A] sm:text-[3.6rem] lg:text-[4.1rem]">Your Vehicle.<br /><span className="text-[#155EEF]">Always Reachable.</span></h1>
          <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-[#556A81] sm:text-[17px] sm:leading-8">One smart QR tag that lets people contact you when your vehicle needs your attention — while keeping your phone number private.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Button href="/vehicle" className="min-h-[52px] px-6">Get Your QR Tag <ArrowRight size={17} /></Button><Button href="/how-it-works" variant="secondary" className="min-h-[52px] px-6">See How It Works <ArrowDown size={15} /></Button></div>
          <div className="mt-7 flex items-start gap-3 border-l-2 border-[#00B8D9] pl-3.5"><LockKeyhole size={16} className="mt-0.5 shrink-0 text-[#155EEF]" /><p className="text-xs leading-5 text-[#60758B]">A considerate way to reach you on Indian roads.<br /><span className="font-semibold text-[#324A63]">Your personal number stays private.</span></p></div>
        </div>
        <div className="relative -mx-2 min-w-0 sm:mx-0"><HeroVehicleVisual /></div>
      </div>
    </section>

    <section aria-label="Trust and privacy commitments" className="border-y border-[#DAE5EF] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-[#E7EDF3] px-4 sm:px-6 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-8">
        {[
          { icon: ShieldCheck, title: 'PRIVATE BY DESIGN' },
          { icon: Tag, title: 'UNIQUE QR TAG' },
          { icon: LockKeyhole, title: 'NO PHONE NUMBER EXPOSED' },
          { icon: CarFront, title: 'BUILT FOR EVERYDAY VEHICLES' },
        ].map(({ icon: Icon, title }) => <div key={title} className="flex min-h-[74px] items-center gap-2.5 px-2 py-4 sm:gap-3 sm:px-5"><Icon size={17} strokeWidth={1.8} className="shrink-0 text-[#155EEF]" /><span className="text-[9px] font-bold leading-4 tracking-[.095em] text-[#40566E] sm:text-[10px]">{title}</span></div>)}
      </div>
    </section>

    <section className="overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading align="left" eyebrow="A simple heads-up" title="Three steps. A little more peace of mind." description="When someone needs the owner, the path should be simple — and private." />
          <div className="mb-10 hidden h-px flex-1 bg-[#DFEAF4] sm:ml-12 sm:block" />
        </div>
        <div className="relative grid gap-9 md:grid-cols-3 md:gap-7">
          <div className="road-rule absolute left-[15%] right-[15%] top-[25px] hidden h-px md:block" />
          {steps.map(({ number, title, description, icon: Icon }, index) => <div key={number} className="relative grid grid-cols-[52px_1fr] gap-4 md:block md:pr-8">
            <div className="relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#A9C9ED] bg-white text-[#155EEF] shadow-[0_0_0_7px_#F6F9FC]"><Icon size={20} strokeWidth={1.7} /></div>
            <div className="pt-1 md:mt-6"><p className="font-mono text-[11px] font-semibold tracking-[.12em] text-[#1684A6]">{number} / 03</p><h3 className="mt-2 font-display text-lg font-semibold tracking-[-.025em] text-[#0B1F3A]">{title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-[#617287]">{description}</p></div>
            {index === 0 && <div className="absolute -bottom-6 left-[22px] top-[50px] w-px bg-[#CDE0F2] md:hidden" />}
            {index === 1 && <div className="absolute -bottom-6 left-[22px] top-[50px] w-px bg-[#CDE0F2] md:hidden" />}
          </div>)}
        </div>
        <div className="mt-12 grid items-center gap-7 rounded-[16px] border border-[#DCE7F0] bg-white p-5 shadow-[0_6px_20px_rgba(11,31,58,.035)] sm:grid-cols-[1fr_auto] sm:px-8">
          <div className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EAF4FF] text-[#155EEF]"><LockKeyhole size={17} /></span><div><p className="font-display text-sm font-semibold text-[#0B1F3A]">Your number is never shown on the tag</p><p className="mt-1 text-sm leading-6 text-[#64758A]">The QR graphic below is an illustrative preview, not a working code.</p></div></div><div className="flex justify-center sm:justify-end"><QRCodeTagMockup /></div>
        </div>
      </div>
    </section>

    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Useful when it matters" title={<>One tag.<br className="sm:hidden" /> Multiple reasons to reach you.</>} description="A helpful passerby can choose what needs your attention. No need to share your personal number." />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">{contactReasons.map(reason => <ContactReasonCard key={reason.title} reason={reason} />)}</div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-[#EAF4FF] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="absolute inset-y-0 right-0 hidden w-[45%] bg-[radial-gradient(ellipse_at_center,rgba(0,184,217,.09),transparent_65%)] lg:block" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading align="left" eyebrow="The promise is privacy" title="Your number stays private." description="A vehicle needs a way to reach you. That does not mean it needs your phone number in public." />
          <div className="mt-9 space-y-0">
            {[['01', 'SCAN QR', 'A passerby opens a simple contact preview.'], ['02', 'SECURE TAG', 'The tag points to a private contact flow.'], ['03', 'CONTACT OWNER', 'The owner can receive context without showing a number.']].map(([number, title, description], index) => <div key={number} className="relative flex gap-4 pb-6">
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#BED4EA] bg-white font-mono text-[11px] font-bold text-[#155EEF]">{number}</span>
              <div className="pt-0.5"><p className="text-[11px] font-bold tracking-[.12em] text-[#173B60]">{title}</p><p className="mt-1 text-sm leading-6 text-[#62788F]">{description}</p></div>
              {index < 2 && <span aria-hidden="true" className="absolute bottom-1 left-[17px] top-9 w-px bg-[#AFC8E0]" />}
            </div>)}
          </div>
          <p className="mt-1 inline-flex items-center gap-2 text-xs font-semibold text-[#24557B]"><ShieldCheck size={16} className="text-[#155EEF]" /> No personal number appears in this preview.</p>
        </div>
        <div className="relative mx-auto w-full max-w-[530px]">
          <div className="absolute -left-8 top-12 hidden h-[78%] w-3 rounded-full border border-[#B8D5EF] bg-[#D7E9F8] lg:block" />
          <div className="relative overflow-hidden rounded-[20px] border border-[#D0E0EE] bg-white p-5 shadow-[0_24px_55px_rgba(11,31,58,.11)] sm:p-7">
            <div className="flex items-center justify-between border-b border-[#E7EDF3] pb-4"><div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#0B1F3A] text-white"><ShieldCheck size={15} /></span><span className="font-display text-xs font-bold text-[#0B1F3A]">Scan To Owner</span></div><span className="rounded-full border border-[#CDEDDD] bg-[#F2FBF6] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#168653]">PRIVATE PREVIEW</span></div>
            <div className="mt-5 grid gap-5 sm:grid-cols-[.76fr_1fr] sm:items-center">
              <div className="mx-auto flex h-[190px] w-[150px] flex-col items-center rounded-[21px] border-[5px] border-[#0B1F3A] bg-[#F7FAFD] px-3 pt-4 shadow-[0_10px_24px_rgba(11,31,58,.12)] sm:h-[218px] sm:w-[164px]">
                <span className="mb-5 h-1 w-10 rounded-full bg-[#B5C4D2]" />
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF4FF] text-[#155EEF]"><LockKeyhole size={19} /></span>
                <p className="mt-3 text-center font-display text-[10px] font-semibold leading-4 text-[#0B1F3A]">Contacting<br />vehicle owner</p>
                <div className="mt-3 h-1 w-14 rounded-full bg-[#DCE5EF]" />
                <div className="mt-2 h-1 w-10 rounded-full bg-[#E5EBF1]" />
              </div>
              <div className="rounded-[13px] border border-[#DCE7F0] bg-[#F6F9FC] p-4 sm:p-5"><span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white text-[#155EEF] shadow-sm"><ShieldCheck size={18} /></span><p className="mt-4 font-display text-sm font-semibold text-[#0B1F3A]">A private path to the owner</p><p className="mt-2 text-xs leading-5 text-[#62758A]">This is a visual demo. No phone number is shown and no contact is sent.</p><div className="mt-4 flex items-center gap-2 border-t border-[#E0E8F0] pt-3 text-[10px] font-semibold text-[#35536D]"><LockKeyhole size={12} className="text-[#155EEF]" /> Personal number stays private</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="For the way India moves" title="Made for your ride." description="From the school run to a quick stop on a busy street, add a thoughtful contact point to the vehicle you rely on." />
        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="grid grid-cols-2 gap-x-7 gap-y-7 border-y border-[#E0E8F0] py-6 sm:grid-cols-3 lg:gap-x-9">
            {landingVehicles.map(({ name, detail, icon: Icon }) => <button type="button" key={name} aria-pressed={selectedVehicle === name} onClick={() => setSelectedVehicle(name)} className={`group flex min-h-[94px] items-center gap-3 border-b-2 px-2 pb-3 text-left transition ${selectedVehicle === name ? 'border-[#155EEF]' : 'border-transparent hover:border-[#C7D9EC]'}`} data-testid={`landing-vehicle-${name.toLowerCase()}`}><span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] transition ${selectedVehicle === name ? 'bg-[#EAF4FF] text-[#155EEF]' : 'bg-[#F1F5F9] text-[#536B82] group-hover:bg-[#EAF4FF]'}`}><Icon size={23} strokeWidth={1.6} /></span><span><span className="block font-display text-[11px] font-bold tracking-[.09em] text-[#0B1F3A]">{name}</span><span className="mt-1 block text-[10px] leading-4 text-[#6B7B8D]">{detail}</span></span></button>)}
          </div>
          <div className="relative overflow-hidden rounded-[17px] border border-[#C9D9E8] bg-[linear-gradient(145deg,#F7FAFD,#E7F1FA)] p-5 sm:p-7">
            <div className="absolute right-0 top-0 h-full w-[38%] bg-[radial-gradient(ellipse_at_top_right,rgba(0,184,217,.12),transparent_70%)]" />
            <div className="relative mb-4 flex items-center justify-between"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#536C84]">Vehicle preview</p><span className="rounded-[5px] border border-[#CFDCE8] bg-white/75 px-2 py-1 text-[9px] font-semibold tracking-wide text-[#6B7B8D]">MOCK DATA</span></div>
            <div className="relative flex min-h-[155px] items-center justify-center overflow-hidden rounded-[12px] border border-white/80 bg-white/55">
              <div className="absolute bottom-7 left-[13%] right-[13%] h-4 rounded-full bg-[#A9C3D9]/40 blur-md" />
              <svg viewBox="0 0 480 200" role="img" aria-label={`Illustrative ${selectedVehicle.toLowerCase()} vehicle preview`} className="relative w-full max-w-[460px] px-5">
                <path d="M42 127c6-13 15-20 30-26l69-22 40-43c9-10 21-15 35-15h65c18 0 33 8 44 22l32 39 49 11c16 4 26 14 30 29l4 18H37l5-13Z" fill="#155EEF" stroke="#0B1F3A" strokeWidth="3" />
                <path d="m157 77 32-34c6-7 14-10 24-10h67c13 0 23 6 31 16l23 28H157Z" fill="#C5E3F4" stroke="#E8F4FB" strokeWidth="3" />
                <path d="M254 34v43m58-28 22 28" stroke="#7F9EB7" strokeWidth="2" />
                <path d="M39 126h51m292 0h50" stroke="#D9F1FF" strokeWidth="6" strokeLinecap="round" />
                <circle cx="131" cy="137" r="28" fill="#0B1F3A" /><circle cx="353" cy="137" r="28" fill="#0B1F3A" /><circle cx="131" cy="137" r="13" fill="#C6D7E5" /><circle cx="353" cy="137" r="13" fill="#C6D7E5" />
              </svg>
            </div>
            <div className="relative mt-4 flex flex-wrap items-end justify-between gap-3"><div><p className="font-display text-xl font-semibold tracking-[-.04em] text-[#0B1F3A]">Tata Nexon</p><p className="mt-1 text-xs text-[#61758A]">Blue <span className="mx-1 text-[#A2B0BE]">/</span> MP04AB1234</p></div><span className="rounded-[7px] border border-[#DCE6EF] bg-white px-2.5 py-1.5 text-[10px] font-semibold text-[#446079]">Selected: {selectedVehicle}</span></div>
            <p className="relative mt-4 border-t border-[#D7E2EC] pt-3 text-[10px] leading-4 text-[#6D7E90]">Illustrative vehicle details only. This preview is not saved or submitted.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl"><SectionHeading eyebrow="Straightforward pricing" title="A small tag. A sensible price." description="Choose the tag preview that feels right. No subscriptions to keep the concept working." /><div className="grid gap-4 md:grid-cols-2"><PricingCard /><PricingCard smart /></div><p className="mt-5 text-center text-xs text-[#738398]">Preview pricing in Indian Rupees. No purchase is processed here.</p></div>
    </section>

    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl"><SectionHeading eyebrow="Good to know" title="Questions, answered." /><FAQAccordion items={faqs.slice(0, 6)} /><div className="mt-5 text-center"><Button href="/faq" variant="quiet">See all FAQs <ArrowRight size={15} /></Button></div></div>
    </section>
    <StandardCTA />
  </PageLayout>;
}

export function PricingPage() {
  const rows = [['Unique QR Tag', true, true], ['Vehicle Profile', true, true], ['Contact Events', true, true], ['Owner Dashboard', true, true], ['Basic Support', true, true], ['Everything in Basic', false, true], ['Advanced Contact Features', false, true], ['Priority Support', false, true], ['Future Smart Calling', false, true]];
  return <PageLayout><section className="px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8"><div className="mx-auto max-w-5xl"><SectionHeading eyebrow="Pricing, without surprises" title="Choose your kind of peace of mind." description="Both tag previews are designed to keep your number private. Pick the experience that feels right for your vehicle." /><div className="grid gap-5 md:grid-cols-2"><PricingCard /><PricingCard smart /></div><div className="mt-14"><div className="mb-5 flex items-end justify-between gap-4"><div><p className="section-kicker text-[10px] font-bold uppercase text-[#155EEF]">At a glance</p><h2 className="mt-2 font-display text-xl font-semibold text-[#0B1F3A]">Compare the details</h2></div><span className="hidden text-xs text-[#78889A] sm:block">Preview plans</span></div><Card className="overflow-hidden"><div className="grid grid-cols-[1fr_72px_72px] items-center bg-[#F2F7FC] px-4 py-4 text-[10px] font-bold uppercase tracking-[.1em] text-[#61758A] sm:grid-cols-[1fr_130px_130px]"><span>Included</span><span className="text-center">Basic</span><span className="text-center">Smart</span></div>{rows.map(([label, basic, smart]) => <div key={String(label)} className="grid min-h-[54px] grid-cols-[1fr_72px_72px] items-center border-t border-[#E8EEF4] px-4 py-3 text-[12px] sm:grid-cols-[1fr_130px_130px] sm:text-sm"><span className="pr-2 font-medium text-[#465A70]">{label}</span><span className="flex justify-center">{basic ? <Check className="text-[#12A76A]" size={17} /> : <span className="text-[#B9C5D1]">—</span>}</span><span className="flex justify-center">{smart ? <Check className="text-[#12A76A]" size={17} /> : <span className="text-[#B9C5D1]">—</span>}</span></div>)}</Card><p className="mt-4 text-xs text-[#718196]">Illustrative prices shown in Indian Rupees (₹). No purchase or payment is processed here.</p></div></div></section><StandardCTA /></PageLayout>;
}

export function HowItWorksPage() {
  const items = [
    ['01', 'Buy a QR tag', 'Choose a Basic or Smart tag for your vehicle. This preview does not process an order.'],
    ['02', 'Login with mobile', 'In a live product, an owner would use their mobile number to access the vehicle setup flow. This demo does not authenticate.'],
    ['03', 'Activate your tag', 'A tag would be connected to an owner profile. No activation is performed in this preview.'],
    ['04', 'Add your vehicle', 'Select a vehicle type, brand, and details. The setup page is a local visual preview only.'],
    ['05', 'Attach QR to vehicle', 'Place the tag where it is easy to spot from outside.'],
    ['06', 'Someone scans it', 'A passerby opens a contact preview.'],
    ['07', 'They select why they need to contact you', 'They choose a reason, such as a parking issue or lights left on. No message is sent in this demo.'],
    ['08', 'Owner can respond', 'A future live experience would give the owner context to respond on their terms.'],
  ];
  return <PageLayout><section className="px-4 pb-12 pt-14 sm:px-6 sm:pt-20 lg:px-8"><div className="mx-auto max-w-5xl"><SectionHeading eyebrow="How it works" title="From a scan to a helpful heads-up." description="A small tag gives someone who needs you a simple way to get your attention — without putting your personal number on display." />
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute bottom-10 left-[22px] top-10 w-px bg-gradient-to-b from-[#155EEF] via-[#00B8D9] to-[#DCE5EF] sm:left-[27px]" />
      {items.map(([number, title, description], index) => <div key={number} className="relative flex gap-5 pb-5 sm:gap-7">
        <span className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white font-mono text-[11px] font-bold ${index < 3 ? 'border-[#AAC9EB] text-[#155EEF] shadow-[0_0_0_5px_#F6F9FC]' : 'border-[#DCE5EF] text-[#708198]'}`}>{number}</span>
        <Card className={`mb-1 flex-1 p-5 sm:px-6 ${index === 0 || index === 6 ? 'border-[#C6D9ED]' : ''}`}><p className="font-display text-base font-semibold text-[#0B1F3A] sm:text-lg">{title}</p><p className="mt-1.5 text-sm leading-6 text-[#617287]">{description}</p></Card>
      </div>)}
    </div>
    <div className="mt-9 rounded-[14px] border border-[#CFE2EF] bg-[#E9FBFF] p-5 text-sm leading-6 text-[#456379]"><div className="flex gap-3"><ShieldCheck className="mt-0.5 shrink-0 text-[#155EEF]" size={18} /><p><span className="font-semibold text-[#0B1F3A]">A demo, not a live service.</span> The mobile, activation, vehicle setup, and contact steps shown here do not authenticate, send messages, or save details.</p></div></div>
  </div></section><StandardCTA /></PageLayout>;
}

export function FAQPage() {
  return <PageLayout><section className="px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8"><div className="mx-auto max-w-3xl"><SectionHeading eyebrow="Frequently asked questions" title="Good questions deserve clear answers." description="A few useful details before deciding whether a QR tag belongs on your vehicle." /><FAQAccordion items={faqs} /><div className="mt-10 border-t border-[#DCE5EF] pt-7"><p className="font-display text-lg font-semibold text-[#0B1F3A]">Still have a question?</p><p className="mt-1 text-sm text-[#64758A]">The demo contact form is ready for a local preview.</p><Button href="/contact" variant="secondary" className="mt-4">Contact us <ArrowRight size={15} /></Button></div></div></section></PageLayout>;
}

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return <PageLayout><section className="px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
    <div><SectionHeading align="left" eyebrow="Contact" title="A real person is here to help." description="Ask us about your tag, setup, or a vehicle detail. This demo form confirms locally and does not send a message." /><div className="space-y-4">
      <Card className="flex items-start gap-4 p-5"><span className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-[#EAF4FF] text-[#155EEF]"><Mail size={19} /></span><div><p className="font-display text-sm font-semibold text-[#0B1F3A]">Write to our team</p><p className="mt-1 text-sm leading-6 text-[#64758A]">Use the form and we will be glad to help.</p></div></Card>
      <Card className="flex items-start gap-4 p-5"><span className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-[#E9FBFF] text-[#087B91]"><Clock3 size={19} /></span><div><p className="font-display text-sm font-semibold text-[#0B1F3A]">Thoughtful support</p><p className="mt-1 text-sm leading-6 text-[#64758A]">Tell us a little about what you need.</p></div></Card>
      <p className="flex items-center gap-2 text-xs text-[#718196]"><MapPin size={14} className="text-[#155EEF]" /> Built for vehicle owners across India</p>
    </div></div>
    <Card className="p-5 sm:p-8">{sent ? <div className="flex min-h-[380px] flex-col items-center justify-center text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EDFAF4] text-[#12A76A]"><Check size={26} /></span><h2 className="mt-5 font-display text-2xl font-semibold text-[#0B1F3A]">Thanks for reaching out.</h2><p className="mt-2 max-w-sm text-sm leading-6 text-[#617287]">Your demo message is confirmed on this page. No message was sent or stored.</p><Button variant="secondary" className="mt-6" onClick={() => setSent(false)}>Send another demo message</Button></div> : <form onSubmit={handleSubmit} className="space-y-5">
      <div><label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-[#263F59]">Your name</label><input id="contact-name" required placeholder="Name" className="h-12 w-full rounded-[10px] border border-[#D5E0EA] bg-white px-4 text-sm text-[#0B1F3A] outline-none placeholder:text-[#9AA8B7] focus:border-[#155EEF] focus:ring-2 focus:ring-[#155EEF]/10" data-testid="input-contact-name" /></div>
      <div><label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-[#263F59]">Email address</label><input id="contact-email" type="email" required placeholder="you@example.com" className="h-12 w-full rounded-[10px] border border-[#D5E0EA] bg-white px-4 text-sm text-[#0B1F3A] outline-none placeholder:text-[#9AA8B7] focus:border-[#155EEF] focus:ring-2 focus:ring-[#155EEF]/10" data-testid="input-contact-email" /></div>
      <div><label htmlFor="contact-topic" className="mb-2 block text-sm font-semibold text-[#263F59]">What can we help with?</label><select id="contact-topic" className="h-12 w-full rounded-[10px] border border-[#D5E0EA] bg-white px-4 text-sm text-[#44596F] outline-none focus:border-[#155EEF] focus:ring-2 focus:ring-[#155EEF]/10" data-testid="select-contact-topic"><option>Tag and orders</option><option>Vehicle setup</option><option>Privacy question</option><option>Something else</option></select></div>
      <div><label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-[#263F59]">Message</label><textarea id="contact-message" required rows={4} placeholder="Tell us a little about it..." className="w-full resize-y rounded-[10px] border border-[#D5E0EA] bg-white px-4 py-3 text-sm text-[#0B1F3A] outline-none placeholder:text-[#9AA8B7] focus:border-[#155EEF] focus:ring-2 focus:ring-[#155EEF]/10" data-testid="input-contact-message" /></div>
      <p className="rounded-[9px] bg-[#F2F7FC] px-3 py-2.5 text-xs leading-5 text-[#63768B]">Demo form only — no information is transmitted or stored.</p><Button type="submit" className="w-full sm:w-auto">Send demo message <ArrowRight size={16} /></Button>
    </form>}</Card>
  </div></section></PageLayout>;
}

export function LoginPage() {
  const [mobile, setMobile] = useState('');
  const [continued, setContinued] = useState(false);
  const [error, setError] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const digits = mobile.replace(/\D/g, ''); if (digits.length !== 10) { setError('Enter a valid 10-digit mobile number.'); setContinued(false); return; } setError(''); setContinued(true); }
  return <PageLayout><section className="px-4 py-12 sm:px-6 sm:py-20"><div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[1fr_.85fr] md:gap-10">
    <div className="relative hidden overflow-hidden rounded-[18px] border border-[#CEE0EF] bg-[#EAF4FF] p-8 sm:p-10 md:block"><div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#BDD6ED]" /><div className="absolute -right-7 -top-11 h-44 w-44 rounded-full border border-[#CEE0EF]" /><span className="relative flex h-12 w-12 items-center justify-center rounded-[12px] bg-white text-[#155EEF] shadow-sm"><ShieldCheck size={24} /></span><p className="section-kicker relative mt-8 text-[10px] font-bold uppercase text-[#155EEF]">A considered way to connect</p><h1 className="relative mt-3 max-w-sm font-display text-[2.4rem] font-semibold leading-[1.14] tracking-[-.05em] text-[#0B1F3A]">Private contact starts here.</h1><p className="relative mt-4 max-w-sm text-sm leading-7 text-[#5E7288]">Continue the vehicle setup preview. Your personal number is not shown on the public scan page.</p><div className="relative mt-8 flex items-center gap-3 rounded-[12px] border border-white/80 bg-white/75 p-4"><LockKeyhole size={18} className="text-[#12A76A]" /><span className="text-sm font-medium text-[#40566E]">Your details stay yours.</span></div></div>
    <Card className="p-6 sm:p-9"><Link href="/" className="text-sm font-semibold text-[#155EEF] hover:text-[#0B1F3A]">← Back to home</Link><div className="mt-7"><p className="section-kicker text-[10px] font-bold uppercase text-[#155EEF]">Owner preview</p><h2 className="mt-2 font-display text-[1.8rem] font-semibold tracking-[-.04em] text-[#0B1F3A]">Welcome back</h2><p className="mt-2 text-sm leading-6 text-[#617287]">Enter a mobile number to preview the next step.</p></div><div className="mt-5 rounded-[10px] border border-[#F1D8A8] bg-[#FFF9EF] p-3 text-xs leading-5 text-[#876321]"><span className="font-semibold">Demo only:</span> this form does not authenticate or send an OTP.</div>
      <form onSubmit={submit} className="mt-6"><label htmlFor="mobile" className="mb-2 block text-sm font-semibold text-[#263F59]">Mobile number</label><div className="flex rounded-[10px] border border-[#D5E0EA] bg-white focus-within:border-[#155EEF] focus-within:ring-2 focus-within:ring-[#155EEF]/10"><span className="flex items-center border-r border-[#E3E9EF] px-3 text-sm font-medium text-[#5E7186]">+91</span><input id="mobile" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={10} value={mobile} onChange={event => { setMobile(event.target.value.replace(/\D/g, '').slice(0, 10)); setContinued(false); }} placeholder="10-digit number" className="h-12 min-w-0 flex-1 rounded-r-[10px] px-3 text-sm text-[#0B1F3A] outline-none placeholder:text-[#9AA8B7]" data-testid="input-mobile-number" /></div>{error && <p role="alert" className="mt-2 text-sm text-[#C83F35]">{error}</p>}<Button type="submit" className="mt-5 w-full">Continue <ArrowRight size={16} /></Button></form>
      {continued && <div role="status" className="mt-5 rounded-[10px] border border-[#C8E4F0] bg-[#F0FBFE] p-4 text-sm leading-6 text-[#325F73]"><span className="font-semibold">Preview only:</span> No OTP was sent and no sign-in took place.</div>}<p className="mt-6 text-center text-xs leading-5 text-[#77879A]">Nothing is verified, stored, or sent in this demo.</p>
    </Card>
  </div></section></PageLayout>;
}

export function VehiclePage() {
  const [type, setType] = useState('Car');
  const [brandName, setBrandName] = useState('');
  const [query, setQuery] = useState('');
  const [color, setColor] = useState('Blue');
  const [stage, setStage] = useState(false);
  const [notice, setNotice] = useState('');
  const filtered = useMemo(() => brands.filter(name => name.toLowerCase().includes(query.toLowerCase())), [query]);
  const previewColor = ({ White: { background: '#F7FAFC', foreground: '#AAB9C8', seat: '#D8E2EB' }, Black: { background: '#E8EDF2', foreground: '#1A3047', seat: '#8C9BA9' }, Silver: { background: '#F0F4F7', foreground: '#8B9BAA', seat: '#CCD6DF' }, Grey: { background: '#E8EDF2', foreground: '#536C82', seat: '#BECAD4' }, Blue: { background: '#EAF4FF', foreground: '#155EEF', seat: '#BADBF0' }, Red: { background: '#FFF0EE', foreground: '#B94A45', seat: '#E7C2BD' }, Green: { background: '#EDF8F4', foreground: '#218C67', seat: '#C1E1D4' }, Yellow: { background: '#FFF8E9', foreground: '#A77B21', seat: '#F0DDAE' }, Orange: { background: '#FFF3E9', foreground: '#BE7136', seat: '#ECD0B5' }, Brown: { background: '#F5F0EB', foreground: '#8B5E3C', seat: '#DFCEC0' }, Purple: { background: '#F3F0FA', foreground: '#7660A8', seat: '#D2CAE7' }, Other: { background: '#EEF3F8', foreground: '#71869A', seat: '#C8D5E0' } } as Record<string, { background: string; foreground: string; seat: string }>)[color];
  function finishStep() { if (!brandName) { setNotice('Choose a vehicle brand to continue.'); return; } setNotice('Preview only — vehicle setup is not submitted or saved.'); setStage(true); }
  return <PageLayout>
    <section className="border-b border-[#DCE5EF] bg-white px-4 py-4 sm:px-6"><div className="mx-auto flex max-w-6xl items-center justify-between"><Link href="/" className="font-display text-sm font-semibold text-[#0B1F3A]">← Scan To Owner</Link><span className="rounded-[6px] border border-[#DCE5EF] bg-[#F6F9FC] px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-[#62758A]">SETUP PREVIEW</span></div></section>
    <section className="px-4 pb-16 pt-8 sm:px-6 sm:pt-10"><div className="mx-auto max-w-6xl">
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-kicker text-[10px] font-bold uppercase text-[#155EEF]">VEHICLE SETUP · PREVIEW</p><h1 className="mt-2 font-display text-[1.9rem] font-semibold leading-tight tracking-[-.045em] text-[#0B1F3A] sm:text-[2.4rem]">Let’s set up your vehicle</h1><p className="mt-2 max-w-xl text-sm leading-6 text-[#617287]">This helps make the scan experience feel familiar to anyone who finds your tag.</p></div><div className="sm:w-[260px]"><div className="flex justify-between text-[10px] font-semibold text-[#708197]"><span>STEP 1 OF 4</span><span>Vehicle details</span></div><div className="mt-2 flex gap-1.5">{[1, 2, 3, 4].map(number => <span key={number} className={`h-[4px] flex-1 rounded-full ${number === 1 ? 'bg-[#155EEF]' : 'bg-[#DCE5EF]'}`} />)}</div></div></div>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]"><div className="space-y-5">
        <Card className="p-5 sm:p-6"><div className="mb-4 flex items-end justify-between gap-3"><div><p className="section-kicker text-[10px] font-bold uppercase text-[#155EEF]">01 / VEHICLE TYPE</p><h2 className="mt-1 font-display text-lg font-semibold text-[#0B1F3A]">What vehicle do you have?</h2></div><span className="hidden text-[10px] text-[#8391A0] sm:block">Choose one for preview</span></div><div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">{vehicleTypes.map(item => <VehicleTypeCard key={item.name} {...item} selected={type === item.name} onClick={() => { setType(item.name); setNotice(''); }} />)}</div></Card>
        <Card className="p-5 sm:p-6"><label htmlFor="brand-search" className="block"><span className="section-kicker text-[10px] font-bold uppercase text-[#155EEF]">02 / BRAND</span><span className="mt-1 block font-display text-lg font-semibold text-[#0B1F3A]">Vehicle brand</span></label><p className="mb-4 mt-1 text-sm text-[#718196]">Search and select a brand for this visual preview.</p><div className="relative"><Search className="absolute left-3 top-3.5 text-[#8393A4]" size={17} /><input id="brand-search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search brands" className="h-11 w-full rounded-[10px] border border-[#D5E0EA] bg-white pl-10 pr-4 text-sm text-[#0B1F3A] outline-none placeholder:text-[#9AA8B7] focus:border-[#155EEF] focus:ring-2 focus:ring-[#155EEF]/10" data-testid="input-brand-search" /></div><div className="mt-3 flex flex-wrap gap-2">{filtered.map(name => <button type="button" key={name} onClick={() => { setBrandName(name); setQuery(name); setNotice(''); }} aria-pressed={brandName === name} className={`min-h-9 rounded-[8px] border px-3 py-2 text-xs font-medium transition ${brandName === name ? 'border-[#155EEF] bg-[#EEF5FF] text-[#155EEF]' : 'border-[#DCE5EF] bg-white text-[#53677D] hover:border-[#ADC8E2]'}`} data-testid={`brand-${name.toLowerCase().replaceAll(' ', '-')}`}>{name}</button>)}{filtered.length === 0 && <p className="py-2 text-sm text-[#718196]">No matching brand. Try another search.</p>}</div></Card>
        <Card className="p-5 sm:p-6"><p className="section-kicker text-[10px] font-bold uppercase text-[#155EEF]">03 / COLOUR</p><h2 className="mb-4 mt-1 font-display text-lg font-semibold text-[#0B1F3A]">Vehicle colour</h2><ColorSelector selected={color} onChange={setColor} /></Card>
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between"><Button href="/" variant="secondary">Save for later</Button><Button onClick={finishStep}>Continue <ArrowRight size={16} /></Button></div>{notice && <p role="status" className={`rounded-[9px] px-3 py-2 text-sm ${stage ? 'border border-[#CBE1F0] bg-[#F0FBFE] text-[#326176]' : 'border border-[#F1D8A8] bg-[#FFF9EF] text-[#876321]'}`}>{notice}</p>}
      </div><div className="lg:sticky lg:top-[94px] lg:self-start"><Card className="overflow-hidden border-[#D3E0EC]"><div className="flex items-center justify-between border-b border-[#E4EBF2] bg-white px-5 py-4"><div><p className="section-kicker text-[9px] font-bold uppercase text-[#155EEF]">LIVE VISUAL</p><p className="mt-1 text-xs font-semibold text-[#334B63]">Vehicle preview</p></div><span className="rounded-[5px] border border-[#DCE5EF] bg-[#F6F9FC] px-2 py-1 text-[9px] font-bold tracking-wide text-[#718196]">MOCKUP</span></div><div className="p-5 sm:p-6"><div style={{ backgroundColor: previewColor.background, color: previewColor.foreground }} className="relative flex h-[190px] items-center justify-center overflow-hidden rounded-[13px] border border-black/[.03] transition-colors duration-300"><div className="absolute inset-0 opacity-50 soft-grid" /><div className="absolute bottom-8 left-[15%] right-[15%] h-4 rounded-full bg-[#0B1F3A]/10 blur-md" /><svg viewBox="0 0 480 200" role="img" aria-label={`${color} vehicle illustration`} className="relative w-[96%] max-w-[420px]"><path d="M42 127c6-13 15-20 30-26l69-22 40-43c9-10 21-15 35-15h65c18 0 33 8 44 22l32 39 49 11c16 4 26 14 30 29l4 18H37l5-13Z" fill="currentColor" stroke="#0B1F3A" strokeWidth="3" /><path d="m157 77 32-34c6-7 14-10 24-10h67c13 0 23 6 31 16l23 28H157Z" fill={previewColor.seat} stroke="#EAF1F7" strokeWidth="3" /><path d="M254 34v43m58-28 22 28" stroke="#7892A9" strokeWidth="2" /><path d="M39 126h51m292 0h50" stroke="#D9F1FF" strokeWidth="6" strokeLinecap="round" /><circle cx="131" cy="137" r="28" fill="#0B1F3A" /><circle cx="353" cy="137" r="28" fill="#0B1F3A" /><circle cx="131" cy="137" r="13" fill="#BFCEDB" /><circle cx="353" cy="137" r="13" fill="#BFCEDB" /></svg><span className="absolute bottom-3 right-3 rounded-[5px] border border-white/80 bg-white/70 px-2 py-1 text-[9px] font-semibold text-[#38536C]">{type}</span></div>
          <div className="mt-5"><p className="section-kicker text-[9px] font-bold uppercase text-[#7B8A9A]">VEHICLE NAME</p><p className="mt-1 font-display text-xl font-semibold tracking-[-.03em] text-[#0B1F3A]">{brandName || 'Your vehicle'}</p><div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium"><span className="rounded-[6px] border border-[#E0E7EE] bg-[#F6F9FC] px-2.5 py-1.5 text-[#53677D]">{type}</span><span className="rounded-[6px] border border-[#CFE0F1] bg-[#EEF5FF] px-2.5 py-1.5 text-[#155EEF]">{color}</span></div></div><p className="mt-5 rounded-[9px] border border-[#E4EBF2] bg-[#F7FAFC] p-3 text-xs leading-5 text-[#6A7D91]">Setup preview only. Vehicle details are not submitted or saved.</p></div></Card><div className="mt-4 flex gap-3 rounded-[12px] border border-[#CBE7E9] bg-[#F0FBFC] p-4"><ShieldCheck className="shrink-0 text-[#138BA0]" size={19} /><p className="text-xs leading-5 text-[#466979]">This preview does not publish vehicle details or expose a phone number.</p></div></div></div>
    </div></section>
  </PageLayout>;
}

export function ScanPage() {
  const [reason, setReason] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [contacted, setContacted] = useState(false);
  const [note, setNote] = useState('');
  function send() { if (!reason) { setNote('Choose a reason so the owner knows what needs attention.'); return; } setConfirmed(true); setNote(''); }
  return <div className="min-h-[100dvh] bg-[#F2F6FA] px-4 py-5 sm:py-10"><div className="mx-auto max-w-md">
    <header className="mb-5 flex items-center justify-between"><Link href="/" className="flex items-center gap-2 font-display text-sm font-bold text-[#0B1F3A]"><span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#0B1F3A] text-white"><ShieldCheck size={16} /></span>Scan To Owner</Link><span className="rounded-[6px] border border-[#CFE5D9] bg-[#F2FBF6] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[.1em] text-[#188455]">Demo scan</span></header>
    <Card className="overflow-hidden shadow-[0_14px_40px_rgba(11,31,58,.075)]"><div className="relative overflow-hidden bg-[#0B1F3A] px-6 pb-6 pt-7 text-white"><div className="absolute -right-8 -top-20 h-48 w-48 rounded-full border border-white/[.08]" /><div className="absolute -right-2 -top-14 h-36 w-36 rounded-full border border-white/[.07]" /><p className="section-kicker relative text-[9px] font-bold uppercase text-[#9ADAE8]">VEHICLE OWNER CONTACT</p><h1 className="relative mt-2 font-display text-2xl font-semibold tracking-[-.035em]">How can we help?</h1><p className="relative mt-2 text-sm text-[#C0D0E0]">Send the owner a helpful, private heads-up.</p></div>
      <div className="p-5 sm:p-6"><div className="flex items-center gap-4 rounded-[12px] border border-[#DCE5EF] bg-[#F6F9FC] p-4"><div className="flex h-14 w-16 items-center justify-center rounded-[10px] bg-white text-[#155EEF]"><CarFront size={38} strokeWidth={1.4} /></div><div><p className="font-display font-semibold text-[#0B1F3A]">Tata Nexon</p><p className="mt-0.5 text-sm text-[#62758A]">Blue <span className="mx-1 text-[#A3B0BE]">·</span> MP04AB1234</p></div><span className="ml-auto self-start rounded-[5px] border border-[#DCE5EF] bg-white px-2 py-1 text-[8px] font-bold tracking-wide text-[#718196]">MOCK</span></div>
        {contacted ? <div role="status" className="mt-6 rounded-[12px] border border-[#CDE8DA] bg-[#F1FBF6] p-5 text-center"><span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#12A76A]"><Check size={22} /></span><h2 className="mt-3 font-display font-semibold text-[#0B1F3A]">Demo contact complete</h2><p className="mt-2 text-sm leading-6 text-[#5D7186]">In a live experience, the owner would be notified securely. No contact was sent and no phone number is shown.</p><button onClick={() => { setContacted(false); setConfirmed(false); setReason(''); }} className="mt-4 min-h-10 rounded-[8px] px-3 text-sm font-semibold text-[#155EEF] hover:bg-white" data-testid="button-start-demo-again">Start another demo</button></div>
        : confirmed ? <div className="mt-6 rounded-[12px] border border-[#C9DDF1] bg-[#F1F7FD] p-5"><span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-white text-[#155EEF]"><CircleCheck size={21} /></span><h2 className="mt-4 font-display text-lg font-semibold text-[#0B1F3A]">Ready to let the owner know?</h2><p className="mt-1 text-sm text-[#5D7186]">You are contacting the owner about: <span className="font-semibold text-[#223E5C]">{reason}</span></p><p className="mt-3 text-xs leading-5 text-[#718196]">The owner's phone number stays private. This is a demo; nothing will be sent.</p><div className="mt-5 flex flex-col gap-2"><Button onClick={() => setContacted(true)} className="w-full"><MessageCircle size={16} /> Contact Owner</Button><Button variant="secondary" className="w-full" onClick={() => setConfirmed(false)}>Change reason</Button></div></div>
        : <><h2 className="mb-3 mt-6 text-sm font-semibold text-[#18324D]">Choose a reason to contact the owner</h2><div className="space-y-2">{contactReasons.map(item => <button type="button" key={item.title} onClick={() => { setReason(item.title); setNote(''); }} aria-pressed={reason === item.title} className={`flex min-h-12 w-full items-center justify-between rounded-[10px] border px-4 py-3 text-left text-sm font-medium transition ${reason === item.title ? 'border-[#155EEF] bg-[#F1F7FF] text-[#155EEF]' : 'border-[#DCE5EF] bg-white text-[#4D6075] hover:border-[#B6CEE5]'}`} data-testid={`scan-reason-${item.title.toLowerCase().replaceAll(' ', '-')}`}><span>{item.title}</span>{reason === item.title && <Check size={17} />}</button>)}</div><Button onClick={send} className="mt-5 w-full">Continue <ArrowRight size={16} /></Button>{note && <p role="alert" className="mt-3 text-sm text-[#A96D16]">{note}</p>}</>}
        <div className="mt-5 flex items-center justify-center gap-1.5 border-t border-[#E8EEF4] pt-4 text-[10px] text-[#708196]"><LockKeyhole size={12} className="text-[#155EEF]" /> The owner's phone number is never displayed</div>
      </div>
    </Card>
    <p className="mt-4 text-center text-[10px] text-[#8291A1]">Demo preview · Tag ID STO-DEMO123 · Nothing is sent</p>
  </div></div>;
}
