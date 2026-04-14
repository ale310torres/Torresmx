import { useMemo, useState } from 'react';
import {
  Search,
  Phone,
  ChevronRight,
  ShieldCheck,
  Wrench,
  Truck,
  Bike,
} from 'lucide-react';
import inventory from './data/inventory.json';

const categories = [
  'All',
  'Dirt Bike Parts',
  'ATV Parts',
  'UTV Parts',
  'ATV Tires',
  'Suspension',
  'OEM Parts',
  'Accessories',
];

const categoryCards = [
  {
    title: 'Dirt Bike Parts',
    subtitle: 'Piezas para motocross y enduro',
    image:
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'ATV Parts',
    subtitle: 'Mantenimiento y performance',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'ATV Tires',
    subtitle: 'Tracción y durabilidad',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'UTV Parts',
    subtitle: 'Trabajo, recreación y upgrade',
    image:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
  },
];

const featureCards = [
  {
    icon: ShieldCheck,
    title: 'Piezas confiables',
    text: 'OEM y aftermarket para dirt bikes, ATV y UTV.',
  },
  {
    icon: Wrench,
    title: 'Ayuda práctica',
    text: 'Te ayudamos a identificar piezas por marca, modelo y año.',
  },
  {
    icon: Truck,
    title: 'Catálogo simple',
    text: 'Encuentra rápido lo que buscas y escríbenos por WhatsApp.',
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
        item.category.toLowerCase().includes(q) ||
        item.sku.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const buildWhatsAppUrl = (item) => {
    const message = `Hola, estoy interesado en ${item.name} (${item.sku}). ¿Está disponible?`;
    return `https://wa.me/17874154344?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="site">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>TORRESMX</span>
          <span>DIRT BIKES • ATV • UTV • OEM PARTS • ACCESSORIES</span>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <div className="logo-wrap">
            <div className="logo">TORRESMX</div>
            <div className="logo-sub">Dirt Bike • ATV • UTV Parts</div>
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
            <div className="eyebrow">DIRT BIKE • ATV • UTV • OEM • PERFORMANCE</div>
            <h1>
              Piezas y gomas para <span>rodar fuerte</span>
            </h1>
            <p>
              Encuentra piezas OEM, frenos, suspensión, gomas y accesorios para
              dirt bikes, ATV y UTV. Catálogo visual, búsqueda simple y
              atención rápida por WhatsApp.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#catalogo">
                Ver catálogo
              </a>
              <a className="btn btn-secondary" href="#contacto">
                Solicitar pieza
              </a>
            </div>

            <div className="hero-points">
              <div className="hero-point">
                <strong>OEM & Aftermarket</strong>
                <span>Opciones para diferentes budgets y necesidades</span>
              </div>
              <div className="hero-point">
                <strong>Atención rápida</strong>
                <span>WhatsApp directo para piezas específicas</span>
              </div>
              <div className="hero-point">
                <strong>Enfoque powersports</strong>
                <span>Solo dirt bikes, ATV y UTV</span>
              </div>
            </div>
          </div>

          <div className="hero-side-card">
            <div className="side-label">Top categorías</div>
            <div className="side-list">
              <div className="side-item">
                <Bike size={18} />
                <span>Dirt Bike Parts</span>
                <ChevronRight size={16} />
              </div>
              <div className="side-item">
                <Truck size={18} />
                <span>ATV Parts</span>
                <ChevronRight size={16} />
              </div>
              <div className="side-item">
                <Truck size={18} />
                <span>ATV Tires</span>
                <ChevronRight size={16} />
              </div>
              <div className="side-item">
                <Wrench size={18} />
                <span>UTV Parts</span>
                <ChevronRight size={16} />
              </div>
            </div>
            <p className="side-note">
              Envíanos marca, modelo y año para ayudarte a encontrar la pieza
              correcta.
            </p>
          </div>
        </div>
      </section>

      <section id="categorias" className="category-section">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">Shop by category</div>
            <h2>Categorías principales</h2>
          </div>

          <div className="category-grid">
            {categoryCards.map((item) => (
              <div
                key={item.title}
                className="category-card"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(8,12,20,0.1), rgba(8,12,20,0.88)), url(${item.image})`,
                }}
              >
                <div className="category-card-content">
                  <div className="category-title">{item.title}</div>
                  <div className="category-subtitle">{item.subtitle}</div>
                  <div className="category-link">Explorar</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="container feature-grid">
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

      <section id="catalogo" className="catalog-section">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">Featured inventory</div>
            <h2>Productos destacados</h2>
            <p>Filtra por categoría o busca por nombre, marca, modelo o SKU.</p>
          </div>

          <div className="catalog-toolbar">
            <div className="search-wrap">
              <Search size={18} />
              <input
                type="text"
                placeholder="Buscar producto, marca, modelo o SKU..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="filter-row">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-chip ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="results-row">
            <span>{filteredInventory.length} productos encontrados</span>
          </div>

          <div className="product-grid">
            {filteredInventory.map((item) => (
              <article key={item.id} className="product-card">
                <div
                  className="product-media"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="product-badge">{item.badge}</div>
                </div>

                <div className="product-content">
                  <div className="product-category">{item.category}</div>
                  <h3>{item.name}</h3>

                  <div className="product-meta">
                    <span>{item.brand}</span>
                    <span>{item.model}</span>
                    <span>{item.year}</span>
                    <span>{item.sku}</span>
                  </div>

                  <p className="product-description">{item.description}</p>

                  <div className="product-bottom">
                    <div>
                      <div className="product-price">${item.price.toFixed(2)}</div>
                      <div className="product-stock">Stock: {item.stock}</div>
                    </div>

                    <a
                      href={buildWhatsAppUrl(item)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-small"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredInventory.length === 0 && (
            <div className="empty-state">
              No encontramos productos con ese filtro. Intenta otra búsqueda.
            </div>
          )}
        </div>
      </section>

      <section id="marcas" className="brand-section">
        <div className="container">
          <div className="section-head compact">
            <div className="section-kicker">Brands</div>
            <h2>Marcas populares</h2>
          </div>

          <div className="brand-row">
            {['Yamaha', 'Honda', 'KTM', 'Maxxis', 'ITP', 'DID', 'Pro Taper'].map((brand) => (
              <div key={brand} className="brand-chip">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="promo-section">
        <div className="container promo-box">
          <div className="promo-copy">
            <div className="section-kicker">Need help?</div>
            <h2>¿No ves la pieza que buscas?</h2>
            <p>
              Escríbenos por WhatsApp con marca, modelo, año y la pieza que
              necesitas. Te ayudamos a buscar disponibilidad.
            </p>
          </div>

          <div className="promo-card">
            <div>
              <span>WhatsApp</span>
              <strong>(787) 415-4344</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>atmrealestatepr@gmail.com</strong>
            </div>
            <a
              className="btn btn-primary btn-full"
              href="https://wa.me/17874154344?text=Hola,%20busco%20una%20pieza%20para%20mi%20veh%C3%ADculo"
              target="_blank"
              rel="noreferrer"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer id="contacto" className="footer">
        <div className="container footer-inner">
          <div>
            <div className="logo footer-logo">TORRESMX</div>
            <div className="footer-sub">Dirt Bike • ATV • UTV Parts</div>
          </div>
          <div className="footer-links">
            <a href="#categorias">Categorías</a>
            <a href="#catalogo">Productos</a>
            <a href="#marcas">Marcas</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
