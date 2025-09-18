import { NewsArticle } from '@/types/news';

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'ATU Launches Revolutionary Engineering Program with Industry Partners',
    excerpt: 'Accra Technical University introduces cutting-edge engineering curriculum in partnership with leading technology companies to bridge the skills gap in Ghana\'s tech industry.',
    content: `
      <p>Accra Technical University (ATU) has announced the launch of a groundbreaking engineering program designed in collaboration with major industry partners including MTN Ghana, Vodafone, and several tech startups.</p>
      
      <p>The new program, titled "Applied Engineering for Digital Innovation," combines theoretical knowledge with hands-on experience in artificial intelligence, IoT development, and sustainable technology solutions.</p>
      
      <h3>Program Highlights</h3>
      <ul>
        <li>18-month intensive curriculum</li>
        <li>Direct industry mentorship</li>
        <li>Guaranteed internship placements</li>
        <li>Access to state-of-the-art labs and equipment</li>
        <li>Focus on solving local technological challenges</li>
      </ul>
      
      <p>Dr. Sarah Mensah, Head of Engineering Department, emphasized that this program addresses the growing demand for skilled engineers in Ghana's rapidly expanding technology sector.</p>
      
      <p>"We're not just teaching students to use technology, but to innovate and create solutions that will drive Ghana's digital transformation," Dr. Mensah stated during the launch ceremony.</p>
      
      <p>Applications for the first cohort are now open, with classes beginning in January 2024. The university expects to enroll 50 students in this inaugural class.</p>
    `,
    author: 'Dr. Emmanuel Kwaku Asante',
    publishedAt: '2024-01-15',
    category: 'academic',
    imageUrl: '/api/placeholder/800/400',
    featured: true,
    readTime: 4,
    tags: ['Engineering', 'Technology', 'Innovation', 'Industry Partnership']
  },
  {
    id: '2',
    title: 'ATU Students Win National Tech Innovation Challenge',
    excerpt: 'A team of Computer Science students from ATU emerged victorious in the Ghana National Innovation Challenge with their groundbreaking mobile health application.',
    content: `
      <p>Students from Accra Technical University have made the institution proud by winning the prestigious Ghana National Innovation Challenge 2024 with their innovative mobile health application, "HealthTrack Ghana."</p>
      
      <p>The winning team, comprising final-year Computer Science students Kwame Asante, Ama Serwaa, and Kofi Mensah, developed a comprehensive healthcare management system that connects rural communities with medical professionals.</p>
      
      <h3>About HealthTrack Ghana</h3>
      <p>The application features:</p>
      <ul>
        <li>Remote health monitoring capabilities</li>
        <li>Telemedicine consultations in local languages</li>
        <li>Medication reminder systems</li>
        <li>Emergency response coordination</li>
        <li>Health data analytics for rural clinics</li>
      </ul>
      
      <p>The team will receive GH₵50,000 in funding and mentorship support to develop their application for nationwide deployment.</p>
      
      <p>"This recognition validates our belief that ATU students are capable of creating world-class solutions to local problems," said Prof. Akosua Darkwa, Vice-Chancellor of ATU.</p>
    `,
    author: 'Grace Amponsah',
    publishedAt: '2024-01-12',
    category: 'academic',
    imageUrl: '/api/placeholder/800/400',
    featured: true,
    readTime: 3,
    tags: ['Students', 'Innovation', 'Healthcare', 'Mobile App', 'Competition']
  },
  {
    id: '3',
    title: 'ATU Football Team Advances to National Championship Finals',
    excerpt: 'The ATU Eagles have secured their place in the National University Football Championship finals after a thrilling 3-1 victory over University of Ghana.',
    content: `
      <p>The ATU Eagles football team has made history by advancing to the National University Football Championship finals for the first time in the institution's history.</p>
      
      <p>In a spectacular semi-final match played at the Accra Sports Stadium, the Eagles defeated the University of Ghana team 3-1, with goals from striker Emmanuel Boateng (2) and midfielder Justice Appiah (1).</p>
      
      <h3>Road to the Finals</h3>
      <p>The Eagles' journey to the finals has been remarkable:</p>
      <ul>
        <li>Quarter-finals: ATU 2-0 KNUST</li>
        <li>Round of 16: ATU 4-1 UCC</li>
        <li>Group Stage: Undefeated with 4 wins, 2 draws</li>
      </ul>
      
      <p>Coach Michael Osei praised his team's determination and tactical discipline throughout the tournament.</p>
      
      <p>"These young men have shown incredible commitment and skill. They represent not just our university, but the spirit of technical education in Ghana," Coach Osei commented after the victory.</p>
      
      <p>The finals will be held on January 28th at the Baba Yara Stadium in Kumasi, where ATU will face Ashesi University.</p>
    `,
    author: 'Sports Desk',
    publishedAt: '2024-01-14',
    category: 'sports',
    imageUrl: '/api/placeholder/800/400',
    featured: true,
    readTime: 2,
    tags: ['Football', 'Sports', 'Championship', 'University', 'Finals']
  },
  {
    id: '4',
    title: 'New Research Center for Renewable Energy Opens at ATU',
    excerpt: 'ATU inaugurates state-of-the-art renewable energy research facility, positioning itself as a leading institution for sustainable technology research in West Africa.',
    content: `
      <p>Accra Technical University has officially opened its new Center for Renewable Energy Research, a GH₵2.5 million facility that will serve as a hub for sustainable technology innovation in West Africa.</p>
      
      <p>The center, funded through partnerships with the World Bank and the European Union, features cutting-edge laboratories for solar panel research, wind energy systems, and biomass technology development.</p>
      
      <h3>Research Focus Areas</h3>
      <ul>
        <li>Solar energy optimization for tropical climates</li>
        <li>Small-scale wind turbine development</li>
        <li>Biomass energy from agricultural waste</li>
        <li>Energy storage solutions</li>
        <li>Smart grid integration technologies</li>
      </ul>
      
      <p>Dr. Rebecca Osei-Bonsu, Director of the new center, outlined ambitious plans for collaboration with international research institutions and local energy companies.</p>
      
      <p>"Our goal is to make Ghana energy independent through innovative renewable energy solutions developed right here at ATU," Dr. Osei-Bonsu explained during the inauguration ceremony.</p>
      
      <p>The center will also offer specialized training programs for energy professionals and support startups in the renewable energy sector.</p>
    `,
    author: 'Dr. Kwame Nkrumah',
    publishedAt: '2024-01-10',
    category: 'research',
    imageUrl: '/api/placeholder/800/400',
    featured: false,
    readTime: 3,
    tags: ['Research', 'Renewable Energy', 'Innovation', 'Sustainability', 'Technology']
  },
  {
    id: '5',
    title: 'Cultural Festival Celebrates Ghanaian Heritage at ATU',
    excerpt: 'The annual ATU Cultural Festival showcased the rich diversity of Ghanaian traditions through music, dance, art, and cuisine, bringing together students from all regions.',
    content: `
      <p>The Accra Technical University campus came alive with vibrant colors, traditional music, and cultural performances during the annual Cultural Festival held last weekend.</p>
      
      <p>The three-day event, organized by the Students' Union Cultural Committee, featured performances from student groups representing all 16 regions of Ghana, showcasing the country's rich cultural diversity.</p>
      
      <h3>Festival Highlights</h3>
      <ul>
        <li>Traditional dance performances from Northern, Ashanti, and Volta regions</li>
        <li>Fashion show featuring Ghanaian textiles and designs</li>
        <li>Art exhibition by Fine Arts students</li>
        <li>Traditional food festival with regional specialties</li>
        <li>Drumming and music workshops</li>
      </ul>
      
      <p>The festival's grand finale featured a collaborative performance where students from different cultural backgrounds performed together, symbolizing unity in diversity.</p>
      
      <p>"This festival reminds us that our diversity is our strength. At ATU, we celebrate every culture and tradition that our students bring," said Akosua Frimpong, President of the Students' Union.</p>
      
      <p>The event also served as a platform for cultural exchange, with international students participating and learning about Ghanaian traditions.</p>
    `,
    author: 'Student Affairs',
    publishedAt: '2024-01-08',
    category: 'campus',
    imageUrl: '/api/placeholder/800/400',
    featured: false,
    readTime: 2,
    tags: ['Culture', 'Festival', 'Students', 'Diversity', 'Tradition']
  },
  {
    id: '6',
    title: 'ATU Partners with Tech Giants for AI Research Initiative',
    excerpt: 'Leading technology companies join forces with ATU to establish a comprehensive artificial intelligence research program focused on African solutions.',
    content: `
      <p>Accra Technical University has entered into strategic partnerships with Google AI, Microsoft Research, and IBM to launch a groundbreaking artificial intelligence research initiative specifically designed for African contexts.</p>
      
      <p>The "AI for Africa" program will focus on developing machine learning solutions that address unique challenges faced by African countries, including language processing for local languages, agricultural optimization, and healthcare accessibility.</p>
      
      <h3>Program Components</h3>
      <ul>
        <li>Natural Language Processing for Ghanaian languages (Twi, Ga, Ewe)</li>
        <li>Computer vision applications for agriculture</li>
        <li>Predictive analytics for public health</li>
        <li>Financial inclusion through AI-powered fintech</li>
        <li>Smart city solutions for urban planning</li>
      </ul>
      
      <p>The program will provide research opportunities for both undergraduate and graduate students, with full scholarships available for the top performing candidates.</p>
      
      <p>Prof. Nana Akoto, leading the AI initiative, emphasized the importance of developing AI solutions that understand African contexts and challenges.</p>
      
      <p>"We're not just importing AI technology; we're creating AI that speaks our languages, understands our challenges, and provides solutions that work for our communities," Prof. Akoto stated.</p>
    `,
    author: 'Research Communications',
    publishedAt: '2024-01-06',
    category: 'research',
    imageUrl: '/api/placeholder/800/400',
    featured: false,
    readTime: 4,
    tags: ['AI', 'Research', 'Technology', 'Partnership', 'Innovation']
  },
  {
    id: '7',
    title: 'Important: Academic Calendar Update for 2024',
    excerpt: 'The university announces revisions to the academic calendar following consultation with faculty and student representatives.',
    content: `
      <p>The Academic Planning Committee has announced important updates to the 2024 academic calendar following extensive consultations with faculty members, student representatives, and administrative staff.</p>
      
      <h3>Key Changes</h3>
      <ul>
        <li><strong>Semester 1 Extension:</strong> End date moved from May 15 to May 22, 2024</li>
        <li><strong>Mid-Semester Break:</strong> Extended from 1 week to 10 days (March 18-29, 2024)</li>
        <li><strong>Examination Period:</strong> Additional week added for comprehensive assessments</li>
        <li><strong>Orientation Week:</strong> Enhanced program for new students (August 19-23, 2024)</li>
      </ul>
      
      <p>These changes have been made to ensure adequate time for course completion, student preparation, and comprehensive evaluation while maintaining academic standards.</p>
      
      <p>Dr. Yaw Osei, Registrar, explained that the adjustments reflect feedback received during the mid-year academic review process.</p>
      
      <p>"We remain committed to providing quality education while being responsive to the needs of our academic community," Dr. Osei noted.</p>
      
      <p>Updated academic calendars have been distributed to all departments and are available on the university website. Students are advised to check with their respective departments for any course-specific adjustments.</p>
    `,
    author: 'Academic Affairs',
    publishedAt: '2024-01-05',
    category: 'announcements',
    imageUrl: '/api/placeholder/800/400',
    featured: false,
    readTime: 2,
    tags: ['Academic Calendar', 'Announcement', 'Schedule', 'Students', 'Faculty']
  },
  {
    id: '8',
    title: 'Women in Tech Society Hosts Coding Bootcamp',
    excerpt: 'ATU\'s Women in Tech Society organizes intensive coding bootcamp to encourage more female students to pursue careers in technology.',
    content: `
      <p>The Women in Tech Society at Accra Technical University successfully concluded a week-long intensive coding bootcamp that attracted over 100 participants from across the university and neighboring institutions.</p>
      
      <p>The bootcamp, themed "Code Her Future," focused on web development, mobile app development, and data science, providing hands-on training in high-demand technological skills.</p>
      
      <h3>Bootcamp Features</h3>
      <ul>
        <li>Intensive workshops on HTML, CSS, JavaScript, and Python</li>
        <li>Mobile app development using React Native</li>
        <li>Introduction to data science and machine learning</li>
        <li>Career guidance sessions with industry professionals</li>
        <li>Networking opportunities with female tech leaders</li>
      </ul>
      
      <p>Guest speakers included senior software engineers from Jumia, Zeepay, and various tech startups who shared their career journeys and provided mentorship to participants.</p>
      
      <p>Akosua Darko, President of the Women in Tech Society, expressed satisfaction with the overwhelming response to the program.</p>
      
      <p>"We saw incredible enthusiasm and talent among the participants. Our goal is to build confidence and provide the skills needed for women to excel in technology careers," Darko stated.</p>
      
      <p>The society plans to make this an annual event and is working on establishing a mentorship program to support participants throughout their academic and professional journeys.</p>
    `,
    author: 'Student Organizations',
    publishedAt: '2024-01-03',
    category: 'campus',
    imageUrl: '/api/placeholder/800/400',
    featured: false,
    readTime: 3,
    tags: ['Women in Tech', 'Coding', 'Bootcamp', 'Technology', 'Career Development']
  }
];