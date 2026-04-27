const courses = (function() {
  try {
    const stored = localStorage.getItem('aich_courses');
    if (stored) return JSON.parse(stored);
  } catch(e) {}
  return JSON.parse(JSON.stringify(window.COURSE_DEFAULTS));
  /* eslint-disable-next-line no-unreachable */
  return [
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
  {
    id:21, title:"AI For Everyone", logo:"logos/coursera.png", category:"beginner",
    level:"Beginner", duration:"6 ชั่วโมง", provider:"Coursera · DeepLearning.AI",
    desc:"คอร์ส AI สำหรับทุกคนจาก Andrew Ng ไม่ต้องมีพื้นฐาน Coding",
    detail:"คอร์สสั้นจาก Andrew Ng ออกแบบสำหรับผู้บริหาร นักการตลาด และบุคคลทั่วไปที่ต้องการเข้าใจ AI ครอบคลุม AI concepts, workflow, strategy และ ethics ไม่มีการเขียนโปรแกรม เหมาะสำหรับทุกสาขาอาชีพ",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/learn/ai-for-everyone"
  },
  {
    id:22, title:"Generative AI for Everyone", logo:"logos/coursera.png", category:"beginner",
    level:"Beginner", duration:"5 ชั่วโมง", provider:"Coursera · DeepLearning.AI",
    desc:"เรียนรู้ Generative AI จาก Andrew Ng สำหรับทุกคน",
    detail:"คอร์สล่าสุดจาก Andrew Ng อธิบายการทำงานของ Generative AI, LLM, ChatGPT และวิธีใช้ prompt อย่างมีประสิทธิภาพ ไม่ต้องมีพื้นฐาน coding ครอบคลุม use cases ทางธุรกิจและความเสี่ยงที่ต้องระวัง",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/learn/generative-ai-for-everyone"
  },
  {
    id:23, title:"AI Python for Beginners", logo:"logos/coursera.png", category:"beginner",
    level:"Beginner", duration:"4 สัปดาห์", provider:"Coursera · DeepLearning.AI",
    desc:"เรียน Python สำหรับ AI จาก Andrew Ng ตั้งแต่ศูนย์",
    detail:"คอร์สสอน Python ขั้นพื้นฐานที่เน้น AI use cases จาก DeepLearning.AI ครอบคลุม Variables, Functions, Lists, Dictionaries และ AI tools integration ด้วย ChatGPT เหมาะสำหรับผู้ที่ไม่เคยเขียน Code มาก่อน",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/learn/ai-python-for-beginners"
  },
  {
    id:24, title:"Microsoft AI-900: AI Fundamentals", logo:"logos/microsoft.png", category:"beginner",
    level:"Beginner", duration:"เรียนได้ฟรี", provider:"Microsoft Learn",
    desc:"เตรียมสอบ AI-900 Certification ฟรีจาก Microsoft",
    detail:"Learning path ครบจาก Microsoft ครอบคลุม AI workloads, Responsible AI, Machine Learning, Computer Vision, NLP และ Conversational AI บน Azure เหมาะสำหรับผู้ที่ต้องการ Certification ระดับ Fundamentals",
    price:"ฟรี (สอบ ~$165)", url:"https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/"
  },
  {
    id:25, title:"Intro to Generative AI (Google)", logo:"logos/google.png", category:"beginner",
    level:"Beginner", duration:"45 นาที", provider:"Google Cloud Skills Boost",
    desc:"เรียน Generative AI เบื้องต้นฟรีจาก Google Cloud",
    detail:"คอร์สสั้นจาก Google Cloud ที่อธิบาย Generative AI, LLM และวิธีที่ Google ใช้ Generative AI ใน products ต่างๆ พร้อม quiz และ badge เมื่อผ่านการทดสอบ เรียนฟรีบน Google Cloud Skills Boost",
    price:"ฟรี", url:"https://www.cloudskillsboost.google/course_templates/536"
  },
  {
    id:26, title:"ML for Beginners (Microsoft)", logo:"logos/microsoft.png", category:"beginner",
    level:"Beginner", duration:"12 สัปดาห์", provider:"Microsoft / GitHub",
    desc:"หลักสูตร ML สำหรับผู้เริ่มต้นจาก Microsoft บน GitHub ฟรี",
    detail:"Curriculum 26 บทเรียนจาก Microsoft Research สอน ML คลาสสิกโดยใช้ scikit-learn เป็นหลัก ครอบคลุม Regression, Classification, Clustering, NLP และ Time Series ทุก lesson มี Jupyter Notebook และ quiz",
    price:"ฟรี", url:"https://github.com/microsoft/ML-For-Beginners"
  },
  {
    id:27, title:"AI For Beginners (Microsoft)", logo:"logos/microsoft.png", category:"beginner",
    level:"Beginner", duration:"12 สัปดาห์", provider:"Microsoft / GitHub",
    desc:"หลักสูตร AI สำหรับผู้เริ่มต้นครบจบจาก Microsoft",
    detail:"Curriculum 24 บทเรียนจาก Microsoft ครอบคลุม AI history, Symbolic AI, Neural Networks, Computer Vision, NLP และ AI Ethics มี projects และ quizzes ในทุก lesson รองรับ Python และ JavaScript",
    price:"ฟรี", url:"https://github.com/microsoft/AI-For-Beginners"
  },
  {
    id:28, title:"Kaggle: Intro to Machine Learning", logo:"logos/kaggle.png", category:"beginner",
    level:"Beginner", duration:"3 ชั่วโมง", provider:"Kaggle",
    desc:"เริ่มต้น ML ด้วย Decision Trees และ Random Forests บน Kaggle",
    detail:"Micro-course จาก Kaggle สอน ML ขั้นต้นด้วย scikit-learn ครอบคลุม Decision Trees, Model Validation, Underfitting/Overfitting, Random Forests และ XGBoost ทำแบบ hands-on บน Kaggle Notebooks",
    price:"ฟรี", url:"https://www.kaggle.com/learn/intro-to-machine-learning"
  },
  {
    id:29, title:"Kaggle: Pandas", logo:"logos/kaggle.png", category:"beginner",
    level:"Beginner", duration:"4 ชั่วโมง", provider:"Kaggle",
    desc:"เรียน Pandas สำหรับ Data Science ฟรีบน Kaggle",
    detail:"Micro-course จาก Kaggle สอนการใช้ Pandas library สำหรับ Data Science ครอบคลุม DataFrame, Indexing, Summary Functions, Grouping, Data Types และ Renaming/Combining แบบ hands-on",
    price:"ฟรี", url:"https://www.kaggle.com/learn/pandas"
  },
  {
    id:30, title:"Kaggle: Intro to AI Ethics", logo:"logos/kaggle.png", category:"beginner",
    level:"Beginner", duration:"4 ชั่วโมง", provider:"Kaggle",
    desc:"เรียนรู้จริยธรรม AI เบื้องต้นบน Kaggle ฟรี",
    detail:"คอร์สจาก Kaggle ครอบคลุม Human-Centered Design, Bias in AI, Fairness, Model Cards และ AI Ethics frameworks เหมาะสำหรับ Data Scientists และผู้พัฒนา AI ที่อยากเข้าใจผลกระทบของ AI ต่อสังคม",
    price:"ฟรี", url:"https://www.kaggle.com/learn/intro-to-ai-ethics"
  },
  {
    id:31, title:"Applied Machine Learning (Cornell)", logo:"logos/coursera.png", category:"machine-learning",
    level:"Intermediate", duration:"5 เดือน", provider:"Coursera · Cornell University",
    desc:"เรียน Applied ML จาก Cornell มุ่งเน้นการประยุกต์ใช้จริง",
    detail:"คอร์สจาก Cornell University ครอบคลุม Supervised/Unsupervised Learning, Feature Engineering, Model Selection, Ensemble Methods และ Best Practices สำหรับ ML projects จริงในอุตสาหกรรม ใช้ Python และ scikit-learn",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/learn/applied-machine-learning"
  },
  {
    id:32, title:"IBM Machine Learning Professional Certificate", logo:"logos/coursera.png", category:"machine-learning",
    level:"Intermediate", duration:"6 เดือน", provider:"Coursera · IBM",
    desc:"Professional Certificate ด้าน ML จาก IBM ครบทุกด้าน",
    detail:"6-course Professional Certificate จาก IBM ครอบคลุม Exploratory Data Analysis, Supervised ML, Unsupervised ML, Deep Learning, Recommender Systems และ Time Series & Survival Analysis ใช้ Python และ scikit-learn",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/professional-certificates/ibm-machine-learning"
  },
  {
    id:33, title:"Kaggle: Intermediate Machine Learning", logo:"logos/kaggle.png", category:"machine-learning",
    level:"Intermediate", duration:"4 ชั่วโมง", provider:"Kaggle",
    desc:"ยกระดับทักษะ ML ด้วย Feature Engineering และ XGBoost",
    detail:"Micro-course จาก Kaggle ต่อยอดจาก Intro ครอบคลุม Missing Values, Categorical Variables, Pipelines, Cross-Validation, XGBoost และ Data Leakage ทำแบบ hands-on บน Kaggle Notebooks",
    price:"ฟรี", url:"https://www.kaggle.com/learn/intermediate-machine-learning"
  },
  {
    id:34, title:"Kaggle: Feature Engineering", logo:"logos/kaggle.png", category:"machine-learning",
    level:"Intermediate", duration:"5 ชั่วโมง", provider:"Kaggle",
    desc:"เรียน Feature Engineering ให้โมเดล ML แม่นยำยิ่งขึ้น",
    detail:"Micro-course จาก Kaggle สอนเทคนิค Feature Engineering ครอบคลุม Mutual Information, Creating Features, K-Means Clustering, Principal Component Analysis และ Target Encoding ด้วย scikit-learn",
    price:"ฟรี", url:"https://www.kaggle.com/learn/feature-engineering"
  },
  {
    id:35, title:"Kaggle: Time Series", logo:"logos/kaggle.png", category:"machine-learning",
    level:"Intermediate", duration:"5 ชั่วโมง", provider:"Kaggle",
    desc:"เรียน Time Series Forecasting ด้วย ML บน Kaggle",
    detail:"Micro-course จาก Kaggle ครอบคลุม Linear Regression for Time Series, Lag Features, Trend, Seasonality, Hybrid Models และ Forecasting with XGBoost เหมาะสำหรับการพยากรณ์ยอดขาย ราคา หรือข้อมูลอนุกรมเวลา",
    price:"ฟรี", url:"https://www.kaggle.com/learn/time-series"
  },
  {
    id:36, title:"AWS Machine Learning Specialty", logo:"logos/coursera.png", category:"machine-learning",
    level:"Advanced", duration:"6 เดือน", provider:"Coursera · AWS",
    desc:"เตรียมสอบ AWS Certified Machine Learning Specialty",
    detail:"คอร์สจาก AWS ครอบคลุม Data Engineering, EDA, Modeling, ML Implementation บน SageMaker, Deployment และ Security เหมาะสำหรับ ML Engineers ที่ต้องการ Certification จาก Amazon Web Services",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/learn/aws-machine-learning"
  },
  {
    id:37, title:"CS221: AI Principles & Techniques (Stanford)", logo:"logos/stanford.png", category:"machine-learning",
    level:"Advanced", duration:"1 ภาคการศึกษา", provider:"Stanford University",
    desc:"คอร์ส AI ระดับ Graduate จาก Stanford ครบ State Space, Games, ML",
    detail:"คอร์สครอบคลุม AI อย่างกว้างขวาง ตั้งแต่ Search Algorithms, Game Playing, Constraint Satisfaction, Bayesian Networks, ML, Neural Networks ไปจนถึง Logic Reasoning and Planning เหมาะสำหรับผู้ที่มีพื้นฐาน CS แน่น",
    price:"ฟรี", url:"https://stanford-cs221.github.io/autumn2024/"
  },
  {
    id:38, title:"CS234: Reinforcement Learning (Stanford)", logo:"logos/stanford.png", category:"machine-learning",
    level:"Advanced", duration:"1 ภาคการศึกษา", provider:"Stanford University",
    desc:"คอร์ส RL ระดับ Graduate จาก Stanford สอนโดย Emma Brunskill",
    detail:"ครอบคลุม Markov Decision Processes, Dynamic Programming, Monte Carlo, TD Learning, Q-Learning, Policy Gradient, Actor-Critic, Multi-armed Bandits และ Safe RL บรรยายโดย Prof. Emma Brunskill มี video และ slides ฟรี",
    price:"ฟรี", url:"https://web.stanford.edu/class/cs234/"
  },
  {
    id:39, title:"UC Berkeley CS285: Deep Reinforcement Learning", logo:"logos/coursera.png", category:"machine-learning",
    level:"Advanced", duration:"1 ภาคการศึกษา", provider:"UC Berkeley",
    desc:"Deep RL ระดับสูงจาก UC Berkeley โดย Sergey Levine",
    detail:"คอร์ส Deep RL ที่ครอบคลุมเนื้อหาล่าสุด ตั้งแต่ Policy Gradient, Q-Learning, Actor-Critic, Model-Based RL, Offline RL, Imitation Learning และ Meta-Learning สอนโดย Prof. Sergey Levine ทุก lecture มีบน YouTube",
    price:"ฟรี", url:"https://rail.eecs.berkeley.edu/deeprlcourse/"
  },
  {
    id:40, title:"Neural Networks: Zero to Hero (Karpathy)", logo:"logos/pytorch.png", category:"deep-learning",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"Andrej Karpathy / YouTube",
    desc:"สร้าง Neural Network ตั้งแต่ศูนย์กับ Andrej Karpathy อดีต AI Director Tesla",
    detail:"Video series จาก Andrej Karpathy อดีต Director of AI ที่ Tesla สอนสร้าง Neural Network จาก scratch ใน Python ครอบคลุม Backpropagation, MLP, Bigram LM, WaveNet จนถึง GPT ด้วย PyTorch",
    price:"ฟรี", url:"https://karpathy.ai/zero-to-hero.html"
  },
  {
    id:41, title:"CS230: Deep Learning (Stanford)", logo:"logos/stanford.png", category:"deep-learning",
    level:"Advanced", duration:"1 ภาคการศึกษา", provider:"Stanford University",
    desc:"Deep Learning ระดับ Graduate จาก Stanford ครอบคลุม CNN, RNN, Transformer",
    detail:"คอร์สจาก Stanford ที่สอน Deep Learning อย่างเป็นระบบ ครอบคลุม Neural Networks, CNN, Sequence Models, Attention, Transformer, Practical Advice และ AI Career Advice มี lecture videos และ slides ให้ดูฟรี",
    price:"ฟรี", url:"https://cs230.stanford.edu"
  },
  {
    id:42, title:"MLOps Specialization", logo:"logos/coursera.png", category:"deep-learning",
    level:"Advanced", duration:"4 เดือน", provider:"Coursera · DeepLearning.AI",
    desc:"เรียน MLOps สำหรับ Production ML ครบ pipeline จาก Andrew Ng",
    detail:"4 คอร์สจาก DeepLearning.AI ครอบคลุม ML in Production, Model Pipelines, Data Lifecycle, Model Serving, Monitoring, Experiment Tracking และ CI/CD สำหรับ ML ใช้ TensorFlow Extended (TFX) และ Kubeflow",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops"
  },
  {
    id:43, title:"Practical Deep Learning (fast.ai Part 2)", logo:"logos/fastai.png", category:"deep-learning",
    level:"Advanced", duration:"เรียนได้ฟรี", provider:"fast.ai",
    desc:"ลงลึก Deep Learning from Foundations สร้าง Stable Diffusion จาก Scratch",
    detail:"Part 2 ของ fast.ai เจาะลึกทุกกระบวนการตั้งแต่ Matrix Multiplication ไปจนถึงการสร้าง Diffusion Model จาก scratch ด้วย PyTorch เหมาะสำหรับนักวิจัยและ Engineers ที่ต้องการเข้าใจ Deep Learning อย่างถ่องแท้",
    price:"ฟรี", url:"https://course.fast.ai/Lessons/part2.html"
  },
  {
    id:44, title:"GANs Specialization", logo:"logos/coursera.png", category:"deep-learning",
    level:"Advanced", duration:"3 เดือน", provider:"Coursera · DeepLearning.AI",
    desc:"เรียน Generative Adversarial Networks ครบ 3 คอร์สจาก DeepLearning.AI",
    detail:"Specialization 3 คอร์สครอบคลุม GAN fundamentals, Conditional GANs, Controllable Generation, Image-to-Image Translation (Pix2Pix, CycleGAN) และ StyleGAN ใช้ PyTorch เหมาะสำหรับผู้ที่สนใจ Generative Models",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/specializations/generative-adversarial-networks-gans"
  },
  {
    id:45, title:"Kaggle: Deep Learning", logo:"logos/kaggle.png", category:"deep-learning",
    level:"Intermediate", duration:"4 ชั่วโมง", provider:"Kaggle",
    desc:"เรียน Deep Learning เบื้องต้นบน Kaggle ด้วย TensorFlow/Keras",
    detail:"Micro-course จาก Kaggle ครอบคลุม Single Neuron, Deep Neural Network, Stochastic Gradient Descent, Dropout, Batch Normalization, Binary Classification ด้วย TensorFlow/Keras แบบ hands-on",
    price:"ฟรี", url:"https://www.kaggle.com/learn/deep-learning"
  },
  {
    id:46, title:"Deep Learning with PyTorch (freeCodeCamp)", logo:"logos/pytorch.png", category:"deep-learning",
    level:"Intermediate", duration:"25 ชั่วโมง", provider:"freeCodeCamp / YouTube",
    desc:"เรียน Deep Learning ด้วย PyTorch ฟรีจาก freeCodeCamp บน YouTube",
    detail:"Video course ฟรีความยาว 25 ชั่วโมงจาก freeCodeCamp ครอบคลุม PyTorch fundamentals, CNN, RNN, Transfer Learning, Object Detection และ NLP ด้วย PyTorch เหมาะสำหรับผู้ที่มีพื้นฐาน Python",
    price:"ฟรี", url:"https://www.youtube.com/watch?v=V_xro1bcAuA"
  },
  {
    id:47, title:"Hugging Face: Deep RL Course", logo:"logos/huggingface.png", category:"deep-learning",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"Hugging Face",
    desc:"เรียน Deep Reinforcement Learning ฟรีบน Hugging Face",
    detail:"คอร์สฟรีจาก Hugging Face ครอบคลุม Q-Learning, Deep Q-Networks, Policy Gradient, Proximal Policy Optimization, Multi-Agent RL และ RLHF ที่ใช้ใน ChatGPT มี Hands-on units และ leaderboard",
    price:"ฟรี", url:"https://huggingface.co/learn/deep-rl-course"
  },
  {
    id:48, title:"MIT 6.S191: Introduction to Deep Learning", logo:"logos/mit.png", category:"deep-learning",
    level:"Intermediate", duration:"2 สัปดาห์", provider:"MIT",
    desc:"MIT Bootcamp สอน Deep Learning ครบใน 2 สัปดาห์ฟรีบน YouTube",
    detail:"MIT Bootcamp ปีล่าสุดที่อัปเดตเนื้อหาทุกปี ครอบคลุม Intro to DL, RNN, CNN, Diffusion Models, Reinforcement Learning, LLM Tuning และ AI Limitations ทุก lecture มีบน YouTube และ lab ทำบน Colab",
    price:"ฟรี", url:"https://introtodeeplearning.com"
  },
  {
    id:49, title:"Full Stack Deep Learning (2022)", logo:"logos/fsdl.png", category:"deep-learning",
    level:"Advanced", duration:"11 สัปดาห์", provider:"FSDL",
    desc:"Production ML ครบ pipeline: data, training, deployment, monitoring",
    detail:"คอร์สล่าสุดจาก FSDL ครอบคลุม Lab setup, Neural Nets, Transformers, Troubleshooting, Data Flywheel, Testing, Deployment (BentoML, FastAPI), Monitoring และ LLM Applications รองรับการนำไปใช้จริงใน Production",
    price:"ฟรี", url:"https://fullstackdeeplearning.com/course/2022/"
  },
  {
    id:50, title:"NLP Specialization", logo:"logos/coursera.png", category:"nlp",
    level:"Intermediate", duration:"4 เดือน", provider:"Coursera · DeepLearning.AI",
    desc:"เรียน NLP ครบ 4 คอร์สจาก DeepLearning.AI ตั้งแต่พื้นฐานถึง Transformer",
    detail:"Specialization 4 คอร์สครอบคลุม Logistic Regression, Naive Bayes, Word Vectors, Hidden Markov Models, Trax, Attention Mechanism, BERT และ Question Answering ใช้ Python และ NumPy เป็นหลัก",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/specializations/natural-language-processing"
  },
  {
    id:51, title:"CS324: Large Language Models (Stanford)", logo:"logos/stanford.png", category:"nlp",
    level:"Advanced", duration:"1 ภาคการศึกษา", provider:"Stanford University",
    desc:"คอร์ส LLM ระดับ Graduate จาก Stanford ล่าสุด",
    detail:"คอร์สจาก Stanford ที่เน้น Large Language Models โดยเฉพาะ ครอบคลุม Tokenization, Pretraining, Fine-tuning, RLHF, Alignment, Evaluation และ Harms มีทั้ง lecture notes และ readings ให้เข้าถึงได้ฟรี",
    price:"ฟรี", url:"https://stanford-cs324.github.io/winter2022/"
  },
  {
    id:52, title:"CS25: Transformers United (Stanford)", logo:"logos/stanford.png", category:"nlp",
    level:"Advanced", duration:"1 ภาคการศึกษา", provider:"Stanford University",
    desc:"Seminar เจาะลึก Transformer Architecture จาก Stanford",
    detail:"Seminar series จาก Stanford ที่รวม guest lectures จากนักวิจัยชั้นนำจาก Google, OpenAI, DeepMind ครอบคลุม Self-Attention, Vision Transformers, AlphaFold, Decision Transformers และ Multimodal Models",
    price:"ฟรี", url:"https://web.stanford.edu/class/cs25/"
  },
  {
    id:53, title:"Kaggle: Natural Language Processing", logo:"logos/kaggle.png", category:"nlp",
    level:"Intermediate", duration:"3 ชั่วโมง", provider:"Kaggle",
    desc:"เรียน NLP ฟรีบน Kaggle ตั้งแต่ Text Preprocessing ถึง Transformers",
    detail:"Micro-course จาก Kaggle ครอบคลุม Tokenization, Text Vectorization, Word Embeddings, LSTM, Bidirectional RNN และ Transformer เหมาะสำหรับผู้ที่ต้องการเข้าสู่ NLP อย่างรวดเร็วด้วย TensorFlow/Keras",
    price:"ฟรี", url:"https://www.kaggle.com/learn/natural-language-processing"
  },
  {
    id:54, title:"Hugging Face: Audio Course", logo:"logos/huggingface.png", category:"nlp",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"Hugging Face",
    desc:"เรียน Audio AI ด้วย Transformers: Speech Recognition, TTS, Classification",
    detail:"คอร์สฟรีจาก Hugging Face ครอบคลุม Audio data processing, Speech Recognition (Whisper), Text-to-Speech, Audio Classification และ Speaker Diarization ด้วย Transformers library และ Gradio",
    price:"ฟรี", url:"https://huggingface.co/learn/audio-course"
  },
  {
    id:55, title:"Applied Text Mining in Python (UMich)", logo:"logos/coursera.png", category:"nlp",
    level:"Intermediate", duration:"4 สัปดาห์", provider:"Coursera · University of Michigan",
    desc:"เรียน Text Mining ประยุกต์ด้วย Python จาก University of Michigan",
    detail:"คอร์สจาก UMich ครอบคลุม Text Preprocessing, NLTK, Regex, Naive Bayes, SVM สำหรับ Text Classification, Topic Modeling (LDA), Semantic Text Similarity และ Information Extraction",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/learn/python-text-mining"
  },
  {
    id:56, title:"Speech and Language Processing (Stanford)", logo:"logos/stanford.png", category:"nlp",
    level:"Advanced", duration:"เรียนได้ฟรี", provider:"Stanford University",
    desc:"ตำราและ slides NLP ระดับ Graduate ที่ดีที่สุดในโลก",
    detail:"ตำรา online ฟรีจาก Dan Jurafsky และ James Martin ครอบคลุม NLP ทุกหัวข้อตั้งแต่ Regex, N-gram, Text Classification, Sequence Labeling, Neural Networks สำหรับ NLP ไปจนถึง Machine Translation และ Question Answering",
    price:"ฟรี", url:"https://web.stanford.edu/~jurafsky/slp3/"
  },
  {
    id:57, title:"BERT and Beyond (NLP Course)", logo:"logos/huggingface.png", category:"nlp",
    level:"Advanced", duration:"เรียนได้ฟรี", provider:"Hugging Face",
    desc:"เรียน Fine-tuning BERT, GPT-2, T5 สำหรับ NLP tasks ต่างๆ",
    detail:"หัวข้อขั้นสูงจาก Hugging Face NLP Course ครอบคลุม Fine-tuning Transformers สำหรับ Classification, NER, QA, Summarization, Translation การสร้าง Custom Datasets และ Deployment ด้วย Inference API",
    price:"ฟรี", url:"https://huggingface.co/learn/nlp-course/chapter7/1"
  },
  {
    id:58, title:"Kaggle: Computer Vision", logo:"logos/kaggle.png", category:"computer-vision",
    level:"Intermediate", duration:"4 ชั่วโมง", provider:"Kaggle",
    desc:"เรียน Computer Vision ด้วย CNN บน Kaggle ฟรี",
    detail:"Micro-course จาก Kaggle ครอบคลุม Convolutional Classifier, Convolution/ReLU/Pooling, Sliding Window, Custom Convnets, Data Augmentation และ Transfer Learning ด้วย TensorFlow/Keras",
    price:"ฟรี", url:"https://www.kaggle.com/learn/computer-vision"
  },
  {
    id:59, title:"OpenCV: Deep Learning with PyTorch", logo:"logos/opencv.png", category:"computer-vision",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"OpenCV University",
    desc:"เรียน Deep Learning สำหรับ Computer Vision ด้วย PyTorch",
    detail:"คอร์สจาก OpenCV ครอบคลุม CNN ด้วย PyTorch, Transfer Learning, Object Detection (YOLO, SSD), Semantic Segmentation, Pose Estimation และ Image Generation ทำ projects จริงด้วย OpenCV",
    price:"ฟรี – $50/คอร์ส", url:"https://opencv.org/university/deep-learning-with-pytorch/"
  },
  {
    id:60, title:"CS231A: Computer Vision (Stanford)", logo:"logos/stanford.png", category:"computer-vision",
    level:"Advanced", duration:"1 ภาคการศึกษา", provider:"Stanford University",
    desc:"Computer Vision ด้าน Geometry จาก Stanford: Camera, 3D Reconstruction",
    detail:"คอร์สจาก Stanford เน้น Geometry ของ Computer Vision ครอบคลุม Camera Models, Stereo Vision, 3D Reconstruction, Structure from Motion, Optical Flow และ Visual SLAM เหมาะสำหรับสาย Robotics และ AR/VR",
    price:"ฟรี", url:"https://web.stanford.edu/class/cs231a/"
  },
  {
    id:61, title:"YOLO Object Detection Masterclass", logo:"logos/opencv.png", category:"computer-vision",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"OpenCV University",
    desc:"เรียน YOLO Object Detection ครบจบตั้งแต่ YOLOv5 ถึง YOLOv8",
    detail:"คอร์สเฉพาะทางสอน YOLO Object Detection ตั้งแต่ YOLOv5, YOLOv7 จนถึง YOLOv8 ครอบคลุม Training, Fine-tuning, Inference, Tracking และ Deployment บน Edge devices ใช้ Python และ PyTorch",
    price:"ฟรี – $30/คอร์ส", url:"https://opencv.org/university/yolo-object-detection-course/"
  },
  {
    id:62, title:"Hugging Face: Diffusers Course", logo:"logos/huggingface.png", category:"computer-vision",
    level:"Advanced", duration:"เรียนได้ฟรี", provider:"Hugging Face",
    desc:"สร้าง Image Generation ด้วย Diffusion Models และ Stable Diffusion",
    detail:"คอร์สฟรีจาก Hugging Face ครอบคลุม Diffusion Model concepts, Stable Diffusion, Text-to-Image, Fine-tuning (DreamBooth, LoRA), ControlNet, Img2Img และการ Deploy Diffusion models บน Spaces",
    price:"ฟรี", url:"https://huggingface.co/learn/diffusion-course"
  },
  {
    id:63, title:"Computer Vision Basics (Coursera)", logo:"logos/coursera.png", category:"computer-vision",
    level:"Beginner", duration:"5 สัปดาห์", provider:"Coursera · University at Buffalo",
    desc:"Computer Vision พื้นฐานสำหรับผู้เริ่มต้นจาก University at Buffalo",
    detail:"คอร์สจาก University at Buffalo ครอบคลุม Image Fundamentals, Color Spaces, Filtering, Edge Detection, Feature Extraction, Optical Flow และ Intro to Deep Learning สำหรับ Computer Vision ใช้ Python และ OpenCV",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/learn/computer-vision-basics"
  },
  {
    id:64, title:"Generative AI with Stable Diffusion (OpenCV)", logo:"logos/opencv.png", category:"computer-vision",
    level:"Advanced", duration:"เรียนได้ฟรี", provider:"OpenCV University",
    desc:"เรียน Stable Diffusion และ Generative AI สำหรับ Image Generation",
    detail:"คอร์สจาก OpenCV University ครอบคลุม Latent Diffusion, ControlNet, InstructPix2Pix, DreamBooth และ LoRA fine-tuning สำหรับ Stable Diffusion เน้น practical applications และ custom training",
    price:"ฟรี – $50/คอร์ส", url:"https://opencv.org/university/generative-ai-with-stable-diffusion/"
  },
  {
    id:65, title:"ChatGPT Prompt Engineering for Developers", logo:"logos/openai.png", category:"llm",
    level:"Beginner", duration:"1 ชั่วโมง", provider:"DeepLearning.AI · OpenAI",
    desc:"เรียน Prompt Engineering สำหรับนักพัฒนาจาก OpenAI และ DeepLearning.AI",
    detail:"Short course ฟรีจาก DeepLearning.AI และ OpenAI สอนการเขียน Prompt อย่างมีประสิทธิภาพสำหรับนักพัฒนา ครอบคลุม Principles, Iterative, Summarizing, Inferring, Transforming, Expanding และ Building Chatbot",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/"
  },
  {
    id:66, title:"Building Systems with ChatGPT", logo:"logos/openai.png", category:"llm",
    level:"Intermediate", duration:"1 ชั่วโมง", provider:"DeepLearning.AI · OpenAI",
    desc:"สร้างระบบ Multi-step AI ด้วย ChatGPT API",
    detail:"Short course ฟรีจาก DeepLearning.AI สอนการสร้างระบบซับซ้อนด้วย ChatGPT API ครอบคลุม Chain of Prompts, Classification, Q&A with Documents, Evaluation และ Automated Testing สำหรับ LLM applications",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/"
  },
  {
    id:67, title:"LangChain for LLM App Development", logo:"logos/langchain.png", category:"llm",
    level:"Intermediate", duration:"1 ชั่วโมง", provider:"DeepLearning.AI · LangChain",
    desc:"สร้าง LLM Apps ด้วย LangChain จาก Harrison Chase ผู้สร้าง LangChain",
    detail:"Short course ฟรีจาก DeepLearning.AI สอนการใช้ LangChain ครอบคลุม Models, Prompts, Memory, Chains, Q&A with Documents และ Agents สอนโดย Harrison Chase ผู้สร้าง LangChain",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/"
  },
  {
    id:68, title:"LangChain: Chat with Your Data", logo:"logos/langchain.png", category:"llm",
    level:"Intermediate", duration:"1 ชั่วโมง", provider:"DeepLearning.AI · LangChain",
    desc:"สร้าง RAG Chatbot ที่ตอบคำถามจากเอกสารของคุณด้วย LangChain",
    detail:"Short course ฟรีจาก DeepLearning.AI ครอบคลุม Document Loading, Splitting, Embeddings, Vector Stores, Retrieval Augmented Generation (RAG) และ Conversational QA สอนโดย Harrison Chase",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/"
  },
  {
    id:69, title:"Building Generative AI Apps with Gradio", logo:"logos/huggingface.png", category:"llm",
    level:"Beginner", duration:"1 ชั่วโมง", provider:"DeepLearning.AI · Hugging Face",
    desc:"สร้าง demo AI app ด้วย Gradio ได้ใน 1 ชั่วโมง",
    detail:"Short course ฟรีจาก DeepLearning.AI สอนการสร้าง demo แสดงโมเดล AI ด้วย Gradio ครอบคลุม NLP Tasks, Image Captioning, Image Generation, Chatbot UI และ Multi-modal ทำได้ด้วยโค้ดไม่กี่บรรทัด",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/building-generative-ai-applications-with-gradio/"
  },
  {
    id:70, title:"Fine Tuning Large Language Models", logo:"logos/openai.png", category:"llm",
    level:"Advanced", duration:"1 ชั่วโมง", provider:"DeepLearning.AI",
    desc:"เรียน Fine-tuning LLM เพื่อปรับโมเดลให้ตรงกับ use case ของคุณ",
    detail:"Short course ฟรีจาก DeepLearning.AI สอนการ Fine-tune LLM ด้วย LoRA และ Instruction Tuning ครอบคลุม Data Preparation, Training, Evaluation และเปรียบเทียบผลลัพธ์กับโมเดล base ใช้ Lamini Framework",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/finetuning-large-language-models/"
  },
  {
    id:71, title:"Vector Databases: from Embeddings to Applications", logo:"logos/openai.png", category:"llm",
    level:"Intermediate", duration:"1 ชั่วโมง", provider:"DeepLearning.AI · Weaviate",
    desc:"เรียน Vector Database สำหรับ RAG Applications",
    detail:"Short course ฟรีจาก DeepLearning.AI ครอบคลุม Embeddings, Nearest Neighbor Search, Approximate Nearest Neighbor, Vector Databases (Weaviate) และการนำไปใช้ใน RAG, Hybrid Search และ Generative Feedback Loops",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/"
  },
  {
    id:72, title:"LangGraph: Building Agentic AI", logo:"logos/langchain.png", category:"llm",
    level:"Advanced", duration:"เรียนได้ฟรี", provider:"LangChain / LangGraph",
    desc:"สร้าง AI Agents ด้วย LangGraph framework อย่างเป็นทางการ",
    detail:"คอร์สจาก LangChain สอนการสร้าง Stateful AI Agents ด้วย LangGraph ครอบคลุม Graph-based Workflows, State Management, Human-in-the-Loop, Multi-agent Architectures และ Persistence สำหรับ production agents",
    price:"ฟรี", url:"https://langchain-ai.github.io/langgraph/tutorials/introduction/"
  },
  {
    id:73, title:"Pair Programming with LLM", logo:"logos/openai.png", category:"llm",
    level:"Beginner", duration:"1 ชั่วโมง", provider:"DeepLearning.AI · Google",
    desc:"เรียนใช้ LLM เป็น Coding Assistant แบบ pair programming",
    detail:"Short course ฟรีจาก DeepLearning.AI และ Google ครอบคลุม Code completion, Code explanation, Testing, Debugging และ Documentation ด้วย PaLM API เหมาะสำหรับ Developers ที่ต้องการใช้ AI ช่วยเขียน Code",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/pair-programming-llm/"
  },
  {
    id:74, title:"How Diffusion Models Work", logo:"logos/coursera.png", category:"llm",
    level:"Advanced", duration:"1 ชั่วโมง", provider:"DeepLearning.AI",
    desc:"เข้าใจ Diffusion Models เบื้องหลัง Stable Diffusion และ DALL-E",
    detail:"Short course ฟรีจาก DeepLearning.AI สอนการทำงานของ Diffusion Models อย่างละเอียด ครอบคลุม Sampling, Neural Network, Training, Context และ Controlling ใช้ PyTorch สร้าง Diffusion Model ตั้งแต่ต้น",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/how-diffusion-models-work/"
  },
  {
    id:75, title:"Large Language Models with Semantic Search", logo:"logos/openai.png", category:"llm",
    level:"Intermediate", duration:"1 ชั่วโมง", provider:"DeepLearning.AI · Cohere",
    desc:"เรียน Semantic Search ด้วย LLM Embeddings และ Reranking",
    detail:"Short course ฟรีจาก DeepLearning.AI ครอบคลุม Keyword Search, Embeddings, Dense Retrieval, Reranking ด้วย Cross-Encoders, Generating Answers และการผสม Semantic Search กับ LLM ใช้ Cohere API",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/large-language-models-semantic-search/"
  },
  {
    id:76, title:"Evaluating and Debugging Generative AI", logo:"logos/huggingface.png", category:"llm",
    level:"Intermediate", duration:"1 ชั่วโมง", provider:"DeepLearning.AI · W&B",
    desc:"เรียน Evaluation และ Debugging สำหรับ Generative AI ด้วย W&B",
    detail:"Short course ฟรีจาก DeepLearning.AI ครอบคลุม Instrument, Evaluate, Iterate และ Debug โมเดล Generative AI ด้วย Weights & Biases ครอบคลุม LLM, Diffusion Models และ Experiment Tracking",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/"
  },
  {
    id:77, title:"Google: Attention Mechanism", logo:"logos/google.png", category:"llm",
    level:"Intermediate", duration:"1 ชั่วโมง", provider:"Google Cloud Skills Boost",
    desc:"เข้าใจ Attention Mechanism ที่เป็นพื้นฐานของ Transformer",
    detail:"คอร์สสั้นจาก Google Cloud อธิบาย Attention Mechanism ที่ใช้ใน Transformer ครอบคลุม Self-Attention, Multi-Head Attention, Positional Encoding และ Scaled Dot-Product Attention พร้อม badge เมื่อผ่าน quiz",
    price:"ฟรี", url:"https://www.cloudskillsboost.google/course_templates/537"
  },
  {
    id:78, title:"Google: Transformer Models and BERT", logo:"logos/google.png", category:"llm",
    level:"Intermediate", duration:"45 นาที", provider:"Google Cloud Skills Boost",
    desc:"เรียนรู้ Transformer และ BERT จาก Google Cloud ฟรี",
    detail:"คอร์สสั้นจาก Google Cloud อธิบายสถาปัตยกรรม Transformer และ BERT ครอบคลุม Encoder-Decoder, Self-Attention, Pre-training, Fine-tuning และ Use Cases ของ BERT สำหรับ NLP tasks ต่างๆ",
    price:"ฟรี", url:"https://www.cloudskillsboost.google/course_templates/538"
  },
  {
    id:79, title:"Google: Intro to Responsible AI", logo:"logos/google.png", category:"beginner",
    level:"Beginner", duration:"1 ชั่วโมง", provider:"Google Cloud Skills Boost",
    desc:"เรียน Responsible AI และ AI Ethics จาก Google ฟรี",
    detail:"คอร์สสั้นจาก Google Cloud ครอบคลุม Responsible AI principles, Google's 7 AI principles, Fairness, Interpretability, Privacy, Reliability และวิธีที่ Google ปฏิบัติ Responsible AI ใน products จริง",
    price:"ฟรี", url:"https://www.cloudskillsboost.google/course_templates/554"
  },
  {
    id:80, title:"Microsoft: Generative AI for Beginners", logo:"logos/microsoft.png", category:"beginner",
    level:"Beginner", duration:"18 บทเรียน", provider:"Microsoft / GitHub",
    desc:"คอร์ส Generative AI ครบ 18 บทเรียนจาก Microsoft ฟรีบน GitHub",
    detail:"Curriculum 18 บทเรียนจาก Microsoft สอน Generative AI ครอบคลุม LLM Basics, Prompt Engineering, Building Apps with LLM, Vector Databases, RAG, Fine-tuning, LLM Safety และ Responsible AI รองรับ Python และ TypeScript",
    price:"ฟรี", url:"https://github.com/microsoft/generative-ai-for-beginners"
  },
  {
    id:81, title:"Microsoft: AI-102 Azure AI Engineer", logo:"logos/microsoft.png", category:"machine-learning",
    level:"Advanced", duration:"เรียนได้ฟรี", provider:"Microsoft Learn",
    desc:"เตรียมสอบ AI-102 Azure AI Engineer Associate",
    detail:"Learning path ฟรีจาก Microsoft เตรียมสอบ AI-102 ครอบคลุม Azure AI Services, Computer Vision, NLP, Speech, Document Intelligence, Knowledge Mining และ Generative AI บน Azure OpenAI Service",
    price:"ฟรี (สอบ ~$165)", url:"https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/"
  },
  {
    id:82, title:"Applied Data Science with Python (UMich)", logo:"logos/coursera.png", category:"machine-learning",
    level:"Intermediate", duration:"5 เดือน", provider:"Coursera · University of Michigan",
    desc:"เรียน Data Science ด้วย Python ครบ 5 คอร์สจาก University of Michigan",
    detail:"Specialization 5 คอร์สครอบคลุม Python Intro, Data Visualization, ML, Text Mining และ Social Network Analysis ใช้ Pandas, Matplotlib, scikit-learn และ NLTK เหมาะสำหรับผู้ที่ต้องการทักษะ Data Science ครบชุด",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/specializations/data-science-python"
  },
  {
    id:83, title:"fast.ai: Computational Linear Algebra", logo:"logos/fastai.png", category:"machine-learning",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"fast.ai",
    desc:"เรียน Linear Algebra เชิงคำนวณสำหรับ ML ฟรีจาก fast.ai",
    detail:"คอร์สฟรีจาก fast.ai สอน Linear Algebra ในเชิง computational computing ครอบคลุม Matrix Decompositions, SVD, PCA, NMF, Randomized Linear Algebra และการใช้ NumPy, SciPy และ PyTorch",
    price:"ฟรี", url:"https://github.com/fastai/numerical-linear-algebra"
  },
  {
    id:84, title:"Coursera: AI in Healthcare Specialization", logo:"logos/coursera.png", category:"machine-learning",
    level:"Intermediate", duration:"4 เดือน", provider:"Coursera · Stanford",
    desc:"ประยุกต์ใช้ AI ในสาขาการแพทย์และ Healthcare จาก Stanford",
    detail:"Specialization 4 คอร์สจาก Stanford ครอบคลุม AI ในการวินิจฉัยโรค, Radiology, EHR (Electronic Health Records), Bias in Medical AI และ Regulatory/Ethical considerations สำหรับ Healthcare AI",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/specializations/ai-healthcare"
  },
  {
    id:85, title:"Coursera: AI in Finance", logo:"logos/coursera.png", category:"machine-learning",
    level:"Intermediate", duration:"4 เดือน", provider:"Coursera · NYU Tandon",
    desc:"ประยุกต์ใช้ AI ในสาขาการเงินและการลงทุน",
    detail:"Specialization จาก NYU Tandon ครอบคลุม ML สำหรับ Stock Price Prediction, Algorithmic Trading, Credit Risk, Fraud Detection, NLP สำหรับ Financial News และ Alternative Data ใช้ Python, TensorFlow",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/specializations/machine-learning-for-trading"
  },
  {
    id:86, title:"MIT 18.065: Matrix Methods in Data Analysis", logo:"logos/mit.png", category:"machine-learning",
    level:"Advanced", duration:"1 ภาคการศึกษา", provider:"MIT OpenCourseWare",
    desc:"คณิตศาสตร์เบื้องหลัง ML: Linear Algebra, SVD, PCA จาก MIT",
    detail:"คอร์สจาก MIT โดย Prof. Gilbert Strang ครอบคลุม Linear Algebra ที่ใช้ใน Data Science ได้แก่ SVD, PCA, Randomized Methods, Graph Theory, Neural Networks และ Optimization เหมาะสำหรับผู้ที่ต้องการรากฐานทางคณิต",
    price:"ฟรี", url:"https://ocw.mit.edu/courses/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/"
  },
  {
    id:87, title:"MIT 6.034: Artificial Intelligence", logo:"logos/mit.png", category:"machine-learning",
    level:"Intermediate", duration:"1 ภาคการศึกษา", provider:"MIT OpenCourseWare",
    desc:"คอร์ส AI คลาสสิกจาก MIT ครอบคลุม Search, Knowledge, Learning",
    detail:"คอร์ส AI พื้นฐานจาก MIT ที่เน้น classical AI ครอบคลุม Search, Constraint Propagation, Games, Rule-based Systems, Neural Networks, Support Vector Machines, Boosting และ Probabilistic Inference บน OpenCourseWare",
    price:"ฟรี", url:"https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/"
  },
  {
    id:88, title:"Preprocessing Unstructured Data for LLM", logo:"logos/openai.png", category:"llm",
    level:"Intermediate", duration:"1 ชั่วโมง", provider:"DeepLearning.AI · Unstructured",
    desc:"เรียนการประมวลผลเอกสาร PDF, Word, HTML ก่อนส่งให้ LLM",
    detail:"Short course ฟรีจาก DeepLearning.AI ครอบคลุม Normalizing Unstructured Data, PDF/HTML/Email Extraction, Document Image Analysis, Metadata Extraction และ Chunking Strategy สำหรับ RAG Applications",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/preprocessing-unstructured-data-for-llm-applications/"
  },
  {
    id:89, title:"Building Agentic RAG with LlamaIndex", logo:"logos/openai.png", category:"llm",
    level:"Advanced", duration:"1 ชั่วโมง", provider:"DeepLearning.AI · LlamaIndex",
    desc:"สร้าง Agentic RAG ที่ซับซ้อนด้วย LlamaIndex",
    detail:"Short course ฟรีจาก DeepLearning.AI ครอบคลุม Router Query Engine, Tool Use, Agentic Search, Multi-Document Agent, Multi-Step Reasoning และ Agentic RAG ด้วย LlamaIndex framework สำหรับ production",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/"
  },
  {
    id:90, title:"AI Agents in LangGraph", logo:"logos/langchain.png", category:"llm",
    level:"Advanced", duration:"1 ชั่วโมง", provider:"DeepLearning.AI · LangChain",
    desc:"สร้าง AI Agents ด้วย LangGraph และ Tool Use",
    detail:"Short course ฟรีจาก DeepLearning.AI ครอบคลุม AI Agents, ReAct Pattern, LangGraph State Machine, Persistence, Human-in-the-Loop, Essay Writer Agent และ Multi-agent Collaboration ด้วย LangGraph",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/"
  },
  {
    id:91, title:"Kaggle: Data Cleaning", logo:"logos/kaggle.png", category:"machine-learning",
    level:"Beginner", duration:"4 ชั่วโมง", provider:"Kaggle",
    desc:"เรียน Data Cleaning เทคนิคพื้นฐานที่ Data Scientist ต้องรู้",
    detail:"Micro-course จาก Kaggle สอนเทคนิค Data Cleaning ครอบคลุม Missing Values, Scaling/Normalization, Data Types, Inconsistent Data Entry, Character Encoding และ Parsing Dates ด้วย Pandas",
    price:"ฟรี", url:"https://www.kaggle.com/learn/data-cleaning"
  },
  {
    id:92, title:"Coursera: Self-Driving Cars Specialization", logo:"logos/coursera.png", category:"computer-vision",
    level:"Advanced", duration:"4 เดือน", provider:"Coursera · University of Toronto",
    desc:"เรียน Autonomous Driving ครบ pipeline จาก University of Toronto",
    detail:"Specialization 4 คอร์สจาก University of Toronto ครอบคลุม State Estimation, Visual Perception (Camera, LiDAR, Stereo), Motion Planning และ Safety Assessment สำหรับ Self-Driving Cars ใช้ Python และ CARLA simulator",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/specializations/self-driving-cars"
  },
  {
    id:93, title:"Hugging Face: Reinforcement Learning from Human Feedback", logo:"logos/huggingface.png", category:"llm",
    level:"Advanced", duration:"เรียนได้ฟรี", provider:"Hugging Face",
    desc:"เรียน RLHF เทคนิคที่ทำให้ ChatGPT ตอบโต้ได้ดีขึ้น",
    detail:"หัวข้อขั้นสูงจาก Hugging Face Deep RL Course ครอบคลุม RLHF pipeline, Reward Model Training, PPO สำหรับ LLM, Constitutional AI, Direct Preference Optimization (DPO) และการ Fine-tune LLM ด้วย TRL library",
    price:"ฟรี", url:"https://huggingface.co/learn/deep-rl-course/unit9/introduction"
  },
  {
    id:94, title:"Multimodal RAG: Chat with Videos", logo:"logos/openai.png", category:"llm",
    level:"Advanced", duration:"1 ชั่วโมง", provider:"DeepLearning.AI",
    desc:"สร้าง RAG ที่รับ input ทั้ง Video, Audio และ Text",
    detail:"Short course ฟรีจาก DeepLearning.AI สอนการสร้าง Multimodal RAG ที่ดึงข้อมูลจาก Video ครอบคลุม Video Transcription, Frame Extraction, Multimodal Embeddings, Retrieval และ Answer Generation ด้วย GPT-4V",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/multimodal-rag-chat-with-videos/"
  },
  {
    id:95, title:"Carbon-Aware Computing for GenAI Developers", logo:"logos/google.png", category:"llm",
    level:"Intermediate", duration:"1 ชั่วโมง", provider:"DeepLearning.AI · Google",
    desc:"เรียนการพัฒนา AI อย่างยั่งยืนและ Carbon-Aware",
    detail:"Short course ฟรีจาก DeepLearning.AI และ Google สอนแนวคิด Carbon-Aware Computing สำหรับ AI ครอบคลุม Carbon Footprint ของ LLM, Grid-Aware Scheduling, Model Efficiency และ Sustainable AI Practices",
    price:"ฟรี", url:"https://www.deeplearning.ai/short-courses/carbon-aware-computing-for-genai-developers/"
  },
  {
    id:96, title:"Building with Anthropic Claude API", logo:"logos/promptingguide.png", category:"llm",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"Anthropic",
    desc:"เรียนสร้างแอปด้วย Claude API จาก Anthropic อย่างเป็นทางการ",
    detail:"Documentation และ Cookbook ฟรีจาก Anthropic ครอบคลุมการใช้ Claude API, Prompt Engineering สำหรับ Claude, Tool Use, Vision, Context Windows และ Best Practices สำหรับการสร้าง AI Apps ด้วย Claude",
    price:"ฟรี (API usage มีค่าใช้จ่าย)", url:"https://docs.anthropic.com/en/docs/build-with-claude/overview"
  },
  {
    id:97, title:"Google Gemini API Quickstart", logo:"logos/google.png", category:"llm",
    level:"Beginner", duration:"เรียนได้ฟรี", provider:"Google AI for Developers",
    desc:"เริ่มใช้ Gemini API จาก Google สร้างแอป AI ด้วย Multimodal Model",
    detail:"Tutorial ฟรีจาก Google ครอบคลุม Gemini API setup, Text Generation, Chat, Vision, Audio, Code Generation, Embeddings และ Function Calling ด้วย Python SDK รองรับการสร้างแอปแบบ Multimodal",
    price:"ฟรี (API usage มีค่าใช้จ่าย)", url:"https://ai.google.dev/gemini-api/docs/quickstart"
  },
  {
    id:98, title:"Stanford CS336: Language Modeling from Scratch", logo:"logos/stanford.png", category:"nlp",
    level:"Advanced", duration:"1 ภาคการศึกษา", provider:"Stanford University",
    desc:"สร้าง Language Model ตั้งแต่ศูนย์ระดับ Graduate จาก Stanford",
    detail:"คอร์สล่าสุดจาก Stanford สอนการสร้าง LLM ตั้งแต่ต้นครอบคลุม Tokenization, Transformer Architecture, Pretraining, Scaling Laws, Alignment, RLHF และ Inference Optimization เหมาะสำหรับ AI Researchers",
    price:"ฟรี", url:"https://stanford-cs336.github.io/spring2024/"
  },
  {
    id:99, title:"Hugging Face: Computer Vision Course", logo:"logos/huggingface.png", category:"computer-vision",
    level:"Intermediate", duration:"เรียนได้ฟรี", provider:"Hugging Face",
    desc:"เรียน Computer Vision ทันสมัยด้วย Transformers library",
    detail:"คอร์สฟรีจาก Hugging Face ครอบคลุม Image Classification, Object Detection, Image Segmentation, Zero-Shot Classification, Depth Estimation และ Video Classification ด้วย Vision Transformers และ timm library",
    price:"ฟรี", url:"https://huggingface.co/learn/computer-vision-course"
  },
  {
    id:100, title:"IBM AI Engineering Professional Certificate", logo:"logos/coursera.png", category:"deep-learning",
    level:"Advanced", duration:"8 เดือน", provider:"Coursera · IBM",
    desc:"Professional Certificate ด้าน AI Engineering ครบจากจาก IBM",
    detail:"6-course Professional Certificate จาก IBM ครอบคลุม ML, Deep Learning, Neural Networks ด้วย TensorFlow และ Keras, Computer Vision, NLP, Deployment บน IBM Cloud และ Capstone Project สำหรับ AI Engineer",
    price:"~$49/เดือน (audit ฟรี)", url:"https://www.coursera.org/professional-certificates/ai-engineer"
  },
  ];
})();

const tagLabel = {
  "beginner":"สำหรับผู้เริ่มต้น","machine-learning":"Machine Learning",
  "deep-learning":"Deep Learning","nlp":"NLP",
  "computer-vision":"Computer Vision","llm":"LLM & Prompt",
};

const sectionTitles = {
  "all":"คอร์สทั้งหมด","beginner":"สำหรับผู้เริ่มต้น","machine-learning":"Machine Learning",
  "deep-learning":"Deep Learning","nlp":"NLP","computer-vision":"Computer Vision","llm":"LLM & Prompt",
};

let activeCategory = "all";

const levelOrder = { "Beginner": 1, "Intermediate": 2, "Advanced": 3 };

function parseDuration(d) {
  const n = parseFloat(d.replace(/[^0-9.]/g, "") || "0");
  if (d.includes("เดือน")) return n * 30;
  if (d.includes("สัปดาห์")) return n * 7;
  return n;
}

/* ===== Auth state ===== */
function checkAuth() {
  const user        = JSON.parse(sessionStorage.getItem("aich_user") || "null");
  const userMenu    = document.getElementById("userMenu");
  const authButtons = document.getElementById("authButtons");
  if (!userMenu) return;

  if (user) {
    userMenu.style.display = "block";
    authButtons.style.display = "none";
    const initial = user.name.charAt(0).toUpperCase();
    document.getElementById("avatarInitial").textContent    = initial;
    document.getElementById("dropdownAvatarLg").textContent = initial;
    document.getElementById("dropdownName").textContent     = user.name;
    document.getElementById("dropdownEmail").textContent    = user.email || "Guest";

    if (user.role === "admin") {
      document.getElementById("manageBtn").style.display    = "flex";
      document.getElementById("manageDivider").style.display = "block";
    }
  } else {
    userMenu.style.display = "none";
    authButtons.style.display = "flex";
  }
}

/* ===== Dropdown toggle (click-based, stays open) ===== */
function initDropdown() {
  const avatarBtn = document.getElementById("avatarBtn");
  const dropdown  = document.getElementById("dropdown");
  if (!avatarBtn || !dropdown) return;

  avatarBtn.addEventListener("click", e => {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains("open");
    dropdown.classList.toggle("open", !isOpen);
    avatarBtn.classList.toggle("open", !isOpen);
  });

  /* Close when clicking outside */
  document.addEventListener("click", e => {
    if (!document.getElementById("userMenu")?.contains(e.target)) {
      dropdown.classList.remove("open");
      avatarBtn.classList.remove("open");
    }
  });

  /* Close on Escape */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      dropdown.classList.remove("open");
      avatarBtn.classList.remove("open");
    }
  });

  /* Switch account */
  document.getElementById("switchAccountBtn")?.addEventListener("click", () => {
    dropdown.classList.remove("open");
    avatarBtn.classList.remove("open");
    window.location.href = "../Login/signin.html";
  });
}

function logout() {
  sessionStorage.removeItem("aich_user");
  window.location.reload();
}

/* ===== Render ===== */
function renderCourses(list) {
  const grid    = document.getElementById("courseGrid");
  const noRes   = document.getElementById("noResult");
  const counter = document.getElementById("courseCount");
  if (!grid) return;

  if (counter) counter.textContent = `${list.length} คอร์ส`;

  if (list.length === 0) {
    grid.innerHTML = "";
    if (noRes) noRes.style.display = "block";
    return;
  }
  if (noRes) noRes.style.display = "none";

  grid.innerHTML = list.map(c => `
    <div class="course-card" onclick="openCourse(${c.id})">
      <div class="card-top">
        <div class="course-icon"><img src="${c.logo}" alt="${c.provider}" onerror="this.style.display='none'"/></div>
        <span class="course-tag tag-${c.category}">${tagLabel[c.category]}</span>
      </div>
      <div class="course-title">${c.title}</div>
      <div class="course-desc">${c.desc}</div>
      <div class="course-price">${c.price}</div>
      <div class="course-meta">
        <span>⏱ ${c.duration}</span>
        <span class="level-badge level-${c.level}">${c.level}</span>
      </div>
    </div>
  `).join("");
}

function filterCourses() {
  const q      = document.getElementById("searchInput")?.value.toLowerCase() || "";
  const sort   = document.getElementById("sortSelect")?.value || "default";
  const titleEl = document.getElementById("sectionTitle");
  if (titleEl) titleEl.textContent = sectionTitles[activeCategory] || "คอร์สทั้งหมด";

  let filtered = courses.filter(c => {
    const matchCat    = activeCategory === "all" || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (sort === "title-asc")     filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "title-desc")    filtered.sort((a, b) => b.title.localeCompare(a.title));
  if (sort === "level-asc")     filtered.sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);
  if (sort === "level-desc")    filtered.sort((a, b) => levelOrder[b.level] - levelOrder[a.level]);
  if (sort === "duration-asc")  filtered.sort((a, b) => parseDuration(a.duration) - parseDuration(b.duration));
  if (sort === "duration-desc") filtered.sort((a, b) => parseDuration(b.duration) - parseDuration(a.duration));

  renderCourses(filtered);
}

function openCourse(id) {
  const c = courses.find(x => x.id === id);
  if (!c) return;

  document.getElementById("modalIcon").innerHTML        = `<img src="${c.logo}" alt="${c.provider}" onerror="this.style.display='none'"/>`;
  document.getElementById("modalTitle").textContent    = c.title;
  document.getElementById("modalProvider").textContent = c.provider;
  document.getElementById("modalDetail").textContent   = c.detail;
  document.getElementById("modalDuration").textContent = c.duration;
  document.getElementById("modalPrice").textContent    = c.price;
  document.getElementById("modalLevel").textContent    = c.level;
  document.getElementById("modalLevel").className      = `level-badge level-${c.level}`;
  document.getElementById("modalTag").textContent      = tagLabel[c.category] || c.category;
  document.getElementById("modalTag").className        = `course-tag tag-${c.category}`;
  document.getElementById("modalLink").href            = c.url;

  document.getElementById("courseModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("courseModal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ===== Event listeners ===== */
document.addEventListener("DOMContentLoaded", () => {
  checkAuth();
  initDropdown();

  function setCategory(cat) {
    activeCategory = cat;
    document.querySelectorAll(".category-item").forEach(el =>
      el.classList.toggle("active", el.dataset.category === cat));
    document.querySelectorAll(".mobile-cat").forEach(el =>
      el.classList.toggle("active", el.dataset.category === cat));
    filterCourses();
  }

  document.querySelectorAll(".category-item").forEach(item => {
    item.addEventListener("click", () => setCategory(item.dataset.category));
  });

  document.querySelectorAll(".mobile-cat").forEach(btn => {
    btn.addEventListener("click", () => setCategory(btn.dataset.category));
  });

  document.getElementById("searchInput")?.addEventListener("input", filterCourses);
  document.getElementById("sortSelect")?.addEventListener("change", filterCourses);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  document.getElementById("courseModal")?.addEventListener("click", e => {
    if (e.target === document.getElementById("courseModal")) closeModal();
  });

  renderCourses(courses);
});
