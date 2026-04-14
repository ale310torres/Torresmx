import { useMemo, useState } from 'react';
import {
  Search,
  ShoppingCart,
  ShieldCheck,
  Wrench,
  Bike,
  Truck,
  Star,
  Phone,
  ChevronRight,
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

const featureCards = [
  {
    icon: ShieldCheck,
    title: 'Piezas confiables',
    text: 'OEM y aftermarket para diferentes necesidades y presupuestos.',
  },
  {
    icon: Wrench,
    title: 'Soporte práctico',
    text: 'Te ayudamos a identificar piezas por marca, modelo y año.',
  },
  {
    icon: Truck,
    title: 'Catálogo simple',
    text: 'Encuentra rápido lo que buscas con filtros y búsqueda directa.',
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
    <div className="page">
      <header className="announcement">
        <div className="container announcement-inner">
          <span>Torresmx</span>
          <span>Piezas • Gomas • OEM • ATV • Dirt Bike • Auto Parts</span>
        </div>
      </header>

      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-wrap">
            <div className="brand">TORRESMX</div>
            <div className="brand-sub">ATV, Dirt Bike & Auto Parts</div>
          </div>

          <nav className="nav">
            <a href="#categorias">Categorías</a>
            <a href="#catalogo">Productos</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="topbar-actions">
            <a
              className="btn btn-primary"
              href="https://wa.me/17874154344"
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="pill">OEM PARTS • ATV TIRES • DIRT BIKE PARTS</div>
            <h1>
              Todo lo que necesitas para tu <span>ATV, motora o auto</span>
            </h1>
            <p>
              Catálogo práctico para piezas OEM, frenos, suspensión, gomas y
              accesorios. Busca rápido y escríbenos directo por WhatsApp para
              disponibilidad.
            </p>

            <div className="hero-buttons">
              <a className="btn btn-primary" href="#catalogo">
                <ShoppingCart size={16} />
                Ver catálogo
              </a>
              <a className="btn btn-outline" href="#contacto">
                Solicitar pieza
              </a>
            </div>

            <div className="hero-mini">
              <div className="hero-mini-card">
                <strong>OEM & Aftermarket</strong>
                <span>Opciones para distintos budgets</span>
              </div>
              <div className="hero-mini-card">
                <strong>Atención rápida</strong>
                <span>WhatsApp directo</span>
              </div>
              <div className="hero-mini-card">
                <strong>Catálogo moderno</strong>
                <span>Visual y fácil de usar</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-top">Top categorías</div>
            <div className="hero-panel-list">
              <div className="panel-item">
                <Bike size={18} />
                <span>Dirt Bike Parts</span>
                <ChevronRight size={16} />
              </div>
              <div className="panel-item">
                <Truck size={18} />
                <span>ATV Tires</span>
                <ChevronRight size={16} />
              </div>
              <div className="panel-item">
                <Wrench size={18} />
                <span>OEM Parts</span>
                <ChevronRight size={16} />
              </div>
              <div className="panel-item">
                <ShieldCheck size={18} />
                <span>Auto Parts</span>
                <ChevronRight size={16} />
              </div>
            </div>
            <div className="hero-note">
              Dinos marca, modelo y año. Te ayudamos a ubicar la pieza correcta.
            </div>
          </div>
        </div>
      </section>

      <section id="categorias" className="category-strip">
        <div className="container category-strip-grid">
          {['OEM Parts', 'ATV Tires', 'Dirt Bike Parts', 'Auto Parts'].map((item) => (
            <div key={item} className="category-card">
              <div className="category-card-title">{item}</div>
              <div className="category-card-link">Explorar</div>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="container features-grid">
          {featureCards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="catalogo" className="catalog">
        <div className="container">
          <div className="section-head">
            <div className="section-label">Catálogo</div>
            <h2>Productos destacados</h2>
            <p>Busca por nombre, marca, modelo o categoría.</p>
          </div>

          <div className="toolbar">
            <div className="search-box">
              <Search size={18} />
              <input
                type="text"
                placeholder="Buscar producto, marca o modelo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="results-bar">
            <span>{filteredInventory.length} productos encontrados</span>
          </div>

          <div className="product-grid">
            {filteredInventory.map((item) => (
              <div key={item.id} className="product-card">
                <div
                  className="product-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <span className="badge">{item.badge}</span>
                </div>

                <div className="product-body">
                  <div className="product-category">{item.category}</div>
                  <h3>{item.name}</h3>

                  <div className="product-meta">
                    <span>{item.brand}</span>
                    <span>{item.model}</span>
                    <span>{item.year}</span>
                  </div>

                  <div className="product-footer">
                    <div className="price">${item.price.toFixed(2)}</div>
                    <a
                      href={buildWhatsAppUrl(item.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary small"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredInventory.length === 0 && (
            <div className="empty-state">
              No encontramos productos con ese filtro. Intenta otra búsqueda.
            </div>
          )}
        </div>
      </section>

      <section className="brands">
        <div className="container">
          <div className="section-head compact">
            <div className="section-label">Marcas</div>
            <h2>Trabajamos con marcas conocidas</h2>
          </div>

          <div className="brands-row">
            {['Yamaha', 'Honda', 'KTM', 'Toyota', 'Maxxis', 'DID', 'ITP'].map((brand) => (
              <div key={brand} className="brand-pill">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="contact">
        <div className="container contact-box">
          <div>
            <div className="section-label">Contacto</div>
            <h2>¿Buscas una pieza específica?</h2>
            <p>
              Envíanos marca, modelo, año y la pieza que necesitas. Te
              respondemos por WhatsApp con información y disponibilidad.
            </p>
          </div>

          <div className="contact-card">
            <div>
              <span>WhatsApp</span>
              <strong>(787) 415-4344</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>atmrealestatepr@gmail.com</strong>
            </div>
            <a
              className="btn btn-primary full"
              href="https://wa.me/17874154344?text=Hola,%20busco%20una%20pieza%20para%20mi%20veh%C3%ADculo"
              target="_blank"
              rel="noreferrer"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
