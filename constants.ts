import React from 'react';

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Books', path: '/books' },
  { name: 'Startups', path: '/startups' },
  { name: 'Services', path: '/services' },
  { name: 'Highlights', path: '/highlights' },
  { name: 'NGOs', path: '/ngos' },
];

export const services = [
  {
    title: 'Training & Development',
    description: 'Empower teams with customized corporate training programs in Leadership, Communication, Strategic Management, and more.',
  },
  {
    title: 'Project Management',
    description: 'Professional consulting for project planning, execution, risk management, and ensuring delivery excellence.',
  },
  {
    title: 'Legal Operations & Consulting',
    description: 'Expert legal advisory, strategy development, policy advisory, and compliance & governance.',
  },
  {
    title: 'Educational Innovation',
    description: 'Transforming educational systems through curriculum development, institution building, and digital learning integration.',
  },
  {
    title: 'Business Development & Strategy',
    description: 'Accelerate organizational growth with strategic planning, business model innovation, and market expansion.',
  },
  {
    title: 'HR & Talent Management',
    description: 'Build high-performance teams through talent acquisition, employee development, and performance management.',
  },
  {
    title: 'Advocacy & Social Impact',
    description: 'Driving positive social change through policy advocacy, community development, and social impact initiatives.',
  },
];

export const keyExpertise = [
  "Advocacy and Legal Operations", "Human Resource Management", "Risk Management",
  "Business Development", "Strategic Planning", "Institutional Development",
  "Educational Innovation", "Legal Policy Advisory", "Organizational Growth Strategy",
];

export const certifications = [
  { title: "Business Analysis Professional Training", issuer: "Mindmap, Pune" },
  { title: "Strategic Leadership for Schools in a Changing Environment", issuer: "IIM Ahmedabad", date: "Oct 2014" },
  { title: "Project Management Professional (PMP)", issuer: "Indian Institute of Technology, Delhi", date: "Jul 2011" },
  { title: "Six Sigma Black Belt Certification", issuer: "IACT International Academy", date: "Jan 2011" },
];

export const awards = [
  { title: "International Award for Excellence in Education", issuer: "Simplii Jaipur & Helpage India", date: "Sep 2017" },
  { title: "Bharat Vibhushan Award 2016", issuer: "Golden Star Awards", date: "Feb 2017" },
  { title: "International Award for Excellence", issuer: "Golden Star Awards", date: "Nov 2016" },
  { title: "Best 'Principal' Award", issuer: "Lions Club, Pune", date: "Sep 2014" },
  { title: "Manager of the Year", issuer: "IIMT Group of Institutions", date: "Jul 2010" },
  { title: "Best Faculty of The Year", issuer: "IIMT Group of Institutions", date: "Jul 2009" },
];

export const ngoData = [
  { id: 'aangan-disha-foundation', name: 'Aangan Disha Foundation', tagline: 'For Orphaned & Abandoned Children', icon: '👶', component: React.lazy(() => import('./pages/ngos/AanganDisha')) },
  { id: 'aastha-care-foundation', name: 'Aastha Care Foundation', tagline: 'Vridhashram / Elderly Support', icon: '🏡', component: React.lazy(() => import('./pages/ngos/AasthaCare')) },
  { id: 'atal-skill-development-training-center', name: 'Atal Skill Development Training Center', tagline: 'Skill Development', icon: '🛠️', component: React.lazy(() => import('./pages/ngos/AtalSkill')) },
  { id: 'beyond-limits-foundation', name: 'Beyond Limits Foundation', tagline: 'Physically Disabled', icon: '♿', component: React.lazy(() => import('./pages/ngos/BeyondLimits')) },
  { id: 'harvest-hope-foundation', name: 'Harvest Hope Foundation', tagline: 'Farmers', icon: '🌾', component: React.lazy(() => import('./pages/ngos/HarvestHope')) },
  { id: 'jal-dhara-foundation', name: 'Jal Dhara Foundation', tagline: 'Water & Land Conservation', icon: '🌊', component: React.lazy(() => import('./pages/ngos/JalDhara')) },
  { id: 'pashu-raksha-foundation', name: 'Pashu Raksha Foundation', tagline: 'Animal Welfare', icon: '🐾', component: React.lazy(() => import('./pages/ngos/PashuRaksha')) },
  { id: 'positive-life-initiative', name: 'Positive Life Initiative', tagline: 'AIDS Awareness', icon: '🩺', component: React.lazy(() => import('./pages/ngos/PositiveLife')) },
  { id: 'relife-india-foundation', name: 'ReLife India Foundation', tagline: 'Nasha Mukti / De-addiction & Rehabilitation', icon: '🕊️', component: React.lazy(() => import('./pages/ngos/ReLifeIndia')) },
  { id: 'rooh-sparsh-foundation', name: 'Rooh Sparsh Foundation', tagline: 'Acid Attack Survivors', icon: '🌸', component: React.lazy(() => import('./pages/ngos/RoohSparsh')) },
  { id: 'sarthak-jeevan-foundation', name: 'Sarthak Jeevan Foundation', tagline: 'Persons with Disabilities', icon: '🌈', component: React.lazy(() => import('./pages/ngos/SarthakJeevan')) },
  { id: 'satya-vani-foundation', name: 'Satya Vani Foundation', tagline: 'Media, Press & Journalist Empowerment', icon: '📰', component: React.lazy(() => import('./pages/ngos/SatyaVani')) },
  { id: 'second-chance-foundation', name: 'Second Chance Foundation', tagline: 'Prisoner Rehabilitation & Reintegration', icon: '⚖️', component: React.lazy(() => import('./pages/ngos/SecondChance')) },
  { id: 'true-colors-foundation', name: 'True Colors Foundation', tagline: 'LGBTQ', icon: '🏳️‍🌈', component: React.lazy(() => import('./pages/ngos/TrueColors')) },
  { id: 'udaan-foundation', name: 'Udaan Foundation', tagline: 'Women Empowerment', icon: '🚀', component: React.lazy(() => import('./pages/ngos/Udaan')) },
  { id: 'unity-for-diversity-foundation', name: 'Unity for Diversity Foundation', tagline: 'Minorities', icon: '🤝', component: React.lazy(() => import('./pages/ngos/UnityForDiversity')) },
  { id: 'vidya-setu-foundation', name: 'Vidya Setu Foundation', tagline: 'Education', icon: '🌐', component: React.lazy(() => import('./pages/ngos/VidyaSetu')) },
];

export const books = [
  { id: 'death', title: 'Death Penalty: A Punishment or Problem', description: 'Paperback, Dr Ashutosh Mishra', image: '../resources/books/death-r8s9l0tdfb7qq4ek2qdyzy5y9bg1noio5z7pe1dwag.jpg', buyLink: 'https://www.flipkart.com/death-penalty-punishment-problem/p/itm9ae8ff40a715a?pid=9789391010430&lid=LSTBOK9789391010430OD8OUC&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_6&otracker=search&otracker1=search&iid=95739972-a9b9-4da4-89c0-2376d181df6b.9789391010430.SEARCH&ssid=4tizvcn4uo0000001752576929251&qH=ef21f091ec190b5d' },
  { id: 'humanright', title: 'HUMAN RIGHTS UNDER ANTI-TERRORISM LAWS', description: 'Paperback, Dr Ashutosh Mishra', image: 'resources/books/humanright-r8sk8zvx8wuhfmnrxphik1ym5qvw0ivayh28x82aig.jpg', buyLink: 'https://www.flipkart.com/protection-children-neglect-abuse-gaps-current-legislation/p/itm43fc463076b19?pid=9789391010881&lid=LSTBOK9789391010881ZARWUU&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=77e62204-9cd8-4fd5-96e0-cae6d8dbd19a.9789391010881.SEARCH&ppt=None&ppn=None&ssid=s3p3eebzts0000001752578711308&qH=ef21f091ec190b5d' },
  { id: 'law', title: 'Anti-Corruption Law In India: How Effective Is It?', description: 'Paperback, Dr Ashutosh Mishra', image: 'resources/books/law-r8skjfvd6n56fnhmy80a9f2zrvepjgbxq60gvwktdk.jpg', buyLink: 'https://www.flipkart.com/anti-corruption-law-india-effective-it/p/itm7dfc719cfd858?pid=9789391010607&lid=LSTBOK9789391010607SNHEYA&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_8&otracker=search&otracker1=search&fm=organic&iid=77e62204-9cd8-4fd5-96e0-cae6d8dbd19a.9789391010607.SEARCH&ppt=None&ppn=None&ssid=s3p3eebzts0000001752578711308&qH=ef21f091ec190b5d' },
  { id: 'legalissue', title: 'Legal Issues of the Contract of Employment', description: 'Paperback, Dr Ashutosh Mishra', image: 'resources/books/legalissue-r8sksea0atej1whbnldbinq3j19lvmvvahs0htas3c.jpg', buyLink: 'https://www.flipkart.com/legal-issues-contract-employment/p/itm9c8967a56c5e8?pid=9789391010836&lid=LSTBOK9789391010836MZH5LS&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_9&otracker=search&otracker1=search&fm=organic&iid=77e62204-9cd8-4fd5-96e0-cae6d8dbd19a.9789391010836.SEARCH&ppt=None&ppn=None&ssid=s3p3eebzts0000001752578711308&qH=ef21f091ec190b5d' },
  { id: 'protection', title: 'Protection of Children from Neglect and Abuse: Gaps in Current Legislation', description: 'Paperback, Dr Ashutosh Mishra', image: 'resources/books/protection-r8skycl7l1jwkzu0w609b5n6yvxammio3yipwwh0oo.jpg', buyLink: 'https://www.flipkart.com/protection-children-neglect-abuse-gaps-current-legislation/p/itm43fc463076b19?pid=9789391010881&lid=LSTBOK9789391010881ZARWUU&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=77e62204-9cd8-4fd5-96e0-cae6d8dbd19a.9789391010881.SEARCH&ppt=None&ppn=None&ssid=s3p3eebzts0000001752578711308&qH=ef21f091ec190b5d' },
  { id: 'freedom', title: 'THE FREEDOM OF SPEECH AND THE PRIVACY RIGHTS IN THE PRESS AND THE MEDIA', description: 'Paperback, Dr Ashutosh Mishra', image: 'resources/books/freedom-r8sl844ul2x575ndvdyq7oxl4zsklfaa4aibedzs1k.jpg', buyLink: 'https://www.flipkart.com/freedom-speech-privacy-rights-press-media/p/itmf0c05922a5f58?pid=9789391010904&lid=LSTBOK9789391010904AC6XDA&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_2&otracker=search&otracker1=search&fm=organic&iid=77e62204-9cd8-4fd5-96e0-cae6d8dbd19a.9789391010904.SEARCH&ppt=None&ppn=None&ssid=s3p3eebzts0000001752578711308&qH=ef21f091ec190b5d' },
  { id: 'trade', title: 'Protection of Trade Secrets in light of Business Law', description: 'Paperback, Dr Ashutosh Mishra', image: 'resources/books/trade-r8slrzg1204cmescuh5tf6fd77uwb360imytlyj6ig.jpg', buyLink: 'https://www.flipkart.com/protection-trade-secrets-light-business-law/p/itmb422f1eda708a?pid=9789391010898&lid=LSTBOK9789391010898CBDFAV&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_10&otracker=search&otracker1=search&fm=organic&iid=77e62204-9cd8-4fd5-96e0-cae6d8dbd19a.9789391010898.SEARCH&ppt=None&ppn=None&ssid=s3p3eebzts0000001752578711308&qH=ef21f091ec190b5d' },
  { id: 'gender', title: 'Gender Differences in Employment Regulation', description: 'Paperback, Dr Ashutosh Mishra', image: 'resources/books/gender-r8slxvvjyk75ia7se0zi2otjgarumolcnuek2hs7g8.jpg', buyLink: 'https://www.flipkart.com/gender-differences-employment-regulations/p/itm9f070de16aece?pid=9789391010782&lid=LSTBOK9789391010782NMBMS8&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_7&otracker=search&otracker1=search&fm=organic&iid=77e62204-9cd8-4fd5-96e0-cae6d8dbd19a.9789391010782.SEARCH&ppt=None&ppn=None&ssid=s3p3eebzts0000001752578711308&qH=ef21f091ec190b5d' },
  { id: 'wrongful', title: 'WRONGFUL vs UNFAIR DISMISSAL', description: 'Paperback, Dr Ashutosh Mishra, Dr. C B Jadli', image: 'resources/books/wrongful-r8sm6kvt6e3mwfl4maa9mzu19lx2tw3yuvn8vmw3w8.jpg', buyLink: 'https://www.flipkart.com/wrongful-vs-unfair-dismissal/p/itmd4b54c2410bac?pid=9789391010775&lid=LSTBOK9789391010775X1SZS7&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=77e62204-9cd8-4fd5-96e0-cae6d8dbd19a.9789391010775.SEARCH&ppt=None&ppn=None&ssid=s3p3eebzts0000001752578711308&qH=ef21f091ec190b5d' },
  { id: 'role', title: 'Role Of Corporate Governance In The Time Of A Crisis', description: 'Book, Dr Ashutosh Mishra', image: 'resources/books/role-r8ze71gnr3d5c7o1jf0jy9miwofilht59x6p9e31rs.jpg', buyLink: 'https://www.flipkart.com/role-corporate-governance-time-crisis/p/itm7fa82a384b1fc?pid=9789391010713&lid=LSTBOK9789391010713SGSFWV&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_10&otracker=search&otracker1=search&iid=dbba5df7-f7bb-463b-ad36-d12101ff93be.9789391010713.SEARCH&ssid=8m5j336ips0000001752917824311&qH=ef21f091ec190b5d' },
  { id: 'education', title: 'Shaikshik Prodhogici', description: 'Paperback, Dr. Ashutosh Mishra', image: 'resources/books/education-r8zefu89q9es0svx5pxtsjov3j27nhqoth1bzn1diw.jpg', buyLink: 'https://www.flipkart.com/shaikshik-prodhogici/p/itmb6d3148bafd03?pid=9789395633239&lid=LSTBOK9789395633239XJF9Z7&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_26&otracker=search&otracker1=search&iid=dbba5df7-f7bb-463b-ad36-d12101ff93be.9789395633239.SEARCH&ssid=8m5j336ips0000001752917824311&qH=ef21f091ec190b5d' },
  { id: 'economy', title: 'Understanding Circular Economy', description: 'Paperback, Dr. Ashutosh Mishra (Birla Institute of Technology, BITS Ranchi)', image: 'resources/books/economy-r8zejpcdtqp7r39ule2m1kl30k0jap2yoll70lb3y0.jpg', buyLink: 'https://www.flipkart.com/understanding-circular-economy/p/itmed438ee10e491?pid=9788119079414&lid=LSTBOK9788119079414ZNJLEJ&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_24&otracker=search&otracker1=search&iid=dbba5df7-f7bb-463b-ad36-d12101ff93be.9788119079414.SEARCH&ssid=8m5j336ips0000001752917824311&qH=ef21f091ec190b5d' },
  { id: 'digital', title: 'Bharat mein Digital Kranti', description: 'Hardcover, Sewa Singh Bajwa, Dr. Ashutosh Mishra', image: 'resources/books/digital-r8ziu1gdzfz4253adlqcy4iqd5b65ksc8hsar6h0ag.jpg', buyLink: 'https://www.flipkart.com/bharat-mein-digital-kranti/p/itmbabb8115dba07?pid=9789391755867&lid=LSTBOK97893917558673GKROB&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_3&otracker=search&otracker1=search&iid=dbba5df7-f7bb-463b-ad36-d12101ff93be.9789391755867.SEARCH&ssid=8m5j336ips0000001752917824311&qH=ef21f091ec190b5d' },
  { id: 'pharma', title: 'INDUSTRIAL PHARMACOGNOSY', description: 'Paperback, Dr.Reenu Yadav, Dr.Ankur Choubey, Mr Ashutosh Mishra', image: 'resources/books/pharma-r8zixqxgxx1turpeq7fds6u6pv1aili82uf8wgz3qw.jpg', buyLink: 'https://www.flipkart.com/industrial-pharmacognosy/p/itm422608f6071bc?pid=9789391389338&lid=LSTBOK9789391389338UTST1Z&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_20&otracker=search&otracker1=search&iid=dbba5df7-f7bb-463b-ad36-d12101ff93be.9789391389338.SEARCH&ssid=8m5j336ips0000001752917824311&qH=ef21f091ec190b5d' },
  { id: 'cinema', title: 'Cinema Me Stri Vimarsh', description: 'Hardcover, Dr. Ashutosh Mishra, Dr. Suneet Kumar Tiwari', image: 'resources/books/cinema-r8zj0bzhqil7s5y8mtng51ctj0amomrnfn0bev54mw.jpg', buyLink: 'https://www.flipkart.com/cinema-me-stri-vimarsh/p/itm27956a9d4a49e?pid=9788196185657&lid=LSTBOK97881961856571YRTNJ&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_25&otracker=search&otracker1=search&iid=dbba5df7-f7bb-463b-ad36-d12101ff93be.9788196185657.SEARCH&ssid=8m5j336ips0000001752917824311&qH=ef21f091ec190b5d' },
  { id: 'energy', title: 'Renewable Energy and Green Technology', description: 'Paperback, Dr. Ramesh Pal ,Dr. Sachin Chaudhary ,Er. Ashutosh Mishra', image: 'resources/books/energy-r8zjduvw2p3qu6azno470mhl8lmrfuglykxu07373s.jpg', buyLink: 'https://www.flipkart.com/renewable-energy-green-technology-innovations-sustainable-future-based-sixth-deans-committee-icar/p/itm4f34dac0de794?pid=9789368847533&lid=LSTBOK9789368847533AIJDMM&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_22&otracker=search&otracker1=search&iid=dbba5df7-f7bb-463b-ad36-d12101ff93be.9789368847533.SEARCH&ssid=8m5j336ips0000001752917824311&qH=ef21f091ec190b5d' },
  { id: 'genetics', title: 'Principles Methods of Genetics And Plant Breeding', description: 'Paperback, Dr. Anand Singh ,Dr. Ashutosh Kumar Singh ,Dr. Govind Mishra', image: 'resources/books/genetics-r8zjgkn3tgtkdmczsude7xtj0o8xod8p00sbwz294o.jpg', buyLink: 'https://www.flipkart.com/principles-methods-genetics-plant-breeding-according-v-dean-s-committee-syllabus/p/itm04d771f4eb967?pid=9789358428797&lid=LSTBOK9789358428797WW7FNP&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_21&otracker=search&otracker1=search&iid=dbba5df7-f7bb-463b-ad36-d12101ff93be.9789358428797.SEARCH&ssid=8m5j336ips0000001752917824311&qH=ef21f091ec190b5d' },
  { id: 'meditation', title: 'Meditation Process and Techniques', description: 'English, Hardcover, Dr. Ashutosh Mishra', image: 'resources/books/meditation-r8zjjnk27x1eflvvt6bde5tx4528wnh0r9rmjmhsqg.jpg', buyLink: 'https://www.flipkart.com/mediation-process-techniques/p/itmf2q7j8chbdffa?pid=9789386229366&lid=LSTBOK9789386229366ZCISP1&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_17&otracker=search&otracker1=search&iid=dbba5df7-f7bb-463b-ad36-d12101ff93be.9789386229366.SEARCH&ssid=8m5j336ips0000001752917824311&qH=ef21f091ec190b5d' },
  { id: 'pharma2', title: 'A Text Book of Pharmacology', description: 'Paperback, Sakshi Mishra, Dr Ashutosh Kumar Yadav, Dr.Reetu', image: 'resources/books/pharma2-r8zjn3mra1r904vnony4jairj02p4p5l8bvpw5dtx4.jpg', buyLink: 'https://www.flipkart.com/text-book-pharmacology-ii/p/itm07911fe3ce3a2?pid=9789360877330&lid=LSTBOK9789360877330CSLOCN&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_23&otracker=search&otracker1=search&iid=dbba5df7-f7bb-463b-ad36-d12101ff93be.9789360877330.SEARCH&ssid=8m5j336ips0000001752917824311&qH=ef21f091ec190b5d' },
  { id: 'endo', title: 'ADVANCES IN ENDODONTICS A COMPLETE GUIDE', description: 'Paperback, Dr.Richa Mishra,Dr. Arun Verma,Dr.Swapn Rai,Dr. Ashutosh Pratap Singh', image: 'resources/books/endo-r8zjoo12o3wgcqlqjcbqowaf64cpyjdhg30uor27js.jpg', buyLink: 'https://www.flipkart.com/advances-endodontics-complete-guide/p/itmf659110ba50ff?pid=9789355153265&lid=LSTBOK9789355153265JTNFQY&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_19&otracker=search&otracker1=search&iid=dbba5df7-f7bb-463b-ad36-d12101ff93be.9789355153265.SEARCH&ssid=8m5j336ips0000001752917824311&qH=ef21f091ec190b5d' },
  { id: 'cardiabcon', title: 'Cardiabcon 2017 Environment and Life Style in Cardio Metabolic Diseases', description: 'Paperback, Editors : Dr Ashutosh Mishra, Dr Pallavi Mishra, Mr Vinaytosh Mishra', image: 'resources/books/cardiabcon-r8zjrrvv9e5kqc39e6ocfm29uz1eeipjjgnmsogczc.jpg', buyLink: 'https://www.flipkart.com/cardiabcon-2017-environment-life-style-cardio-metabolic-diseases/p/itma75ddaed1f2e9?pid=9789386256508&lid=LSTBOK978938625650832A82J&marketplace=FLIPKART&q=dr.+Ashutosh+Mishra+&store=bks&srno=s_1_15&otracker=search&otracker1=search&iid=dbba5df7-f7bb-463b-ad36-d12101ff93be.9789386256508.SEARCH&ssid=8m5j336ips0000001752917824311&qH=ef21f091ec190b5d' },
  { id: 'ar', title: 'अंकगणित', description: 'A Book by Dr. Ashutosh Mishra. An Alumnus of IIM Ahmedabad.', image: 'resources/books/ar-r8zerpwu3vo8rdmosct2t1rldui7xrwk49v9cjf8vs.jpg', buyLink: '#' },
  { id: 'lrr', title: 'Logical Reasoning', description: 'A Book by Dr. Ashutosh Mishra. An Alumnus of IIM Ahmedabad.', image: 'resources/books/lrr-r8zfitlb5wrvim9gj2jtp7k1zsx7vlhxuf19hr8lh4.jpg', buyLink: '#' },
  { id: 'ga', title: 'Quantitative Aptitude', description: 'A Book by Dr. Ashutosh Mishra. An Alumnus of IIM Ahmedabad.', image: 'resources/books/ga-r8zfl90ati3jicqhcmc4n3hx8mycrg4z6fpf4hmzeg.jpg', buyLink: '#' },
  { id: 'english', title: 'English', description: 'A Book by Dr. Ashutosh Mishra. An Alumnus of IIM Ahmedabad.', image: 'resources/books/english-r8zfn7i722s1p3w2wyt5c3phsjavsqwug4mu48qgfs.jpg', buyLink: '#' },
  { id: 'gk', title: 'सामान्य जागरूकता', description: 'A Book by Dr. Ashutosh Mishra. An Alumnus of IIM Ahmedabad.', image: 'resources/books/gk-r8zfolbn4ao8sfvpu2cdi94x9yhc4pemaz7kjwola0.jpg', buyLink: '#' },
  { id: 'lr', title: 'तार्किक क्षमता', description: 'A Book by Dr. Ashutosh Mishra. An Alumnus of IIM Ahmedabad.', image: 'resources/books/lr-r8zfpl1ic0151mfu1hs7504fulla97cf3w00sf7mpk.jpg', buyLink: '#' }
];

export const startups = [
  { id: 'way2hosting', name: 'Way 2 Hosting', description: 'Deals in web hosting, domain registration, and web design with 24x7 technical support for individuals and enterprises.', image: 'resources/startups/way2-768x174-1-300x68.png' },
  { id: 'smsexpress', name: 'SMS Express', description: 'Provides Bulk SMS, IVR codes, short SMS, and voice SMS solutions for individuals and corporate clients.', image: 'resources/startups/smsex-768x174-1-300x68.png' },
  { id: 'expressnaukri', name: 'Express Naukri', description: 'A premium segment job portal catering to executive class candidates from premier B-schools.', image: 'resources/startups/nauk-768x174-1-300x68.png' },
  { id: 'megashopping', name: 'MegaShopping', description: 'A premium online retail store offering high-end products to a discerning clientele.', image: 'resources/startups/Mega-Shopping-768x167-1-300x65.png' },
  { id: 'jagrantimes', name: 'Jagran Times', description: 'A premium online English news portal with 51 editions, catering to a diverse audience including business class, executives, and students.', image: 'resources/startups/jagran_times-768x174-1-300x68.png' },
  { id: 'shaadivision', name: 'Shaadi Vision', description: 'A matrimonial project offering all-in-one solutions for wedding events across all religions and castes.', image: 'resources/startups/shadi-768x174-1-300x68.png' },
  { id: 'alfatoilets', name: 'Alfa Toilets', description: 'A manufacturing and B2B trade platform producing high-range RCC, precast, and fabricated toilets for various institutions.', image: 'resources/startups/AlfaToilets-768x174-1-300x68.png' },
  { id: 'way2mybusiness', name: 'Way 2 My Business', description: 'A B2B business consultancy project focused on helping non-performing or sick companies recover.', image: 'resources/startups/Way2MyBusiness-PNG-768x174-1-300x68.png' },
  { id: 'kayteeled', name: 'KAYTEE LED Lights', description: 'A manufacturing and B2B trade project producing premium quality LED bulbs, street lights, and torch bulbs.', image: 'resources/startups/KayteeLite-768x174-1-300x68.png' },
  { id: 'kyteecabs', name: 'Kaytee Cabs', description: 'A premium online car rental portal with a presence in over 555 cities across 11 states.', image: 'resources/startups/CABS-768x174-1-300x68.png' },
  { id: 'kayteeholidays', name: 'Kaytee Holidays', description: 'An elite holiday booking portal for train/flight tickets, domestic/international holidays, and corporate tours.', image: 'resources/startups/holiday-768x174-1-300x68.png' },
  { id: 'kayteecouriers', name: 'Kaytee Couriers', description: 'A cargo and logistics platform with a presence in over 251 cities across 20 states.', image: 'resources/startups/kytee-768x174-1-300x68.png' },
  { id: 'kayteepharma', name: 'Kaytee Pharma', description: 'A pharmaceutical research and trade unit catering to the research and trade needs of corporate clients.', image: 'resources/startups/kaytee-768x174-1-300x68.png' },
  { id: 'kayteeinfra', name: 'Kaytee Infra & Developers', description: 'A real estate company focused on projects like flats, apartments, and row houses for a diverse clientele.', image: 'resources/startups/baNK-768x174-1-300x68.png' },
  { id: 'konnect2friends', name: 'Konnect 2 Friends', description: 'A social media platform for developing and promoting social networks for individuals and corporates.', image: 'resources/startups/k2f-768x174-1-300x68.png' },
  { id: 'konnect2market', name: 'Konnect 2 Market', description: 'An aggregator marketplace SBU for classified ad purposes, catering to a wide range of users.', image: 'resources/startups/c2f-768x174-1-300x68.png' },
  { id: 'way2mysolutions', name: 'Way 2 My Solutions', description: 'A Business-to-Customer (B2C) consultancy SBU that helps non-performing or sick companies.', image: 'resources/startups/newway-768x174-1-300x68.png' },
  { id: 'jbconsultancy', name: 'J B Consultancy', description: 'A corporate SBU for career planning, financial advisory, placements, and international assignments.', image: 'resources/startups/JBLC_LOGO-1024x232-1-768x174.png' },
  { id: 'myschoolsolutions', name: 'My School Solutions', description: 'Provides online exam solutions for schools, colleges, and universities.', image: 'resources/startups/sdb-768x174-1-300x68.png' },
  { id: 'mynoticeboard', name: 'My Notice Board', description: 'A multipurpose digital notice board solution for schools and corporates.', image: 'resources/startups/noticeboard-768x174-1-300x68.png' },
  { id: 'innovatorsvote', name: 'Innovators Vote', description: 'An online voting solution designed for schools and corporate organizations.', image: 'resources/startups/onlinevoting-768x174-1-300x68.png' },
];
