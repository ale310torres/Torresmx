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
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1517846693594-1567da72af75?auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
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
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-wrap">
            <div className="brand">Torresmx</div>
            <div className="brand-sub">ATV • Dirt Bike • Auto Parts</div>
          </div>

          <div className="topbar-actions">
            <a className="btn btn-outline" href="#catalogo">
              Ver catálogo
            </a>
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
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="pill">OEM Parts • ATV Tires • Dirt Bike Parts</div>
            <h1>
              Piezas, gomas y accesorios para <span>ATV, motoras y autos</span>
            </h1>
            <p>
              Encuentra piezas OEM, frenos, suspensión, gomas y accesorios para
              tus proyectos y mantenimiento. Atención rápida y ventas directas
              por WhatsApp.
            </p>

            <div className="hero-buttons">
              <a className="btn btn-primary" href="#catalogo">
                <ShoppingCart size={16} />
                Explorar productos
              </a>
              <a
                className="btn btn-outline"
                href="https://wa.me/17874154344?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20sus%20productos"
                target="_blank"
                rel="noreferrer"
              >
                <Phone size={16} />
                Pedir información
              </a>
            </div>

            <div className="hero-stats">
              <div className="mini-stat">
                <strong>OEM & Aftermarket</strong>
                <span>Opciones para distintos budgets</span>
              </div>
              <div className="mini-stat">
                <strong>Atención rápida</strong>
                <span>WhatsApp directo</span>
              </div>
              <div className="mini-stat">
                <strong>Catálogo práctico</strong>
                <span>Búsqueda y filtros simples</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-label">Categorías principales</div>
            <div className="hero-categories">
              <div className="hero-category">
                <Bike size={18} />
                <span>Dirt Bike Parts</span>
              </div>
              <div className="hero-category">
                <Truck size={18} />
                <span>ATV Tires</span>
              </div>
              <div className="hero-category">
                <Wrench size={18} />
                <span>OEM Parts</span>
              </div>
              <div className="hero-category">
                <ShieldCheck size={18} />
                <span>Auto Parts</span>
              </div>
            </div>

            <div className="hero-note">
              ¿Buscas una pieza específica? Escríbenos por WhatsApp con marca,
              modelo y año.
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container benefits-grid">
          <div className="benefit-card">
            <ShieldCheck size={20} />
            <div>
              <strong>Piezas de calidad</strong>
              <p>Opciones OEM y aftermarket para diferentes necesidades.</p>
            </div>
          </div>
          <div className="benefit-card">
            <Wrench size={20} />
            <div>
              <strong>Soporte práctico</strong>
              <p>Ayuda para identificar piezas según marca, modelo y año.</p>
            </div>
          </div>
          <div className="benefit-card">
            <Star size={20} />
            <div>
              <strong>Productos populares</strong>
              <p>Selección inicial para motos, ATV y vehículos.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalogo" className="catalog">
        <div className="container">
          <div className="section-head">
            <div className="section-label">Catálogo</div>
            <h2>Explora productos</h2>
            <p>Filtra por categoría o busca por nombre, marca o modelo.</p>
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

      <section className="contact">
        <div className="container contact-box">
          <div>
            <div className="section-label">Contacto</div>
            <h2>¿Necesitas una pieza específica?</h2>
            <p>
              Envíanos marca, modelo, año y la pieza que buscas. Te respondemos
              por WhatsApp con disponibilidad e información.
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
