const STORAGE_KEY = 'aich_courses';

const CAT_LABEL = {
  'beginner':        'ผู้เริ่มต้น',
  'machine-learning':'Machine Learning',
  'deep-learning':   'Deep Learning',
  'nlp':             'NLP',
  'computer-vision': 'Computer Vision',
  'llm':             'LLM & Prompt',
};

const DEFAULT_COURSES = window.COURSE_DEFAULTS;

/* legacy placeholder — kept for reference only, never reached */
const _UNUSED = [
  {
    id:1, title:"Machine Learning Specialization", logo:"logos/coursera.png", category:"machine-learning",
    level:"Beginner", duration:"3 เดือน", provider:"Coursera · DeepLearning.AI",
    desc:"คอร์ส ML ที่ดีที่สุดในโลกจาก Andrew Ng ผู้บุกเบิก AI",
    detail:"ครอบคลุม Supervised, Unsupervised Learning และ Reinforcement Learning ด้วย Python และ scikit-learn สอนโดย Andrew Ng อดีต Head of Google Brain และ Chief Scientist ของ Baidu เหมาะสำหรับผู้เริ่มต้นจนถึงระดับกลาง",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/specializations/machine-learning-introduction"
  },
  {
    id:2, title:"Deep Learning Specialization", logo:"logos/coursera.png", category:"deep-learning",
    level:"Intermediate", duration:"5 เดือน", provider:"Coursera · DeepLearning.AI",
    desc:"เจาะลึก Neural Networks, CNN, RNN และ Transformer จาก Andrew Ng",
    detail:"5 คอร์สที่ครอบคลุม Neural Networks พื้นฐาน, CNN, Sequence Models, Hyperparameter Tuning และ Structuring ML Projects ใช้ TensorFlow เป็นหลัก เป็นคอร์สอ้างอิงระดับโลก",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/specializations/deep-learning"
  },
  {
    id:3, title:"Practical Deep Learning for Coders", logo:"logos/fastai.png", category:"deep-learning",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"fast.ai",
    desc:"เรียน Deep Learning แบบ top-down ลงมือทำก่อน ทฤษฎีทีหลัง",
    detail:"fast.ai สอน Deep Learning โดยเริ่มจากการทำให้ผลลัพธ์ออกมาก่อน แล้วค่อยลงลึกทฤษฎี ใช้ PyTorch และ fastai library เหมาะสำหรับ coder ที่อยากเข้าสู่ Deep Learning อย่างรวดเร็ว",
    price:"ฟรี", url:"https://course.fast.ai"
  },
  {
    id:4, title:"Google Machine Learning Crash Course", logo:"logos/google.png", category:"machine-learning",
    level:"Beginner", duration:"15 ชั่วโมง", provider:"Google Developers",
    desc:"เรียน ML ฟรีจาก Google เน้นปฏิบัติด้วย TensorFlow",
    detail:"คอร์สฟรีจาก Google ครอบคลุม ML concepts เช่น Gradient Descent, Neural Networks และ Classification ด้วย interactive exercises และ real-world case studies จาก Google ใช้ TensorFlow",
    price:"ฟรี", url:"https://developers.google.com/machine-learning/crash-course"
  },
  {
    id:5, title:"CS229: Machine Learning (Stanford)", logo:"logos/stanford.png", category:"machine-learning",
    level:"Advanced", duration:"1 ภาคการศึกษา", provider:"Stanford University",
    desc:"คอร์ส ML ระดับมหาวิทยาลัย Stanford เนื้อหาเข้มข้นที่สุด",
    detail:"คอร์ส ML ระดับบัณฑิตของ Stanford ครอบคลุม Linear Algebra, Probability, Optimization, SVM, EM Algorithm และ Reinforcement Learning เหมาะสำหรับผู้ที่มีพื้นฐาน Math แน่น เนื้อหาและ lecture notes เปิดให้ดาวน์โหลดฟรี",
    price:"ฟรี", url:"https://cs229.stanford.edu"
  },
  {
    id:6, title:"CS231n: Convolutional Neural Networks", logo:"logos/stanford.png", category:"computer-vision",
    level:"Advanced", duration:"1 ภาคการศึกษา", provider:"Stanford University",
    desc:"คอร์ส Computer Vision ระดับโลกจาก Stanford",
    detail:"คอร์สชื่อดังจาก Stanford ที่สอน CNN อย่างลึกซึ้ง ครอบคลุม Image Classification, Object Detection, Segmentation และ Generative Models บรรยายโดยนักวิจัยชั้นนำ Lecture และ assignments เปิดให้ทำฟรี",
    price:"ฟรี", url:"http://cs231n.stanford.edu"
  },
  {
    id:7, title:"CS224N: NLP with Deep Learning", logo:"logos/stanford.png", category:"nlp",
    level:"Advanced", duration:"1 ภาคการศึกษา", provider:"Stanford University",
    desc:"คอร์ส NLP ชั้นแนวหน้าของโลกจาก Stanford",
    detail:"สอน NLP สมัยใหม่ตั้งแต่ Word Vectors ไปจนถึง Transformer, BERT, GPT และ Large Language Models บรรยายโดยนักวิจัยจาก Stanford NLP Group ทุก lecture มี video และ slides ให้ดูฟรี",
    price:"ฟรี", url:"https://web.stanford.edu/class/cs224n/"
  },
  {
    id:8, title:"Hugging Face NLP Course", logo:"logos/huggingface.png", category:"nlp",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"Hugging Face",
    desc:"เรียน NLP ทันสมัยด้วย Transformers library จาก Hugging Face",
    detail:"คอร์สฟรีจากทีม Hugging Face สอนการใช้ Transformers library ตั้งแต่พื้นฐานจนถึง Fine-tuning โมเดล BERT, GPT-2, T5 บน datasets ต่างๆ เหมาะสำหรับคนที่อยากใช้ LLM จริงๆ",
    price:"ฟรี", url:"https://huggingface.co/learn/nlp-course"
  },
  {
    id:9, title:"MIT 6.S191: Introduction to Deep Learning", logo:"logos/mit.png", category:"deep-learning",
    level:"Intermediate", duration:"2 สัปดาห์", provider:"MIT",
    desc:"คอร์ส Intensive Deep Learning จาก MIT เรียนฟรีได้ทาง YouTube",
    detail:"MIT Bootcamp เข้มข้น 2 สัปดาห์ครอบคลุม Deep Learning ทั้งหมด ตั้งแต่ Neural Networks, CNN, RNN, Generative Models จนถึง Reinforcement Learning ทุก lecture มีบน YouTube และ lab ทำบน Google Colab",
    price:"ฟรี", url:"http://introtodeeplearning.com"
  },
  {
    id:10, title:"Elements of AI", logo:"logos/elementsofai.png", category:"beginner",
    level:"Beginner", duration:"6 สัปดาห์", provider:"University of Helsinki",
    desc:"เรียน AI พื้นฐานฟรีจากมหาวิทยาลัย Helsinki รับ Certificate ได้",
    detail:"คอร์สฟรีจาก University of Helsinki และ Reaktor ออกแบบสำหรับทุกคนไม่ต้องมีพื้นฐาน Coding ครอบคลุม AI concepts, Machine Learning, Neural Networks และ Ethics มีผู้เรียนทั่วโลกกว่า 1 ล้านคน",
    price:"ฟรี", url:"https://www.elementsofai.com"
  },
  {
    id:11, title:"Kaggle Learn: Machine Learning", logo:"logos/kaggle.png", category:"machine-learning",
    level:"Beginner", duration:"3 ชั่วโมง", provider:"Kaggle",
    desc:"เรียน ML ฟรีบน Kaggle พร้อม hands-on notebooks",
    detail:"Micro-courses จาก Kaggle เน้น hands-on ทำจริงบน Jupyter Notebooks ครอบคลุม Pandas, scikit-learn, Feature Engineering, XGBoost และ Deep Learning เสร็จแล้วได้รับ Certificate ฟรีจาก Kaggle",
    price:"ฟรี", url:"https://www.kaggle.com/learn"
  },
  {
    id:12, title:"TensorFlow Developer Certificate", logo:"logos/coursera.png", category:"deep-learning",
    level:"Intermediate", duration:"4 เดือน", provider:"Coursera · DeepLearning.AI",
    desc:"เตรียมสอบ Google TensorFlow Developer Certificate",
    detail:"Professional Certificate จาก DeepLearning.AI เตรียมสำหรับการสอบ TensorFlow Developer Certificate ของ Google ครอบคลุม Image Classification, NLP, Time Series ด้วย TensorFlow และ Keras",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/professional-certificates/tensorflow-in-practice"
  },
  {
    id:13, title:"PyTorch Tutorials (Official)", logo:"logos/pytorch.png", category:"deep-learning",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"PyTorch / Meta AI",
    desc:"เอกสารและ tutorial อย่างเป็นทางการจาก PyTorch / Meta AI",
    detail:"Tutorial อย่างเป็นทางการจาก Meta AI ครอบคลุมทุกด้านของ PyTorch ตั้งแต่ Tensor basics, Autograd, Neural Networks, CNN, RNN จนถึง Distributed Training ใช้ Jupyter Notebooks และ Google Colab",
    price:"ฟรี", url:"https://pytorch.org/tutorials/"
  },
  {
    id:14, title:"Full Stack Deep Learning", logo:"logos/fsdl.png", category:"deep-learning",
    level:"Advanced", duration:"เรียนได้ฟรี", provider:"FSDL",
    desc:"เรียนการนำ Deep Learning ไป Production จริง ทั้ง stack",
    detail:"คอร์สที่สอนการทำ ML project ตั้งแต่ต้นจนจบ ครอบคลุม Data Management, Training, Testing, Deployment, Monitoring และ Team Workflow เหมาะสำหรับคนที่จะเอา ML ขึ้น Production จริง",
    price:"ฟรี", url:"https://fullstackdeeplearning.com/course"
  },
  {
    id:15, title:"Microsoft Azure AI Fundamentals (AI-900)", logo:"logos/microsoft.png", category:"beginner",
    level:"Beginner", duration:"เรียนได้ฟรี", provider:"Microsoft Learn",
    desc:"เรียน AI บน Cloud พร้อมสอบ Microsoft AI-900 Certification",
    detail:"Learning path ฟรีจาก Microsoft เตรียมสอบ AI-900 ครอบคลุม AI workloads, ML fundamentals, Computer Vision, NLP และ Conversational AI บน Azure เหมาะสำหรับผู้ที่สนใจสาย Cloud AI",
    price:"ฟรี (สอบ ~$165)", url:"https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/"
  },
  {
    id:16, title:"Prompt Engineering Guide", logo:"logos/promptingguide.png", category:"llm",
    level:"Beginner", duration:"เรียนได้ฟรี", provider:"DAIR.AI",
    desc:"คู่มือ Prompt Engineering ครบที่สุด อัปเดตล่าสุดเสมอ",
    detail:"เอกสาร open-source ที่รวบรวมเทคนิค Prompt Engineering ทั้งหมด ได้แก่ Zero-shot, Few-shot, Chain-of-Thought, ReAct, RAG และ Adversarial Prompting รองรับโมเดลจาก OpenAI, Anthropic, Google",
    price:"ฟรี", url:"https://www.promptingguide.ai"
  },
  {
    id:17, title:"Build Apps with OpenAI API", logo:"logos/openai.png", category:"llm",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"OpenAI",
    desc:"เอกสารและ tutorial อย่างเป็นทางการจาก OpenAI",
    detail:"Documentation และ Cookbook จาก OpenAI ครอบคลุมการใช้ GPT-4, DALL-E, Whisper และ Embeddings API พร้อม code examples สำหรับ Python และ Node.js เหมาะสำหรับนักพัฒนาที่อยากสร้างแอปด้วย LLM",
    price:"ฟรี (API usage มีค่าใช้จ่าย)", url:"https://platform.openai.com/docs"
  },
  {
    id:18, title:"LangChain: Build LLM Applications", logo:"logos/langchain.png", category:"llm",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"LangChain",
    desc:"สร้างแอป AI ด้วย LangChain framework อย่างเป็นทางการ",
    detail:"LangChain เป็น framework ยอดนิยมสำหรับสร้าง LLM applications ครอบคลุม Chains, Agents, RAG, Memory และ Tools integration เชื่อมต่อกับ OpenAI, Claude, Gemini และ open-source models",
    price:"ฟรี", url:"https://python.langchain.com/docs/get_started"
  },
  {
    id:19, title:"Computer Vision with OpenCV", logo:"logos/opencv.png", category:"computer-vision",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"OpenCV University",
    desc:"เรียน Computer Vision ด้วย OpenCV จาก official team",
    detail:"คอร์สจาก OpenCV University ครอบคลุมการประมวลผลภาพ, Object Detection, Face Recognition, Video Analysis และการใช้ Deep Learning ร่วมกับ OpenCV ใช้ Python และมี hands-on projects จริง",
    price:"ฟรี – $30/คอร์ส", url:"https://opencv.org/university/"
  },
  {
    id:20, title:"Reinforcement Learning Specialization", logo:"logos/coursera.png", category:"machine-learning",
    level:"Advanced", duration:"4 เดือน", provider:"Coursera · University of Alberta",
    desc:"เรียน Reinforcement Learning อย่างเป็นระบบจาก University of Alberta",
    detail:"Specialization 4 คอร์สจาก University of Alberta และ Alberta Machine Intelligence Institute ครอบคลุม Fundamentals, Sample-based Learning, Prediction & Control ด้วย Neural Networks และ Complete RL System",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/specializations/reinforcement-learning"
  },
];

let courses = [];
let deleteTargetId = null;

/* ── Resolve logo path for display in Admin folder ── */
function resolveLogo(logo) {
  if (!logo) return '';
  if (logo.startsWith('http')) return logo;
  return `../Course/${logo}`;
}

/* ── Load / Save ── */
function loadCourses() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    courses = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(DEFAULT_COURSES));
  } catch(e) {
    courses = JSON.parse(JSON.stringify(DEFAULT_COURSES));
  }
}

function saveCourses() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
}

/* ── Auth ── */
function checkAuth() {
  const user = JSON.parse(sessionStorage.getItem('aich_user') || 'null');
  if (!user) {
    window.location.href = '../Login/signin.html';
    return;
  }
  document.getElementById('navUser').textContent = `👤 ${user.name}`;
}

function logout() {
  sessionStorage.removeItem('aich_user');
  window.location.href = '../Login/signin.html';
}

/* ── Stats ── */
function updateStats() {
  const total = courses.length;
  const free  = courses.filter(c => c.price && (c.price.includes('ฟรี') || c.price.toLowerCase().includes('free'))).length;
  document.getElementById('statTotal').textContent = total;
  document.getElementById('statFree').textContent  = free;
  document.getElementById('statPaid').textContent  = total - free;
  document.getElementById('statCats').textContent  = new Set(courses.map(c => c.category)).size;
}

/* ── Render table ── */
function renderTable() {
  const q   = (document.getElementById('searchInput').value || '').toLowerCase();
  const cat = document.getElementById('filterCat').value;

  const filtered = courses.filter(c => {
    const matchQ   = !q || c.title.toLowerCase().includes(q) || c.provider.toLowerCase().includes(q);
    const matchCat = !cat || c.category === cat;
    return matchQ && matchCat;
  });

  document.getElementById('resultCount').textContent = `${filtered.length} คอร์ส`;

  const tbody = document.getElementById('courseTableBody');
  if (!filtered.length) {
    tbody.innerHTML = '<tr><td colspan="7" class="no-data">ไม่พบคอร์สที่ตรงกัน</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map(c => `
    <tr>
      <td>
        <img class="logo-img" src="${resolveLogo(c.logo)}" alt="${c.provider}"
             onerror="this.style.opacity='0.2';this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/>';" />
      </td>
      <td class="td-title">${escHtml(c.title)}</td>
      <td>${escHtml(c.provider)}</td>
      <td><span class="cat-badge cat-${c.category}">${CAT_LABEL[c.category] || c.category}</span></td>
      <td><span class="level-badge level-${c.level}">${escHtml(c.level)}</span></td>
      <td>${escHtml(c.price)}</td>
      <td>
        <button class="btn-icon" title="แก้ไข" onclick="openEdit(${c.id})">✏️</button>
        <button class="btn-icon btn-del" title="ลบ" onclick="openDelete(${c.id})">🗑️</button>
      </td>
    </tr>
  `).join('');
}

function escHtml(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── Add modal ── */
function openAddModal() {
  document.getElementById('courseForm').reset();
  document.getElementById('editId').value = '';
  document.getElementById('modalTitle').textContent = 'เพิ่มคอร์สใหม่';
  const preview = document.getElementById('logoPreview');
  preview.src = '';
  preview.style.opacity = '0';
  showModal('modalOverlay');
}

/* ── Edit modal ── */
function openEdit(id) {
  const c = courses.find(x => x.id === id);
  if (!c) return;

  document.getElementById('editId').value    = id;
  document.getElementById('modalTitle').textContent = 'แก้ไขคอร์ส';
  document.getElementById('fTitle').value    = c.title;
  document.getElementById('fProvider').value = c.provider;
  document.getElementById('fPrice').value    = c.price;
  document.getElementById('fUrl').value      = c.url;
  document.getElementById('fLogo').value     = c.logo;
  document.getElementById('fCategory').value = c.category;
  document.getElementById('fLevel').value    = c.level;
  document.getElementById('fDuration').value = c.duration;
  document.getElementById('fDesc').value     = c.desc;
  document.getElementById('fDetail').value   = c.detail;

  const preview = document.getElementById('logoPreview');
  preview.src   = resolveLogo(c.logo);
  showModal('modalOverlay');
}

function closeModal() { hideModal('modalOverlay'); }
function closeModalOutside(e) { if (e.target.id === 'modalOverlay') closeModal(); }

/* ── Save (add / update) ── */
function saveCourse(e) {
  e.preventDefault();
  const editId = document.getElementById('editId').value;
  const entry = {
    id:       editId ? parseInt(editId) : Date.now(),
    title:    document.getElementById('fTitle').value.trim(),
    provider: document.getElementById('fProvider').value.trim(),
    price:    document.getElementById('fPrice').value.trim() || 'ฟรี',
    url:      document.getElementById('fUrl').value.trim(),
    logo:     document.getElementById('fLogo').value.trim(),
    category: document.getElementById('fCategory').value,
    level:    document.getElementById('fLevel').value,
    duration: document.getElementById('fDuration').value.trim(),
    desc:     document.getElementById('fDesc').value.trim(),
    detail:   document.getElementById('fDetail').value.trim(),
  };

  if (editId) {
    const idx = courses.findIndex(x => x.id === parseInt(editId));
    if (idx > -1) courses[idx] = entry;
  } else {
    courses.push(entry);
  }

  saveCourses();
  closeModal();
  renderTable();
  updateStats();
}

/* ── Delete ── */
function openDelete(id) {
  deleteTargetId = id;
  const c = courses.find(x => x.id === id);
  document.getElementById('deleteName').textContent = c ? c.title : '';
  showModal('deleteOverlay');
}

function closeDelete() { deleteTargetId = null; hideModal('deleteOverlay'); }
function closeDeleteOutside(e) { if (e.target.id === 'deleteOverlay') closeDelete(); }

function confirmDelete() {
  if (deleteTargetId === null) return;
  courses = courses.filter(x => x.id !== deleteTargetId);
  saveCourses();
  closeDelete();
  renderTable();
  updateStats();
}

/* ── Logo fetch from URL ── */
function fetchLogo() {
  const url = document.getElementById('fUrl').value.trim();
  if (!url) return;
  try {
    const faviconUrl = `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(url)}`;
    document.getElementById('fLogo').value = faviconUrl;
    const preview = document.getElementById('logoPreview');
    preview.src   = faviconUrl;
    preview.style.opacity = '1';
  } catch(e) {}
}

function previewLogo() {
  const val = document.getElementById('fLogo').value.trim();
  const preview = document.getElementById('logoPreview');
  if (val) {
    preview.src = val.startsWith('http') ? val : resolveLogo(val);
    preview.style.opacity = '1';
  } else {
    preview.style.opacity = '0';
  }
}

/* ── Reset ── */
function resetToDefault() {
  if (!confirm('รีเซ็ตคอร์สทั้งหมดกลับเป็นค่าเริ่มต้น?\nการเปลี่ยนแปลงทั้งหมดจะหายไป')) return;
  localStorage.removeItem(STORAGE_KEY);
  loadCourses();
  renderTable();
  updateStats();
}

/* ── Modal helpers ── */
function showModal(id) { document.getElementById(id).style.display = 'flex'; }
function hideModal(id) { document.getElementById(id).style.display = 'none'; }

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  loadCourses();
  renderTable();
  updateStats();

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeDelete(); }
  });
});
