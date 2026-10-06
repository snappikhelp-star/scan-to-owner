import { type ReactNode, useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Bike, BusFront, CarFront, Check, ChevronDown, CircleHelp, KeyRound, Lightbulb, LockKeyhole, Menu, MessageCircle, ParkingCircle, ShieldCheck, Siren, Wrench, X } from 'lucide-react';
import { brand } from '../config';

export function Button({ children, href, variant = 'primary', onClick, className = '', type = 'button' }: { children: ReactNode; href?: string; variant?: 'primary' | 'secondary' | 'quiet'; onClick?: () => void; className?: string; type?: 'button' | 'submit' }) {
  const base = 'inline-flex min-h-12 items-center justify-center gap-2 rounded-[11px] px-5 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2';
  const style = variant === 'primary'
    ? 'bg-[#155EEF] text-white shadow-[0_5px_14px_rgba(21,94,239,.16)] hover:-translate-y-0.5 hover:bg-[#104fcf] hover:shadow-[0_9px_22px_rgba(21,94,239,.20)] active:translate-y-0'
    : variant === 'secondary'
      ? 'border border-[#C9D7E6] bg-white text-[#173456] hover:-translate-y-0.5 hover:border-[#155EEF]/40 hover:bg-[#F4F8FF]'
      : 'text-[#43546A] hover:bg-[#EFF4FA] hover:text-[#155EEF]';
  return href
    ? <Link href={href} onClick={onClick} className={`${base} ${style} ${className}`} data-testid="link-action">{children}</Link>
    : <button type={type} onClick={onClick} className={`${base} ${style} ${className}`} data-testid="button-action">{children}</button>;
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[15px] border border-[#DCE5EF] bg-white shadow-[0_3px_14px_rgba(11,31,58,.035)] ${className}`}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: { eyebrow?: string; title: ReactNode; description?: string; align?: 'center' | 'left' }) {
  return <div className={`mb-10 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>{eyebrow && <p className="section-kicker mb-3 text-[11px] font-bold uppercase text-[#155EEF]">{eyebrow}</p>}<h2 className="font-display text-[2rem] font-semibold leading-[1.18] tracking-[-.04em] text-[#0B1F3A] sm:text-[2.55rem]">{title}</h2>{description && <p className="mt-4 text-[15px] leading-7 text-[#5B6B7F] sm:text-base">{description}</p>}</div>;
}

const iconMap: Record<string, typeof CarFront> = { car: CarFront, bike: Bike, scooter: Bike, suv: CarFront, van: BusFront, other: CarFront, parking: ParkingCircle, siren: Siren, light: Lightbulb, key: KeyRound, wrench: Wrench, message: MessageCircle };

export function ContactReasonCard({ reason }: { reason: { title: string; detail: string; icon: string } }) {
  const Icon = iconMap[reason.icon] || CircleHelp;
  const tone: Record<string, string> = {
    'No Parking': 'bg-[#EEF5FF] text-[#155EEF]',
    'Lights On': 'bg-[#E9FBFF] text-[#087B91]',
    Emergency: 'bg-[#FFF1EF] text-[#C3483E]',
    'Key Lost': 'bg-[#FFF7E9] text-[#9C6815]',
    'Vehicle Issue': 'bg-[#F0F4F8] text-[#35536D]',
    Other: 'bg-[#F2F5FF] text-[#4F5D93]',
  };
  return <Card className="group flex min-h-[194px] flex-col p-5 transition duration-200 hover:-translate-y-1 hover:border-[#B9D4F7] hover:shadow-[0_12px_28px_rgba(11,31,58,.075)] sm:p-6"><span className={`mb-5 flex h-11 w-11 items-center justify-center rounded-[12px] ${tone[reason.title] || 'bg-[#EEF5FF] text-[#155EEF]'}`}><Icon size={20} strokeWidth={1.8} /></span><h3 className="font-display text-[15px] font-semibold text-[#0B1F3A]">{reason.title}</h3><p className="mt-2 text-sm leading-6 text-[#65758A]">{reason.detail}</p></Card>;
}

export function VehicleTypeCard({ name, description, icon, selected, onClick }: { name: string; description: string; icon: string; selected?: boolean; onClick?: () => void }) {
  const Icon = iconMap[icon] || CarFront;
  return <button type="button" onClick={onClick} aria-pressed={selected} data-testid={`vehicle-type-${name.toLowerCase()}`} className={`min-h-[126px] rounded-[13px] border p-4 text-left transition duration-200 ${selected ? 'border-[#155EEF] bg-[#F1F7FF] shadow-[inset_0_0_0_1px_#155EEF]' : 'border-[#DCE5EF] bg-white hover:border-[#B4CDEF] hover:bg-[#FBFDFF]'}`}><span className={`mb-3 flex h-9 w-9 items-center justify-center rounded-[10px] ${selected ? 'bg-white text-[#155EEF]' : 'bg-[#F1F5F9] text-[#466079]'}`}><Icon size={19} strokeWidth={1.7} /></span><span className="block font-semibold text-[#0B1F3A]">{name}</span><span className="mt-1 block text-xs leading-5 text-[#6C7B8E]">{description}</span></button>;
}

export function VehicleCard({ name, description, icon }: { name: string; description: string; icon: string }) {
  const Icon = iconMap[icon] || CarFront;
  return <div className="flex min-h-[122px] flex-col justify-between border-l-2 border-[#C5D8EE] pl-4 sm:pl-5"><span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#EAF4FF] text-[#155EEF]"><Icon size={20} strokeWidth={1.6} /></span><div className="mt-4"><p className="font-display text-sm font-semibold text-[#0B1F3A]">{name}</p><p className="mt-1 text-xs text-[#718094]">{description}</p></div></div>;
}

export function ColorSelector({ selected, onChange }: { selected: string; onChange: (color: string) => void }) {
  const colors = [{ name: 'White', hex: '#F8FAFC' }, { name: 'Black', hex: '#334155' }, { name: 'Silver', hex: '#CBD5E1' }, { name: 'Grey', hex: '#64748B' }, { name: 'Blue', hex: '#155EEF' }, { name: 'Red', hex: '#D94E45' }, { name: 'Green', hex: '#218C67' }, { name: 'Yellow', hex: '#D8A52B' }, { name: 'Orange', hex: '#D7792E' }, { name: 'Brown', hex: '#8B5E3C' }, { name: 'Purple', hex: '#7660A8' }, { name: 'Other', hex: '#8397AC' }];
  return <div className="flex flex-wrap gap-2.5">{colors.map(color => <button type="button" onClick={() => onChange(color.name)} aria-label={`${color.name} vehicle color`} aria-pressed={selected === color.name} key={color.name} data-testid={`color-${color.name.toLowerCase()}`} className={`inline-flex min-h-10 items-center gap-2 rounded-[10px] border px-3 py-2 text-sm transition ${selected === color.name ? 'border-[#155EEF] bg-[#F2F7FF] text-[#124DBD]' : 'border-[#DCE5EF] bg-white text-[#506174] hover:border-[#AFC7E0]'}`}><span className="h-[15px] w-[15px] rounded-full border border-black/10" style={{ backgroundColor: color.hex }} />{color.name}{selected === color.name && <Check size={13} />}</button>)}</div>;
}

export function PricingCard({ smart = false }: { smart?: boolean }) {
  const price = smart ? brand.pricing.smart : brand.pricing.basic;
  const features = smart ? ['Everything in Basic', 'Advanced Contact Features', 'Priority Support', 'Future Smart Calling'] : ['Unique QR Tag', 'Vehicle Profile', 'Contact Events', 'Owner Dashboard', 'Basic Support'];
  return <Card className={`relative flex h-full flex-col overflow-hidden p-6 sm:p-8 ${smart ? 'border-[#91B9F5] shadow-[0_16px_38px_rgba(21,94,239,.095)]' : ''}`}>
    {smart && <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#155EEF] to-[#00B8D9]" />}
    {smart && <span className="absolute right-5 top-5 rounded-[7px] bg-gradient-to-r from-[#EAF4FF] to-[#E9FBFF] px-2.5 py-1.5 text-[10px] font-bold tracking-[.1em] text-[#155EEF]">MOST POPULAR</span>}
    <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#53677E]">{smart ? 'Smart' : 'Basic'}</p>
    <p className="mt-4 font-display text-[2.75rem] font-semibold leading-none tracking-[-.06em] text-[#0B1F3A]">₹{price}<span className="ml-2 font-sans text-sm font-medium tracking-normal text-[#718094]">/ tag</span></p>
    <p className="mt-3 max-w-xs text-sm leading-6 text-[#627287]">{smart ? 'A little more context, and a little more peace of mind.' : 'A simple, private connection for the vehicle you rely on.'}</p>
    <div className="my-6 h-px bg-[#E8EEF4]" />
    <ul className="mb-7 space-y-3.5">{features.map(feature => <li key={feature} className="flex gap-2.5 text-sm text-[#42546A]"><Check size={17} className="mt-0.5 shrink-0 text-[#12A66A]" />{feature}</li>)}</ul>
    <Button href="/vehicle" variant={smart ? 'primary' : 'secondary'} className="mt-auto w-full">Get Your QR Tag <ArrowRight size={16} /></Button>
  </Card>;
}

export function FAQAccordion({ items }: { items: { q: string; a: string }[]; compact?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  return <div className="divide-y divide-[#DCE5EF]">{items.map((item, i) => <div key={item.q}>
    <button type="button" id={`faq-trigger-${i}`} aria-controls={`faq-panel-${i}`} aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)} data-testid={`faq-question-${i}`} className="flex min-h-[66px] w-full items-center justify-between gap-5 py-5 text-left font-display text-[15px] font-medium leading-6 text-[#0B1F3A] transition hover:text-[#155EEF] sm:text-base">
      <span>{item.q}</span><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DCE5EF] text-[#536A82] transition-transform ${open === i ? 'rotate-180 bg-[#EAF4FF] text-[#155EEF]' : ''}`}><ChevronDown size={16} /></span>
    </button>
    {open === i && <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-trigger-${i}`} className="faq-answer max-w-3xl pr-10 pb-5 text-sm leading-7 text-[#617287]">{item.a}</div>}
  </div>)}</div>;
}

function QRMark({ size = 48 }: { size?: number }) {
  const cells = ['111101111', '100101001', '101101101', '100101001', '111101111', '001010100', '110111011', '100010001', '111011101'];
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 9 9" className="shrink-0">{cells.flatMap((row, y) => [...row].map((cell, x) => cell === '1' ? <rect key={`${x}-${y}`} x={x} y={y} width=".82" height=".82" rx=".08" fill="currentColor" /> : null))}</svg>;
}

export function QRCodeTagMockup() {
  return <div className="relative mx-auto w-full max-w-[345px] px-3 py-5 sm:px-0 sm:py-7"><div className="absolute inset-5 rounded-[24px] bg-[#B8D8FF]/45 blur-2xl" /><div className="tag-shadow relative rounded-[18px] border border-[#D6E1EC] bg-white p-5 sm:p-6">
    <div className="mb-4 flex items-center gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#0B1F3A] text-white"><ShieldCheck size={17} /></span><div><p className="font-display text-xs font-bold text-[#0B1F3A]">{brand.name}</p><p className="text-[9px] font-semibold tracking-[.13em] text-[#75869A]">PRIVATE VEHICLE CONTACT</p></div><span className="ml-auto rounded-[5px] border border-[#D8F1E6] bg-[#F0FBF6] px-2 py-1 text-[9px] font-bold tracking-[.08em] text-[#07864F]">TAG PREVIEW</span></div>
    <div className="flex items-center gap-4 rounded-[13px] border border-[#DCEAF6] bg-[#F3F8FE] p-4"><div className="flex h-[74px] w-[74px] items-center justify-center rounded-[9px] border border-[#D5E2EF] bg-white p-3 text-[#0B1F3A]"><QRMark size={48} /></div><div><p className="font-display text-[11px] font-bold leading-5 tracking-[.08em] text-[#0B1F3A]">SCAN TO CONTACT OWNER</p><p className="mt-1 text-[11px] leading-4 text-[#60748A]">A helpful heads-up, without sharing a number.</p></div></div>
    <div className="mt-4 flex items-center justify-between border-t border-[#E8EEF4] pt-3"><span className="text-[9px] font-semibold uppercase tracking-[.14em] text-[#8A98A8]">Illustrative tag preview</span><span className="font-mono text-[10px] font-medium text-[#60748A]">STO-DEMO123</span></div>
  </div></div>;
}

export function HeroVehicleVisual() {
  return <div className="relative mx-auto aspect-[1.18] w-full max-w-[660px]">
    <div className="absolute left-[12%] top-[9%] h-[76%] w-[76%] rounded-full border border-[#C8DFF5]/65" />
    <div className="absolute left-[21%] top-[18%] h-[58%] w-[58%] rounded-full border border-dashed border-[#D7E9F6]" />
    <div className="absolute bottom-[12%] left-[5%] right-[4%] h-[18%] -skew-x-[17deg] rounded-full bg-[#D9E6F1]/60 blur-xl" />
    <svg viewBox="0 0 680 440" className="absolute inset-0 h-full w-full" role="img" aria-label="Illustration of a modern blue vehicle with a QR tag on the windshield">
      <defs>
        <linearGradient id="bodyBlue" x1="88" x2="540" y1="314" y2="382" gradientUnits="userSpaceOnUse"><stop stopColor="#0B1F3A" /><stop offset=".53" stopColor="#155EEF" /><stop offset="1" stopColor="#2874DB" /></linearGradient>
        <linearGradient id="glassBlue" x1="257" x2="420" y1="217" y2="290" gradientUnits="userSpaceOnUse"><stop stopColor="#D9F2FF" /><stop offset=".55" stopColor="#BDDFF4" /><stop offset="1" stopColor="#8FB8D4" /></linearGradient>
        <linearGradient id="hoodBlue" x1="451" x2="583" y1="299" y2="366" gradientUnits="userSpaceOnUse"><stop stopColor="#4387DC" /><stop offset="1" stopColor="#155EEF" /></linearGradient>
        <filter id="carShadow" x="65" y="183" width="563" height="242" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="12" /></filter>
      </defs>
      <ellipse cx="344" cy="373" rx="238" ry="23" fill="#315477" fillOpacity=".15" filter="url(#carShadow)" />
      <path d="M103 327c7-19 23-34 45-43l86-33 49-66c12-16 30-24 50-24h88c25 0 47 11 63 30l48 58 52 17c16 5 27 19 30 36l5 29c2 14-8 25-22 25H120c-17 0-24-14-17-29Z" fill="url(#bodyBlue)" stroke="#0B1F3A" strokeWidth="4" />
      <path d="m256 246 42-56c8-11 20-17 35-17h86c19 0 35 8 47 23l40 50H256Z" fill="url(#glassBlue)" stroke="#D9E8F3" strokeWidth="4" />
      <path d="M340 175v71M419 175c19 0 35 8 47 23l40 50" stroke="#829FB7" strokeOpacity=".72" strokeWidth="3" />
      <path d="m147 283 83-29 22 1-14 41-106 5c-12 .5-18-12-9-18l24-17Z" fill="#3178C5" fillOpacity=".6" />
      <path d="m469 255 56 4 48 17-63 5-41-26Z" fill="url(#hoodBlue)" />
      <path d="M536 290c23 2 47 8 63 17l6 21h-80l11-38Z" fill="#10449A" fillOpacity=".7" />
      <path d="M116 327h41m394 0h48" stroke="#7DBEFF" strokeLinecap="round" strokeWidth="5" />
      <path d="M139 315c14-9 27-14 44-17m365 5 43 10" stroke="#D9F0FF" strokeLinecap="round" strokeWidth="6" />
      <path d="M224 246v77m293-68 19 70" stroke="#0B1F3A" strokeOpacity=".65" strokeWidth="3" />
      <path d="M300 331c0-27 21-48 48-48s48 21 48 48m77 0c0-27 21-48 48-48s48 21 48 48" stroke="#0B1F3A" strokeWidth="11" />
      <circle cx="348" cy="331" r="28" fill="#DDE7F0" stroke="#0B1F3A" strokeWidth="8" /><circle cx="521" cy="331" r="28" fill="#DDE7F0" stroke="#0B1F3A" strokeWidth="8" />
      <circle cx="348" cy="331" r="9" fill="#7189A0" /><circle cx="521" cy="331" r="9" fill="#7189A0" />
      <path d="m104 333-2 12c-1 7 5 13 12 13h44l3-28-57 3Z" fill="#DCEBFA" /><path d="m592 332 27 5 3 9c1 6-3 11-9 11h-25l4-25Z" fill="#F8C77E" />
      <path d="M489 266h19" stroke="#0B1F3A" strokeLinecap="round" strokeWidth="3" />
      <path d="M281 231h35" stroke="#FFFFFF" strokeOpacity=".62" strokeLinecap="round" strokeWidth="3" />
    </svg>
    <div className="absolute left-[57%] top-[37%] z-10 rotate-[5deg] rounded-[7px] border border-white bg-white p-1.5 shadow-[0_5px_16px_rgba(11,31,58,.2)] sm:p-2"><div className="flex h-[42px] w-[36px] flex-col items-center justify-center rounded-[4px] bg-[#F2F7FC] text-[#0B1F3A] sm:h-[52px] sm:w-[45px]"><QRMark size={27} /><span className="mt-0.5 text-[5px] font-extrabold tracking-tight">SCAN</span></div></div>
    <div className="absolute left-[3%] top-[19%] flex items-center gap-2 rounded-[10px] border border-[#DCE5EF] bg-white/95 px-3 py-2.5 shadow-[0_8px_22px_rgba(11,31,58,.08)] sm:left-0"><span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#FFF6E8] text-[#A66B0B]"><Lightbulb size={16} /></span><span className="text-xs font-semibold text-[#193653]">Lights On</span></div>
    <div className="absolute right-[1%] top-[30%] flex items-center gap-2 rounded-[10px] border border-[#DCE5EF] bg-white/95 px-3 py-2.5 shadow-[0_8px_22px_rgba(11,31,58,.08)]"><span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#EEF5FF] text-[#155EEF]"><ParkingCircle size={16} /></span><span className="text-xs font-semibold text-[#193653]">No Parking</span></div>
    <div className="absolute bottom-[12%] left-[5%] flex items-center gap-2 rounded-[10px] border border-[#DCE5EF] bg-white/95 px-3 py-2.5 shadow-[0_8px_22px_rgba(11,31,58,.08)]"><span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#FFF0EE] text-[#C3483E]"><Siren size={16} /></span><span className="text-xs font-semibold text-[#193653]">Emergency</span></div>
    <div className="absolute bottom-[2%] right-[2%] flex items-center gap-2 rounded-[10px] border border-[#DCE5EF] bg-white/95 px-3 py-2.5 shadow-[0_8px_22px_rgba(11,31,58,.08)]"><span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#E9FBFF] text-[#087B91]"><LockKeyhole size={15} /></span><span className="text-xs font-semibold text-[#193653]">Owner Contact</span></div>
  </div>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['How It Works', '/how-it-works'], ['Pricing', '/pricing'], ['FAQ', '/faq']];
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  return <header className="sticky top-0 z-40 border-b border-[#DCE5EF]/80 bg-white/95 backdrop-blur-xl shadow-[0_3px_16px_rgba(11,31,58,.025)]">
    <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center gap-2.5" data-testid="link-home"><span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#0B1F3A] text-white"><QRMark size={21} /></span><span className="font-display text-[14px] font-bold tracking-[-.035em] text-[#0B1F3A] sm:text-[15px]">{brand.name}</span></Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">{links.map(([label, path]) => <Link key={path} href={path} className="text-[13px] font-medium text-[#506176] transition hover:text-[#155EEF]">{label}</Link>)}</nav>
      <div className="hidden items-center gap-2 md:flex"><Button href="/login" variant="quiet" className="min-h-10 px-4">Login</Button><Button href="/vehicle" className="min-h-10 px-4">Get Your QR <ArrowRight size={15} /></Button></div>
      <button type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#DCE5EF] text-[#0B1F3A] transition hover:bg-[#F2F7FC] md:hidden" data-testid="button-mobile-menu">{open ? <X size={20} /> : <Menu size={20} />}</button>
    </div>
    <div id="mobile-navigation" hidden={!open} className="border-t border-[#E6EDF4] bg-white px-4 pb-5 pt-3 md:hidden"><nav aria-label="Mobile navigation" className="mx-auto max-w-xl">{links.map(([label, path]) => <Link onClick={() => setOpen(false)} key={path} href={path} className="block min-h-12 rounded-[9px] px-3 py-3 text-sm font-medium text-[#334A63] transition hover:bg-[#F2F7FC] hover:text-[#155EEF]">{label}</Link>)}<div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#E6EDF4] pt-4"><Button href="/login" variant="secondary" onClick={() => setOpen(false)}>Login</Button><Button href="/vehicle" onClick={() => setOpen(false)}>Get Your QR</Button></div></nav></div>
  </header>;
}

export function Footer() {
  return <footer className="border-t border-[#DCE5EF] bg-white"><div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start"><div className="max-w-xs"><Link href="/" className="flex items-center gap-2.5 font-display text-sm font-bold text-[#0B1F3A]"><span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#0B1F3A] text-white"><QRMark size={19} /></span>{brand.name}</Link><p className="mt-3 text-sm leading-6 text-[#64758A]">{brand.tagline}</p></div><div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm"><Link href="/how-it-works" className="text-[#53657A] hover:text-[#155EEF]">How it works</Link><Link href="/pricing" className="text-[#53657A] hover:text-[#155EEF]">Pricing</Link><Link href="/faq" className="text-[#53657A] hover:text-[#155EEF]">FAQ</Link><Link href="/contact" className="text-[#53657A] hover:text-[#155EEF]">Contact</Link><Link href="/login" className="text-[#53657A] hover:text-[#155EEF]">Login</Link></div></div><div className="mt-9 flex flex-col gap-2 border-t border-[#E8EEF4] pt-5 text-xs text-[#7B8A9C] sm:flex-row sm:justify-between"><span>© 2025 Scan To Owner. Made for more considerate parking.</span><span>Your phone number stays yours.</span></div></div></footer>;
}

export function PageLayout({ children }: { children: ReactNode }) {
  return <><Navbar /><main className="page-enter min-h-[70vh]">{children}</main><Footer /></>;
}

export function StandardCTA() {
  return <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[18px] bg-[#0B1F3A] px-6 py-14 text-center text-white sm:px-12 sm:py-[76px]"><div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#00B8D9] to-transparent" /><div className="pointer-events-none absolute -right-20 -top-44 h-96 w-96 rounded-full border border-white/[.07]" /><div className="pointer-events-none absolute -right-10 -top-32 h-72 w-72 rounded-full border border-white/[.06]" /><p className="section-kicker text-[10px] font-bold uppercase text-[#8FDDEA]">PRIVATE BY DESIGN</p><h2 className="mx-auto mt-4 max-w-3xl font-display text-[1.9rem] font-semibold leading-tight tracking-[-.04em] sm:text-[2.65rem]">Give your vehicle a smarter way to stay connected.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#C1CFDE] sm:text-base">One QR. Private contact. Peace of mind.</p><Button href="/vehicle" variant="secondary" className="mt-7 border-white bg-white px-6 text-[#155EEF] hover:-translate-y-0.5 hover:bg-[#EAF4FF]">Get Your QR Tag <ArrowRight size={16} /></Button></div></section>;
}
