import { type ReactNode, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CarFront, Check, ChevronDown, CircleHelp, KeyRound, Lightbulb, Menu, MessageCircle, ParkingCircle, ScanLine, ShieldCheck, Siren, Wrench, X, Bike, BusFront, CircleDot, Zap } from 'lucide-react';
import { brand } from '../config';

export function Button({ children, href, variant = 'primary', onClick, className = '', type = 'button' }: { children: ReactNode; href?: string; variant?: 'primary' | 'secondary' | 'quiet'; onClick?: () => void; className?: string; type?: 'button' | 'submit' }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${variant === 'primary' ? 'bg-blue-600 text-white shadow-[0_5px_12px_rgba(37,99,235,.16)] hover:bg-blue-700' : variant === 'secondary' ? 'border border-slate-200 bg-white text-slate-800 hover:border-blue-200 hover:bg-blue-50' : 'text-slate-600 hover:bg-slate-100'} ${className}`;
  return href ? <Link href={href} className={classes} data-testid="link-action">{children}</Link> : <button type={type} onClick={onClick} className={classes} data-testid="button-action">{children}</button>;
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white shadow-[0_4px_18px_rgba(15,23,42,.035)] ${className}`}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: { eyebrow?: string; title: string; description?: string; align?: 'center' | 'left' }) {
  return <div className={`mb-10 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>{eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[.17em] text-blue-600">{eyebrow}</p>}<h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}</div>;
}

const iconMap: Record<string, typeof CarFront> = { car: CarFront, bike: Bike, scooter: Bike, suv: CarFront, van: BusFront, other: CircleDot, parking: ParkingCircle, siren: Siren, light: Lightbulb, key: KeyRound, wrench: Wrench, message: MessageCircle };

export function ContactReasonCard({ reason }: { reason: { title: string; detail: string; icon: string } }) {
  const Icon = iconMap[reason.icon] || CircleHelp;
  return <Card className="p-5 transition hover:-translate-y-0.5 hover:border-blue-200"><span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={20} /></span><h3 className="font-semibold text-slate-900">{reason.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{reason.detail}</p></Card>;
}

export function VehicleTypeCard({ name, description, icon, selected, onClick }: { name: string; description: string; icon: string; selected?: boolean; onClick?: () => void }) {
  const Icon = iconMap[icon] || CarFront;
  return <button type="button" onClick={onClick} aria-pressed={selected} data-testid={`vehicle-type-${name.toLowerCase()}`} className={`rounded-2xl border p-4 text-left transition ${selected ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-100' : 'border-slate-200 bg-white hover:border-blue-200'}`}><span className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${selected ? 'bg-white text-blue-600' : 'bg-slate-50 text-slate-500'}`}><Icon size={20} /></span><span className="block font-semibold text-slate-900">{name}</span><span className="mt-1 block text-xs text-slate-500">{description}</span></button>;
}

export function VehicleCard({ name, description, icon }: { name: string; description: string; icon: string }) {
  const Icon = iconMap[icon] || CarFront;
  return <Card className="p-5"><span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={20} /></span><p className="font-semibold text-slate-900">{name}</p><p className="mt-1 text-sm text-slate-500">{description}</p></Card>;
}

export function ColorSelector({ selected, onChange }: { selected: string; onChange: (color: string) => void }) {
  const colors = [{ name: 'White', hex: '#F8FAFC' }, { name: 'Black', hex: '#334155' }, { name: 'Silver', hex: '#CBD5E1' }, { name: 'Grey', hex: '#64748B' }, { name: 'Blue', hex: '#2563EB' }, { name: 'Red', hex: '#DC2626' }, { name: 'Green', hex: '#16A34A' }, { name: 'Yellow', hex: '#EAB308' }, { name: 'Orange', hex: '#EA580C' }, { name: 'Brown', hex: '#8B5E3C' }, { name: 'Purple', hex: '#7C3AED' }, { name: 'Other', hex: '#A5B4FC' }];
  return <div className="flex flex-wrap gap-3">{colors.map(color => <button type="button" onClick={() => onChange(color.name)} aria-label={`${color.name} vehicle color`} aria-pressed={selected === color.name} key={color.name} data-testid={`color-${color.name.toLowerCase()}`} className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm ${selected === color.name ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 bg-white text-slate-600'}`}><span className="h-4 w-4 rounded-full border border-slate-300" style={{ backgroundColor: color.hex }} />{color.name}{selected === color.name && <Check size={14} />}</button>)}</div>;
}

export function PricingCard({ smart = false }: { smart?: boolean }) {
  const price = smart ? brand.pricing.smart : brand.pricing.basic;
  const features = smart ? ['Everything in Basic', 'Advanced Contact Features', 'Priority Support', 'Future Smart Calling'] : ['Unique QR Tag', 'Vehicle Profile', 'Contact Events', 'Owner Dashboard', 'Basic Support'];
  return <Card className={`relative flex h-full flex-col p-6 ${smart ? 'border-blue-200 ring-1 ring-blue-100' : ''}`}>{smart && <span className="absolute right-5 top-5 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">MOST POPULAR</span>}<p className="text-sm font-semibold text-slate-600">{smart ? 'Smart' : 'Basic'}</p><p className="mt-3 font-display text-4xl font-bold text-slate-900">₹{price}<span className="ml-1 text-sm font-medium text-slate-500">/ tag</span></p><p className="mt-2 text-sm text-slate-500">{smart ? 'A little more peace of mind.' : 'A simple, private connection.'}</p><ul className="my-6 space-y-3">{features.map(feature => <li key={feature} className="flex gap-2 text-sm text-slate-600"><Check size={17} className="shrink-0 text-green-600" />{feature}</li>)}</ul><Button href="/vehicle" variant={smart ? 'primary' : 'secondary'} className="mt-auto w-full">Get Started <ArrowRight size={16} /></Button></Card>;
}

export function FAQAccordion({ items, compact = false }: { items: { q: string; a: string }[]; compact?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  return <div className="divide-y divide-slate-200">{items.map((item, i) => <div key={item.q} className="py-1"><button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)} data-testid={`faq-question-${i}`} className="flex w-full items-center justify-between gap-5 py-5 text-left font-semibold text-slate-900"><span>{item.q}</span><ChevronDown size={18} className={`shrink-0 text-slate-400 transition-transform ${open === i ? 'rotate-180' : ''}`} /></button>{open === i && <p className="max-w-3xl pb-5 pr-8 text-sm leading-7 text-slate-600">{item.a}</p>}</div>)}</div>;
}

export function QRCodeTagMockup() {
  return <div className="relative mx-auto max-w-[400px] px-5 py-9 sm:px-0"><div className="absolute inset-5 rounded-[32px] bg-blue-100/70 blur-2xl" /><div className="tag-shadow relative rounded-[26px] border border-slate-200 bg-white p-6 sm:p-8"><div className="mb-6 flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white"><ShieldCheck size={20} /></div><div><p className="font-display text-sm font-extrabold tracking-tight text-slate-900">{brand.name}</p><p className="text-[10px] text-slate-500">PRIVATE VEHICLE CONTACT</p></div><span className="ml-auto rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold text-green-700">ACTIVE</span></div><div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 text-center"><div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-600"><ScanLine size={44} strokeWidth={1.5} /></div><p className="font-display text-[13px] font-extrabold tracking-[.13em] text-slate-900">SCAN TO CONTACT OWNER</p><p className="mt-1 text-xs text-slate-500">For vehicle-related assistance</p></div><div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><span className="text-[10px] font-medium uppercase tracking-widest text-slate-400">Tag ID</span><span className="font-mono text-xs font-semibold text-slate-600">STO-DEMO123</span></div></div></div>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['How it works', '/how-it-works'], ['Pricing', '/pricing'], ['FAQs', '/faq'], ['Contact', '/contact']];
  return <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur"><div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"><Link href="/" className="flex items-center gap-2.5" data-testid="link-home"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white"><ShieldCheck size={20} /></span><span><span className="block font-display text-[15px] font-extrabold leading-tight text-slate-900">{brand.name}</span><span className="hidden text-[10px] text-slate-500 sm:block">Private by design</span></span></Link><nav className="hidden items-center gap-7 md:flex">{links.map(([label, path]) => <Link key={path} href={path} className="text-sm font-medium text-slate-600 transition hover:text-blue-600">{label}</Link>)}</nav><div className="hidden items-center gap-3 md:flex"><Button href="/login" variant="quiet" className="min-h-10 px-3">Sign in</Button><Button href="/vehicle" className="min-h-10 px-4">Get your tag <ArrowRight size={15} /></Button></div><button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg p-2 text-slate-600 md:hidden" data-testid="button-mobile-menu">{open ? <X /> : <Menu />}</button></div>{open && <nav className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">{links.map(([label, path]) => <Link onClick={() => setOpen(false)} key={path} href={path} className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700">{label}</Link>)}<div className="mt-2 flex gap-3 px-3"><Button href="/login" variant="secondary" className="flex-1">Sign in</Button><Button href="/vehicle" className="flex-1">Get your tag</Button></div></nav>}</header>;
}

export function Footer() {
  return <footer className="border-t border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-8 sm:flex-row"><div className="max-w-xs"><Link href="/" className="flex items-center gap-2 font-display font-extrabold text-slate-900"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white"><ShieldCheck size={19} /></span>{brand.name}</Link><p className="mt-3 text-sm leading-6 text-slate-500">{brand.tagline}</p></div><div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm"><Link href="/how-it-works" className="text-slate-600 hover:text-blue-600">How it works</Link><Link href="/pricing" className="text-slate-600 hover:text-blue-600">Pricing</Link><Link href="/faq" className="text-slate-600 hover:text-blue-600">FAQs</Link><Link href="/contact" className="text-slate-600 hover:text-blue-600">Contact</Link><Link href="/login" className="text-slate-600 hover:text-blue-600">Sign in</Link></div></div><div className="mt-9 flex flex-col gap-2 border-t border-slate-100 pt-5 text-xs text-slate-400 sm:flex-row sm:justify-between"><span>© 2025 Scan To Owner. Made for more considerate parking.</span><span>Your phone number stays yours.</span></div></div></footer>;
}

export function PageLayout({ children }: { children: ReactNode }) {
  return <><Navbar /><main className="page-enter min-h-[70vh]">{children}</main><Footer /></>;
}

export function StandardCTA() {
  return <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl rounded-3xl bg-blue-50 px-6 py-12 text-center sm:px-12 sm:py-16"><span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm"><Zap size={22} /></span><h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Give your vehicle a smarter way to stay connected.</h2><p className="mx-auto mt-4 max-w-xl text-slate-600">A simple tag can make the next unexpected moment a little easier.</p><Button href="/vehicle" className="mt-7">Get Your QR Tag <ArrowRight size={16} /></Button></div></section>;
}
