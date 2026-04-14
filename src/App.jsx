import { useMemo, useState } from 'react';
import {
  Search,
  Phone,
  ChevronRight,
  ShieldCheck,
  Wrench,
  Truck,
  Bike,
  Star,
} from 'lucide-react';

const inventory = [
  {
    id: 1,
    name: 'Filtro de Aire OEM Yamaha YZ250F',
    category: 'OEM Parts',
    brand: 'Yamaha',
    model: 'YZ250F',
    year: '2010+',
    price: 34.99,
    badge: 'Top Seller',
    image:
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Kit de Frenos Delanteros Honda TRX450R',
    category: 'Brakes',
    brand: 'Honda',
    model: 'TRX450R',
    year: '2012+',
    price: 119.99,
    badge: 'Race Ready',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Goma ATV All Terrain 25x8-12',
    category: 'ATV Tires',
    brand: 'Maxxis',
    model: 'ATV',
    year: 'Universal',
    price: 149.99,
    badge: 'Popular',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    name: 'Cadena DID Dirt Bike 520',
    category: 'Dirt Bike Parts',
    brand: 'DID',
    model: '520',
    year: 'Universal',
    price: 89.99,
    badge: 'Durable',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    name: 'Aceite OEM Toyota 5W-30',
    category: 'Auto Parts',
    brand: 'Toyota',
    model: 'OEM',
    year: 'Universal',
    price: 12.99,
    badge: 'OEM',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    name: 'Shock Delantero KTM SX',
    category: 'Suspension',
    brand: 'KTM',
    model: 'SX',
    year: '2016+',
    price: 239.99,
    badge: 'Premium',
    image:
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 7,
    name: 'Juego de Aros y Gomas UTV',
    category: 'ATV Tires',
    brand: 'ITP',
    model: 'UTV',
    year: 'Universal',
    price: 599.99,
    badge: 'Heavy Duty',
    image:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 8,
    name: 'Pastillas de Freno Toyota Tacoma',
    category: 'Auto Parts',
    brand: 'Toyota',
    model: 'Tacoma',
    year: '2005-2015',
    price: 54.99,
    badge: 'Best Value',
    image:
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80',
  },
];

const categories = [
  'All',
  'OEM Parts',
  'ATV Tires',
  'Dirt Bike Parts',
  'Auto Parts',
  'Brakes',
  'Suspension',
];

const categoryCards = [
  {
    title: 'ATV Tires',
    subtitle: 'Tracción, terreno y durabilidad',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Dirt Bike Parts',
    subtitle: 'Piezas para riding y mantenimiento',
    image:
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'OEM Parts',
    subtitle: 'Opciones confiables por marca',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Auto Parts',
    subtitle: 'Piezas para uso diario y proyecto',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
  },
];

const featureCards = [
  {
    icon: ShieldCheck,
    title: 'Piezas confiables',
    text: 'OEM y aftermarket para distintos presupuestos y necesidades.',
  },
  {
    icon: Wrench,
    title: 'Soporte práctico',
    text: 'Te ayudamos a identificar piezas por marca, modelo y año.',
  },
  {
    icon: Truck,
    title: 'Proceso rápido',
    text: 'Búsqueda fácil y contacto directo por WhatsApp.',
  },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredInventory = useMemo(() => {
    return inventory.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;

      const q = search.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.model.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const buildWhatsAppUrl = (itemName) => {
    const message = `Hola, estoy interesado en ${itemName}. ¿Está disponible?`;
    return `https://wa.me/17874154344?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="site">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>TORRESMX</span>
          <span>ATV • DIRT BIKE • OEM • AUTO PARTS</span>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <div className="logo-wrap">
            <div className="logo">TORRESMX</div>
            <div className="logo-sub">Motorsports & Parts</div>
          </div>

          <nav className="nav">
            <a href="#categorias">Categorías</a>
            <a href="#catalogo">Productos</a>
            <a href="#marcas">Marcas</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            className="btn btn-primary"
            href="https://wa.me/17874154344?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20sus%20productos"
            target="_blank"
            rel="noreferrer"
          >
            <Phone size={16} />
            WhatsApp
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow">PREMIUM PARTS • ATV • DIRT BIKE • AUTO</div>
            <h1>
              Piezas, gomas y accesorios para <span>rodar fuerte</span>
            </h1>
            <p>
              Encuentra piezas OEM, frenos, suspensión, gomas y accesorios para
              tu ATV, motora o auto. Búsqueda simple y atención rápida por
              WhatsApp.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#catalogo">
                Ver catálogo
              </a>
              <a className="btn btn-secondary" href="#contacto
