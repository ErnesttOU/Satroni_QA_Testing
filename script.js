// ── SCROLL ANIMATIONS ──
const animObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      animObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up, .slide-left, .slide-right, .slide-up-card, .slide-right-slow')
  .forEach(el => animObserver.observe(el));

// ── EXCLAMACION BADGE ──
let exclamacionTriggered = false;
const exclamacionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !exclamacionTriggered) {
      exclamacionTriggered = true;
      setTimeout(() => {
        const badge = document.getElementById('exclamacion-badge');
        if (badge) badge.classList.add('pop');
      }, 300);
    }
  });
}, { threshold: 0.4 });
const masVendidosSection = document.getElementById('mas-vendidos');
if (masVendidosSection) exclamacionObserver.observe(masVendidosSection);

// ── COUNTER ANIMADO 400+ ESTUDIANTES ──
function animateCounter(el, target, duration) {
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    el.textContent = Math.floor(target * eased);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

let counterTriggered = false;
const counterEl = document.getElementById('students-counter');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !counterTriggered && counterEl) {
      counterTriggered = true;
      animateCounter(counterEl, 400, 2000);
    }
  });
}, { threshold: 0.3 });
const comunidadSection = document.getElementById('comunidad');
if (comunidadSection) counterObserver.observe(comunidadSection);

// ── HAMBURGER MENU ──
function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('side-menu').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}

// ── DATOS DE PRODUCTOS ──
const productData = {
  ingenieria: {
    title: '🎓 Calculadoras para Ingeniería',
    tag: '🎓 Ingeniería',
    products: [
      {
        name: 'OSALO OS-991EX CW',
        img: 'assets/OSALO991EX-CW.webp',
        boxImg: 'assets/OSALO881EXcwBOX.webp',
        price: 270000,
        desc: '552 funciones. Spreadsheet, modo tabla, QR. La más completa para ingeniería y ciencias.',
        features: [
          'Excelente para toda la Carrera de Ingeniería o Afines.',
          'Resolución de Sistemas de Ecuaciones con hasta 4 incógnitas',
          'Capacidad de Graficar Ecuaciones y Funciones por QR desde el teléfono.',
          '552 funciones científicas avanzadas',
          'Modo Spreadsheet (hoja de cálculo integrada)',
          'Modo Tabla: genera tablas de funciones automáticamente',
          'Encuentra raíces de Polinomios de hasta Cuarto Grado',
          'Natural Textbook Display: muestra fórmulas tal como aparecen en libros',
          'Resolución de ecuaciones lineales, cuadráticas y cúbicas',
          'Cálculo de matrices (hasta 4×4)',
          'Estadística avanzada: regresiones, distribuciones',
          'Números complejos, vectores y geometría',
          'Algoritmo de cálculo numérico (integración y diferenciación)',
          '✅ Incluye Factura Legal',
          '📃 Garantía de 3 meses',
          '🚚 Envíos a todo el país',
        ]
      },
      {
        name: 'Casio fx-991CW',
        img: 'assets/Casio fx991CW.webp',
        boxImg: 'assets/Fx-991CWBOX.webp',
        price: 310000,
        desc: 'Versión mejorada con pantalla de alta resolución y más funciones. Top para ingeniería.',
        features: [
          'Pantalla de alta resolución mejorada',
          'Resolución de Sistemas de Ecuaciones con hasta 4 incógnitas',
          'Spreadsheet integrado',
          'Código QR para graficar desde el celular',
          '552+ funciones científicas avanzadas',
          'Cálculo de matrices (hasta 4×4)',
          'Estadística avanzada: regresiones, distribuciones',
          'Números complejos, vectores y geometría',
          'Integración y diferenciación numérica',
          'Aprobada para exámenes internacionales',
          '✅ Incluye Factura Legal',
          '📃 Garantía de 3 meses',
          '🚚 Envíos a todo el país',
        ]
      },
    ]
  },
  universidad: {
    title: '📊 Calculadoras para Universidad',
    tag: '📊 Universidad',
    products: [
      {
        name: 'Casio fx-991ES PLUS',
        img: 'assets/991ESPLUS.webp',
        boxImg: 'assets/991ESPLUSBOX.webp',
        price: 195000,
        desc: '417 funciones. Natural Display, modo estadístico y matricial. Muy popular en universidad.',
        features: [
          '417 funciones científicas',
          'Natural Textbook Display: entrada y salida natural de expresiones',
          'Resolución de ecuaciones simultáneas (hasta 3 variables)',
          'Ecuaciones polinómicas de hasta grado 3',
          'Cálculo matricial y vectorial',
          'Estadística: media, varianza, desviación estándar, regresiones',
          'Integración numérica y derivación',
          'Conversión de bases numéricas (bin, oct, dec, hex)',
          'Números complejos en forma rectangular y polar',
          'Constantes físicas y conversión de unidades incorporadas',
          'Solar + batería: nunca se queda sin energía',
          '✅ Incluye Factura Legal',
          '📃 Garantía de 3 meses',
          '🚚 Envíos a todo el país',
        ]
      },
      {
        name: 'Casio fx-991ES PLUS – Edición Rosa',
        img: 'assets/FX-991ESPLUSROSA.webp',
        boxImg: 'assets/Fx-991ESPLUSROSA-BOX.webp',
        price: 205000,
        rosa: true,
        desc: 'Las mismas 417 funciones de la fx-991ES PLUS en una edición especial color rosa.',
        features: [
          '417 funciones científicas',
          'Natural Textbook Display',
          'Resolución de ecuaciones simultáneas (hasta 3 variables)',
          'Ecuaciones polinómicas de hasta grado 3',
          'Cálculo matricial y vectorial',
          'Estadística avanzada',
          'Integración numérica y derivación',
          'Solar + batería',
          '🌸 Edición especial color rosa',
          '✅ Incluye Factura Legal',
          '📃 Garantía de 3 meses',
          '🚚 Envíos a todo el país',
        ]
      },
    ]
  },
  colegio: {
    title: '🏫 Calculadoras para Colegio e Ingreso',
    tag: '🏫 Colegio e Ingreso',
    products: [
      {
        name: 'Casio fx-82ES PLUS',
        img: 'assets/FX-82ESPLUS.webp',
        boxImg: 'assets/FX-82ESPLUSBOX.webp',
        price: 177000,
        desc: '252 funciones. Natural Textbook Display. Perfecta para colegio y exámenes de ingreso.',
        features: [
          '252 funciones científicas',
          'Natural Textbook Display',
          'Estadística de una y dos variables',
          'Regresión lineal, cuadrática, logarítmica y exponencial',
          'Cálculo de fracciones y conversión a decimales',
          'Funciones trigonométricas, logarítmicas y exponenciales',
          'Generador de tabla de valores de funciones',
          'Modo Base-N: binario, octal y hexadecimal',
          'Constantes físicas y conversión de unidades',
          'Aprobada para exámenes de ingreso en Paraguay',
          '✅ Incluye Factura Legal',
          '📃 Garantía de 3 meses',
          '🚚 Envíos a todo el país',
        ]
      },
      {
        name: 'Casio fx-82ES PLUS – Edición Rosa',
        img: 'assets/FX-82ESPLUSROSA.webp',
        boxImg: 'assets/FX-82ESPLUSROSABOX.webp',
        price: 187000,
        rosa: true,
        desc: 'Las mismas 252 funciones de la fx-82ES PLUS en una edición especial color rosa.',
        features: [
          '252 funciones científicas',
          'Natural Textbook Display',
          'Estadística de una y dos variables',
          'Funciones trigonométricas, logarítmicas y exponenciales',
          'Aprobada para exámenes de ingreso en Paraguay',
          '🌸 Edición especial color rosa',
          '✅ Incluye Factura Legal',
          '📃 Garantía de 3 meses',
          '🚚 Envíos a todo el país',
        ]
      },
    ]
  }
};

// ── MODAL LISTA DE CATEGORÍA ──
function openModal(cat) {
  const data = productData[cat];
  if (!data) return;

  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-products').innerHTML = data.products.map((p, idx) => `
    <div class="product-card${p.rosa ? ' product-card-rosa' : ''}" onclick="openDetail('${cat}', ${idx})" title="Ver detalle">
      <div class="product-img${p.rosa ? ' product-img-rosa-transparent' : ''}">
        ${p.rosa ? '<span class="badge badge-rosa">🌸 Edición Rosa</span>' : ''}
        ${p.img
          ? `<img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"/>
             <div class="product-img-placeholder" style="display:none">🧮</div>`
          : '<div class="product-img-placeholder">🧮</div>'
        }
      </div>
      <div class="product-info">
        <p class="product-name">${p.name}</p>
        <p class="product-desc">${p.desc}</p>
        <div class="product-badges">
          <span class="mini-badge">✅ Factura legal</span>
          <span class="mini-badge">📃 Garantía de 3 meses</span>
          <span class="mini-badge">🚚 Envío a todo el país</span>
        </div>
        <p class="product-price">Gs. ${p.price.toLocaleString()}</p>
        <p class="product-card-hint">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Ver detalle completo
        </p>
        <button class="btn btn-orange" onclick="event.stopPropagation(); addToCart('${p.name}', ${p.price}); closeModal();">
          🛒 Añadir al Carrito
        </button>
      </div>
    </div>
  `).join('');

  document.getElementById('modal-overlay').classList.add('open');
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
  requestAnimationFrame(() => modal.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
  setTimeout(() => { modal.style.display = 'none'; }, 250);
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── MODAL PUNTAS DEL SPEN ──
function openPenTipsModal() {
  document.getElementById('pen-modal-overlay').classList.add('open');
  const modal = document.getElementById('pen-modal');
  modal.style.display = 'flex';
  requestAnimationFrame(() => modal.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function closePenTipsModal() {
  const modal = document.getElementById('pen-modal');
  modal.classList.remove('open');
  setTimeout(() => { modal.style.display = 'none'; }, 250);
  document.getElementById('pen-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── MODAL DETALLE DE PRODUCTO ──
function openDetail(cat, idx) {
  const catData = productData[cat];
  if (!catData) return;
  const p = catData.products[idx];
  if (!p) return;

  const detailImg = document.getElementById('detail-img');
  const detailPlaceholder = document.getElementById('detail-img-placeholder');
  const detailImgWrap = detailImg.parentElement;

  if (p.img) {
    detailImg.src = p.img;
    detailImg.style.display = 'block';
    detailPlaceholder.style.display = 'none';
  } else {
    detailImg.style.display = 'none';
    detailPlaceholder.style.display = 'flex';
  }

  if (p.rosa) {
    detailImgWrap.classList.add('rosa-bg');
  } else {
    detailImgWrap.classList.remove('rosa-bg');
  }

  const boxWrap = document.getElementById('detail-box-img-wrap');
  if (p.boxImg) {
    document.getElementById('detail-box-img').src = p.boxImg;
    boxWrap.style.display = 'block';
  } else {
    boxWrap.style.display = 'none';
  }

  document.getElementById('detail-img').alt = p.name;
  document.getElementById('detail-category').textContent = catData.tag;
  document.getElementById('detail-name').textContent = p.name;
  document.getElementById('detail-name').style.color = p.rosa ? '#e91e8c' : '';
  document.getElementById('detail-price').textContent = 'Gs. ' + p.price.toLocaleString();

  document.getElementById('detail-features').innerHTML = p.features
    .map(f => `<li>${f}</li>`)
    .join('');

  const cartBtn = document.getElementById('detail-cart-btn');
  cartBtn.onclick = () => { addToCart(p.name, p.price); closeDetail(); };

  const waBtn = document.getElementById('detail-wa-btn');
  waBtn.onclick = function(e) {
    e.preventDefault();
    const msg = 'Hola! Me interesa la ' + p.name + ' a Gs. ' + p.price.toLocaleString('es-PY') + '. Esta disponible?';
    window.open('https://wa.me/595974687312?text=' + encodeURIComponent(msg), '_blank');
  };

  closeModal();
  setTimeout(() => {
    document.getElementById('detail-overlay').classList.add('open');
    const dm = document.getElementById('detail-modal');
    dm.style.display = 'flex';
    requestAnimationFrame(() => dm.classList.add('open'));
    document.body.style.overflow = 'hidden';
  }, 260);
}

function closeDetail() {
  document.getElementById('detail-overlay').classList.remove('open');
  const dm = document.getElementById('detail-modal');
  dm.classList.remove('open');
  setTimeout(() => { dm.style.display = 'none'; }, 250);
  if (!document.getElementById('modal').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

// ── ESC para cerrar ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.getElementById('detail-modal').classList.contains('open')) { closeDetail(); return; }
    if (document.getElementById('pen-modal').classList.contains('open')) { closePenTipsModal(); return; }
    closeModal();
    if (document.getElementById('side-menu').classList.contains('open')) toggleMenu();
    if (document.getElementById('cart-panel').classList.contains('open')) toggleCart();
    if (document.getElementById('admin-panel').classList.contains('open')) closeAdmin();
  }
});

// ── CARRITO ──
let cart = [];

function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  if (existing) existing.qty++;
  else cart.push({ name, price, qty: 1 });
  renderCart();
  const panel = document.getElementById('cart-panel');
  if (!panel.classList.contains('open')) toggleCart();
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = count;
  const items = document.getElementById('cart-items');

  if (!cart.length) {
    items.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
    document.getElementById('cart-total').style.display = 'none';
    return;
  }

  items.innerHTML = cart.map(i => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid #f0f0f0;">
      <div style="flex:1;min-width:0;">
        <div style="font-weight:600;font-size:.88rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${i.name}</div>
        <div style="color:var(--orange);font-size:.82rem;font-weight:700;">Gs. ${i.price.toLocaleString()}</div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;margin-left:10px;flex-shrink:0;">
        <button onclick="changeQty('${i.name}',-1)" style="width:28px;height:28px;border-radius:6px;border:1px solid #ddd;background:#fff;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;">−</button>
        <span style="font-weight:700;min-width:18px;text-align:center;">${i.qty}</span>
        <button onclick="changeQty('${i.name}',1)" style="width:28px;height:28px;border-radius:6px;border:1px solid #ddd;background:#fff;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;">+</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('total-amount').textContent = 'Gs. ' + total.toLocaleString('es-PY');
  document.getElementById('cart-total').style.display = 'block';

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  let waCartMsg;
  if (totalItems === 1 && cart.length === 1) {
    const item = cart[0];
    waCartMsg = 'Hola! Me interesa comprar la ' + item.name + ' a Gs. ' + item.price.toLocaleString('es-PY') + '. Esta disponible?';
  } else {
    const lineas = cart.map(i => '- ' + i.qty + 'x ' + i.name + ' (Gs. ' + i.price.toLocaleString('es-PY') + ' c/u)').join('\n');
    waCartMsg = 'Hola! Quiero hacer el siguiente pedido:\n' + lineas + '\n\nTotal: Gs. ' + total.toLocaleString('es-PY') + '. Estan disponibles?';
  }

  const waCartBtn = document.getElementById('cart-wa-btn');
  if (waCartBtn) {
    waCartBtn.onclick = function(e) {
      e.preventDefault();
      window.open('https://wa.me/595974687312?text=' + encodeURIComponent(waCartMsg), '_blank');
    };
  }
}

function changeQty(name, delta) {
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.name !== name);
  renderCart();
}

function toggleCart() {
  const panel = document.getElementById('cart-panel');
  const overlay = document.getElementById('cart-overlay');
  panel.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = panel.classList.contains('open') ? 'hidden' : '';
}

// ════════════════════════════════════════════════════════════════
// ── SUPABASE CONFIG ──
// Tu proyecto en Supabase. Estas dos variables son las "llaves"
// que le permiten a tu página web hablar con la base de datos.
// ════════════════════════════════════════════════════════════════
const SUPABASE_URL = 'https://ejydjvkvtchgknfrljrs.supabase.co'
const SUPABASE_KEY = 'sb_publishable_vGnLcF9Tm17OQGTL4t1deA_aTmkQYIu'

// ── NOMBRE DEL BUCKET DE STORAGE ──
// ⚠️ ACCIÓN REQUERIDA: Creá este bucket en Supabase antes de usar.
// Pasos: Supabase → Storage → New bucket → Nombre: "entregas-img" → Public ✅
const STORAGE_BUCKET = 'entregas-img'

// ── HEADERS HTTP ──
// Esto es como el "sobre" que acompaña cada mensaje que tu página
// le manda a Supabase. Le dice quién sos y que mandás JSON.
const sbHeaders = {
  'Content-Type': 'application/json',
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`
}

// ── HELPERS ──
function getInitials(nombre) {
  return nombre.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

const avatarColors = ['#7B3FA0', '#e91e8c', '#2563EB', '#F26B1D', '#059669', '#DC2626', '#7C3AED', '#0891B2'];
function getAvatarColor(nombre) {
  let hash = 0;
  for (let i = 0; i < nombre.length; i++) hash = nombre.charCodeAt(i) + ((hash << 5) - hash);
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

// ── ENTREGAS — leer de Supabase ──
async function renderEntregas() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/entregas?order=fecha.desc`, { headers: sbHeaders })
  const entregas = await res.json()

  const grid  = document.getElementById('entregas-grid')
  const empty = document.getElementById('entregas-empty')
  grid.querySelectorAll('.entrega-card').forEach(c => c.remove())

  if (!Array.isArray(entregas) || !entregas.length) {
    empty.style.display = 'block'
    return
  }
  empty.style.display = 'none'

  entregas.forEach(e => {
    const card = document.createElement('div')
    card.className = 'entrega-card students-post'
    const fotoHtml = e.img
      ? `<div class="entrega-foto-wrap"><img class="entrega-foto" src="${e.img}" alt="Entrega de ${e.nombre}" onerror="this.parentElement.innerHTML='<div class=\\'entrega-foto-placeholder\\'>📦</div>'"/></div>`
      : ''
    card.innerHTML = `
      ${fotoHtml}
      <div class="sp-header">
        <div class="sp-avatar" style="background:${getAvatarColor(e.nombre)}">${getInitials(e.nombre)}</div>
        <div class="sp-meta">
          <strong>${e.nombre}</strong>
          ${e.carrera ? `<span>${e.carrera}</span>` : ''}
        </div>
        <div class="sp-stars">⭐⭐⭐⭐⭐</div>
      </div>
      <p class="sp-text">${e.comentario}</p>
      <div class="sp-tag">📦 ${e.producto} · <span class="sp-verified">✅ Compra verificada</span></div>
    `
    grid.appendChild(card)
  })
}

// ── ADMIN ──
const ADMIN_PASS = 'satroni2025'
let adminLoggedIn = false
// ⚠️ ELIMINAMOS imgBase64 — ya no guardamos la imagen como texto gigante.
// Ahora guardamos el archivo directamente para subirlo a Storage.
let imgFile = null  // <- guarda el archivo de imagen seleccionado

function toggleAdmin() {
  document.getElementById('admin-panel').classList.add('open')
  document.getElementById('admin-overlay').classList.add('open')
  document.body.style.overflow = 'hidden'
  document.getElementById('admin-login').style.display = adminLoggedIn ? 'none' : 'block'
  document.getElementById('admin-form').style.display = adminLoggedIn ? 'block' : 'none'
  if (adminLoggedIn) renderAdminLista()
}

function closeAdmin() {
  document.getElementById('admin-panel').classList.remove('open')
  document.getElementById('admin-overlay').classList.remove('open')
  document.body.style.overflow = ''
}

function checkAdminPass() {
  const val = document.getElementById('admin-pass').value
  const err = document.getElementById('admin-error')
  if (val === ADMIN_PASS) {
    adminLoggedIn = true
    document.getElementById('admin-login').style.display = 'none'
    document.getElementById('admin-form').style.display = 'block'
    renderAdminLista()
    err.style.display = 'none'
    document.getElementById('admin-pass').value = ''
  } else {
    err.style.display = 'block'
    document.getElementById('admin-pass').value = ''
    document.getElementById('admin-pass').focus()
  }
}

function previewImg(input) {
  const file = input.files[0]
  if (!file) return

  // ── NUEVO: guardamos el archivo real (no el base64) ──
  // Antes convertíamos la imagen a un texto larguísimo (base64).
  // Ahora simplemente guardamos el archivo para subirlo después.
  imgFile = file

  // Igual mostramos la preview local usando base64 (solo para que el admin
  // pueda verla en pantalla antes de publicar, no se guarda así en Supabase)
  const reader = new FileReader()
  reader.onload = function(ev) {
    document.getElementById('img-preview').src = ev.target.result
    document.getElementById('img-preview-wrap').style.display = 'block'
    document.getElementById('ent-img-url').value = ''
  }
  reader.readAsDataURL(file)
}

function clearImgPreview() {
  // ── NUEVO: limpiamos imgFile en lugar de imgBase64 ──
  imgFile = null
  document.getElementById('img-preview-wrap').style.display = 'none'
  document.getElementById('img-preview').src = ''
  document.getElementById('ent-img-file').value = ''
}

// ════════════════════════════════════════════════════════════════
// ── SUBIR IMAGEN A SUPABASE STORAGE ──
// Esta función nueva se encarga de subir el archivo de imagen
// al "disco duro en la nube" de Supabase (el Storage/bucket).
// Devuelve la URL pública de la imagen para guardarla en la tabla.
// ════════════════════════════════════════════════════════════════
async function subirImagen(file) {
  // Generamos un nombre único para el archivo usando la fecha actual
  // y un número aleatorio, así dos fotos nunca se pisan entre sí.
  // Ejemplo de resultado: "1716300000000-a3f9z.jpg"
  const ext  = file.name.split('.').pop()                          // extensión: jpg, png, webp...
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}` // nombre único

  // Le mandamos el archivo a Supabase Storage con un fetch POST.
  // La URL incluye el nombre del bucket y el path del archivo.
  const uploadRes = await fetch(
    `${SUPABASE_URL}/storage/v1/object/${STORAGE_BUCKET}/${path}`,
    {
      method: 'POST',
      headers: {
        // Para subir archivos al Storage no usamos JSON, usamos el tipo
        // del archivo directamente (image/jpeg, image/png, etc.)
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': file.type
      },
      body: file   // el archivo binario va directo en el cuerpo del request
    }
  )

  if (!uploadRes.ok) {
    // Si algo salió mal, mostramos el error en consola para poder debuggear
    const errorText = await uploadRes.text()
    console.error('Error al subir imagen:', errorText)
    throw new Error('No se pudo subir la imagen al Storage.')
  }

  // Armamos la URL pública de la imagen subida.
  // Esta URL es la que se guarda en la columna "img" de la tabla entregas.
  // Al ser pública, cualquier dispositivo puede verla sin autenticación.
  return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${path}`
}

// ════════════════════════════════════════════════════════════════
// ── AGREGAR entrega a Supabase ──
// Cambios respecto a la versión anterior:
//   1. Si hay imagen, la sube primero al Storage (no la convierte a base64)
//   2. Guarda solo la URL corta en la tabla, no el texto gigante
//   3. Muestra un indicador de "Publicando..." para que el admin sepa que espere
// ════════════════════════════════════════════════════════════════
async function agregarEntrega() {
  const nombre     = document.getElementById('ent-nombre').value.trim()
  const carrera    = document.getElementById('ent-carrera').value.trim()
  const producto   = document.getElementById('ent-producto').value.trim()
  const comentario = document.getElementById('ent-comentario').value.trim()
  const imgUrl     = document.getElementById('ent-img-url').value.trim()

  if (!nombre || !producto || !comentario) {
    alert('Por favor completá nombre, producto y comentario.')
    return
  }

  // ── NUEVO: mostramos feedback visual mientras se sube la imagen ──
  // Esto evita que el admin toque algo mientras el archivo se está subiendo.
  const btn = document.querySelector('#admin-form button[onclick*="agregarEntrega"]')
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Publicando...' }

  let img = imgUrl || ''  // por defecto usamos la URL manual si la pusieron

  try {
    // ── NUEVO: si hay un archivo seleccionado, lo subimos al Storage ──
    // imgFile es el archivo que guardamos cuando el admin eligió la foto.
    if (imgFile) {
      img = await subirImagen(imgFile)
      // img ahora es algo como:
      // "https://ejydjv...supabase.co/storage/v1/object/public/entregas-img/1716300000-abc.jpg"
      // Una URL corta y pública que funciona en cualquier dispositivo 🎉
    }

    // Guardamos el registro en la tabla "entregas" de Supabase.
    // La columna "img" recibe la URL corta, no el base64.
    const res = await fetch(`${SUPABASE_URL}/rest/v1/entregas`, {
      method: 'POST',
      headers: { ...sbHeaders, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ nombre, carrera, producto, comentario, img })
    })

    if (!res.ok) {
      alert('Error al guardar. Revisá la consola.')
      console.error(await res.text())
      return
    }

    // Limpiamos el formulario después de publicar con éxito
    document.getElementById('ent-nombre').value     = ''
    document.getElementById('ent-carrera').value    = ''
    document.getElementById('ent-producto').value   = ''
    document.getElementById('ent-comentario').value = ''
    document.getElementById('ent-img-url').value    = ''
    clearImgPreview()

    // Actualizamos la vista pública y el panel admin
    await renderEntregas()
    await renderAdminLista()
    alert('✅ Entrega publicada correctamente!')

  } catch (err) {
    // Si subirImagen() lanzó un error, lo capturamos acá
    alert('Error: ' + err.message)
    console.error(err)
  } finally {
    // ── NUEVO: siempre re-habilitamos el botón al terminar ──
    // El "finally" se ejecuta tanto si hubo éxito como si hubo error.
    if (btn) { btn.disabled = false; btn.textContent = '📤 Publicar entrega' }
  }
}

// ── ELIMINAR entrega de Supabase ──
async function eliminarEntrega(id) {
  if (!confirm('¿Eliminar esta entrega?')) return
  await fetch(`${SUPABASE_URL}/rest/v1/entregas?id=eq.${id}`, {
    method: 'DELETE',
    headers: sbHeaders
  })
  await renderEntregas()
  await renderAdminLista()
}

// ── LISTAR entregas en panel admin ──
async function renderAdminLista() {
  const res      = await fetch(`${SUPABASE_URL}/rest/v1/entregas?order=fecha.desc`, { headers: sbHeaders })
  const entregas = await res.json()
  const lista    = document.getElementById('admin-lista-entregas')

  if (!Array.isArray(entregas) || !entregas.length) {
    lista.innerHTML = '<p style="color:#999;font-size:.85rem;">No hay entregas publicadas aún.</p>'
    return
  }

  lista.innerHTML = entregas.map(e => `
    <div class="admin-entrega-item">
      <div class="admin-entrega-thumb">
        ${e.img ? `<img src="${e.img}" alt=""/>` : '📦'}
      </div>
      <div class="admin-entrega-info">
        <strong>${e.nombre}</strong>
        <span>${e.producto}</span>
      </div>
      <button class="admin-entrega-del" onclick="eliminarEntrega(${e.id})" title="Eliminar">🗑️</button>
    </div>
  `).join('')
}

// ── INICIALIZAR ──
// Al cargar la página, traemos las entregas de Supabase y las mostramos.
renderEntregas()
