import { useMemo, useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  ChevronRight,
  ShieldCheck,
  Wrench,
  Bike,
  Truck,
  Zap,
} from "lucide-react";

export default function App() {
  const inventory = [
    {
      id: 1,
      name: "Filtro de Aire OEM Yamaha YZ250F",
      category: "OEM Parts",
      brand: "Yamaha",
      model: "YZ250F",
      year: "2010",
      price: 34.99,
      badge: "Top Seller",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      name: "Kit de Frenos Delanteros Honda TRX450R",
      category: "Brakes",
      brand: "Honda",
      model: "TRX450R",
      year: "2012",
      price: 119.99,
      badge: "Race Ready",
      image:
        "https://images.unsplash.com/photo-1517846693594-1567da72af75?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      name: "CV Boot Kit Polaris RZR 1000",
      category: "Drivetrain",
      brand: "Polaris",
      model: "RZR 1000",
      year: "2018",
      price: 69.99,
      badge: "OEM Fit",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      name: "Shock Absorber Can-Am Maverick X3",
      category: "Suspension",
      brand: "Can-Am",
      model: "Maverick X3",
      year: "2021",
      price: 249.99,
      badge: "Performance",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      name: "Cadena y Sprocket Kawasaki KX450",
      category: "Drivetrain",
      brand: "Kawasaki",
      model: "KX450",
      year: "2020",
      price: 159.99,
      badge: "New",
      image:
        "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      name: "A-Arms Heavy Duty CFMOTO ZForce 950",
      category: "Suspension",
      brand: "CFMOTO",
      model: "ZForce 950",
      year: "2023",
      price: 429.99,
      badge: "Heavy Duty",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const brands = ["Todas", "Yamaha", "Honda", "Polaris", "Can-Am", "Kawasaki", "CFMOTO"];
  const models = ["Todos", "YZ250F", "TRX450R", "RZR 1000", "Maverick X3", "KX450", "ZForce 950"];
  const years = ["Todos", "2010", "2012", "2018", "2020", "2021", "2023"];

  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Todas");
  const [selectedModel, setSelectedModel] = useState("Todos");
  const [selectedYear, setSelectedYear] = useState("Todos");

  const filteredInventory = useMemo(() => {
    return inventory.filter((item) => {
      const matchesSearch =
        search.trim() === "" ||
        `${item.name} ${item.category} ${item.brand} ${item.model} ${item.year}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesBrand = selectedBrand === "Todas" || item.brand === selectedBrand;
      const matchesModel = selectedModel === "Todos" || item.model === selectedModel;
      const matchesYear = selectedYear === "Todos" || item.year === selectedYear;

      return matchesSearch && matchesBrand && matchesModel && matchesYear;
    });
  }, [search, selectedBrand, selectedModel, selectedYear]);

  const categories = [
    { title: "OEM Parts", subtitle: "Piezas exact fit por marca", icon: <ShieldCheck className="h-6 w-6" /> },
    { title: "Suspensión", subtitle: "Shock, forks y componentes", icon: <Zap className="h-6 w-6" /> },
    { title: "Frenos", subtitle: "Pads, rotores y kits", icon: <Wrench className="h-6 w-6" /> },
    { title: "Drivetrain", subtitle: "Cadenas, CV, sprockets y más", icon: <Truck className="h-6 w-6" /> },
  ];

  const fitmentBrands = ["Yamaha", "Honda", "Kawasaki", "Suzuki", "Polaris", "Can-Am", "CFMOTO", "KTM"];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-white/10 p-2 lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-neutral-400">Puerto Rico Powersports</div>
              <div className="text-2xl font-black tracking-tight">
                TORRES<span className="text-red-500">MX</span>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-neutral-300 lg:flex">
            <a href="#shop" className="transition hover:text-white">Shop</a>
            <a href="#fitment" className="transition hover:text-white">OEM Finder</a>
            <a href="#categories" className="transition hover:text-white">Categorías</a>
            <a href="#featured" className="transition hover:text-white">Destacados</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-white/5">
              Mi Cuenta
            </button>
            <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-200">
              <span className="inline-flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" /> Cart
              </span>
            </button>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-black via-neutral-950 to-red-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_18%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-red-300">
              Parts • ATV • UTV • Motocross
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-none tracking-tight sm:text-6xl">
              Piezas que <span className="text-red-500">sí le sirven</span> a tu máquina.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-300">
              Una tienda especializada en motoras, ATVs y UTVs con look premium, navegación agresiva y búsqueda rápida por marca, modelo y año.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-neutral-200">OEM & Aftermarket</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-neutral-200">Fitment por vehículo</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-neutral-200">Envíos PR / US</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500">
                Explorar tienda
              </button>
              <button className="rounded-2xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/5">
                Buscar por vehículo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-red-500/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=1400&q=80"
                alt="Moto premium"
                className="h-[500px] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/10 bg-black/55 p-5 backdrop-blur">
                <div className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-400">Build your machine</div>
                <div className="text-2xl font-bold">Encuentra piezas por fitment exacto</div>
                <div className="mt-2 text-sm text-neutral-300">Desde filtros y frenos hasta suspensión, drivetrain y OEM diagrams.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fitment" className="border-b border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-2xl lg:p-6">
            <div className="mb-6 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-neutral-400">OEM / Aftermarket Finder</div>
                <h2 className="mt-2 text-3xl font-black tracking-tight">Busca por marca, modelo y año</h2>
              </div>
              <div className="text-sm text-neutral-400">{filteredInventory.length} resultados disponibles</div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.4fr,1fr,1fr,1fr]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar pieza, categoría o palabra clave"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-black/40 pl-12 pr-4 text-white outline-none placeholder:text-neutral-500 focus:border-red-500"
                />
              </div>

              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="h-14 rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none focus:border-red-500"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand} className="bg-neutral-900">
                    {brand}
                  </option>
                ))}
              </select>

              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="h-14 rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none focus:border-red-500"
              >
                {models.map((model) => (
                  <option key={model} value={model} className="bg-neutral-900">
                    {model}
                  </option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="h-14 rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none focus:border-red-500"
              >
                {years.map((year) => (
                  <option key={year} value={year} className="bg-neutral-900">
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {fitmentBrands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand === selectedBrand ? "Todas" : brand)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    selectedBrand === brand
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-neutral-400">Shop by category</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Categorías principales</h2>
          </div>
          <button className="hidden items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm text-neutral-200 hover:bg-white/5 lg:inline-flex">
            Ver todo <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.05]"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-red-500/10 p-3 text-red-400">{category.icon}</div>
              <div className="text-2xl font-bold">{category.title}</div>
              <div className="mt-2 text-neutral-400">{category.subtitle}</div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Explorar <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="featured" className="border-y border-white/10 bg-neutral-900/60">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-neutral-400">Featured products</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Resultados del buscador</h2>
            </div>
            <div className="text-sm text-neutral-400">Visual premium + enfoque en conversión y fitment</div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredInventory.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-xl transition hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative">
                  <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />
                  <div className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                    {item.badge}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500">{item.category}</div>
                  <h3 className="text-xl font-bold leading-snug">{item.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-300">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{item.brand}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{item.model}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{item.year}</span>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-neutral-500">Desde</div>
                      <div className="text-3xl font-black">${item.price.toFixed(2)}</div>
                    </div>
                    <button className="rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-neutral-200">
                      Ver pieza
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredInventory.length === 0 && (
            <div className="rounded-[2rem] border border-dashed border-white/10 bg-black/30 p-10 text-center">
              <div className="text-xl font-bold">No encontramos piezas con esos filtros</div>
              <div className="mt-2 text-neutral-400">Prueba otra marca, modelo, año o cambia la palabra de búsqueda.</div>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <Bike className="h-8 w-8 text-red-400" />
            <div className="mt-4 text-2xl font-bold">Motoras / MX</div>
            <div className="mt-2 text-neutral-400">Helmets, plastics, filtros, sprockets, pads, levers, tires y más.</div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <Truck className="h-8 w-8 text-red-400" />
            <div className="mt-4 text-2xl font-bold">ATVs</div>
            <div className="mt-2 text-neutral-400">OEM parts, suspensión, axles, frenos y piezas de trabajo pesado.</div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <Zap className="h-8 w-8 text-red-400" />
            <div className="mt-4 text-2xl font-bold">UTVs</div>
            <div className="mt-2 text-neutral-400">Accesorios, performance, drivetrain y componentes para utility y sport.</div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[1.2fr,1fr] lg:px-8">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-neutral-500">TORRESMX</div>
            <div className="mt-3 text-3xl font-black tracking-tight">Especialistas en piezas para motoras, ATVs y UTVs</div>
            <p className="mt-4 max-w-xl text-neutral-400">
              Diseño inspirado en una mezcla entre el look racing minimalista, el estilo premium técnico y la navegación enfocada en fitment para encontrar piezas rápido.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm text-neutral-400">
            <div>
              <div className="mb-3 font-semibold uppercase tracking-[0.2em] text-white">Tienda</div>
              <div className="space-y-2">
                <div>OEM Parts</div>
                <div>Suspensión</div>
                <div>Frenos</div>
                <div>Drivetrain</div>
              </div>
            </div>
            <div>
              <div className="mb-3 font-semibold uppercase tracking-[0.2em] text-white">Ayuda</div>
              <div className="space-y-2">
                <div>Shipping</div>
                <div>Devoluciones</div>
                <div>Fitment Guide</div>
                <div>Contacto</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
