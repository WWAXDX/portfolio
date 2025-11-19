import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  protected readonly currentLanguage = signal('EN');

  private translations = {
    'EN': {
      // Header
        'home': 'Home',
        'Skills': 'Skills',
        'projects': 'Projects',
        'courses': 'Courses',
        'about': 'About',
        'switchLanguage': 'Switch Language',
        'toggleDarkMode': 'Toggle Dark Mode',
      
      // Main Page
        'MyName': 'Abdullah',
        'developer': 'Full Stack Developer',
        'welcomeMessage': 'Passionate about creating beautiful and functional web experiences. Specialized in modern web technologies including Angular, TypeScript, and responsive design.',
        'additionalInfo': 'I enjoy transforming creative ideas into interactive digital experiences that users love.',
        'myCV': 'My CV',
        'skills': 'Skills',
        'myProjects': 'Projects',
        'myCourses': 'Courses',
        'contact': 'Contact Me',
        'getInTouch': 'Feel free to contact me',
        'contactInfo': 'Contact Me',
        'name': 'Name',
        'subject': 'Subject',
        'phone': 'Phone',
        'email': 'Email',
        'message': 'Message',
        'sendMessage': 'Send Message',
        'messageSent': 'Message sent (demo)',
        "showCertificate": "Show Certificate",
      
      // Modal
        'notice': 'Notice',
        'importantNotice': 'Important Notice:',
        'websiteInDevelopment': 'This website is currently under development. The information displayed here is not real and will be updated upon completion of the project.',
        'thankYou': 'Thank you for your understanding! 🚧',
        'iUnderstand': 'I Understand',
      
      // About Me
        'aboutMe': 'About Me',
        'aboutDescription1': 'I\'ve loved programming and development since I was a child, and I\'ve always worked hard to grow and improve this skill.',
        'aboutDescription2': 'I have experience meeting job requirements and solving problems as quickly as possible. I am also skilled at teamwork and organization.',
        'aboutDescription3': 'I am a developer who has been passionate about technology since childhood. I enjoy turning ideas into practical and useful applications. I focus on writing clean, maintainable code and pay close attention to user experience and app performance.',
        'aboutDescription4': 'I primarily work with HTML, CSS, JavaScript, and Angular. I have experience building interactive user interfaces, organizing projects, and collaborating within both small and large teams.',
        'aboutDescription5': 'I love challenges and problem-solving, and I continuously strive to learn new technologies and improve my skills. My goal is to develop technical solutions that enhance user experience and help achieve project objectives.',
        'basicInfo': 'Basic Information',
        'birthdate': 'Birthdate',
        'location': 'Location',
        'copyright': '© 2025 Abdullah. All rights reserved.'
    },
    'العربية': {
      // Header
        'home': 'الرئيسية',
        'Skills': 'المهارات',
        'projects': 'المشاريع',
        'courses': 'الدورات',
        'about': 'نبذة عني',
        'switchLanguage': 'تغيير اللغة',
        'toggleDarkMode': 'الوضع المظلم',
      
      // Main Page
        'MyName': 'عبدالله',
        'developer': 'مطور ويب متكامل',
        'welcomeMessage': 'شغوف بإنشاء تجارب ويب جميلة ووظيفية. متخصص في تقنيات الويب الحديثة بما في ذلك Angular و TypeScript والتصميم المتجاوب.',
        'additionalInfo': 'أستمتع بتحويل الأفكار الإبداعية إلى تجارب رقمية تفاعلية يحبها المستخدمون.',
        'myCV': 'سيرتي الذاتية',
        'skills': 'المهارات',
        'myProjects': 'المشاريع',
        'myCourses': 'الدورات',
        'contact': 'للتواصل',
        'getInTouch': 'لا تتردد في التواصل معي',
        'contactInfo': 'تواصل معي',
        'name': 'الاسم',
        'subject': 'الموضوع',
        'phone': 'الهاتف',
        'email': 'البريد الإلكتروني',
        'message': 'الرسالة',
        'sendMessage': 'إرسال الرسالة',
        'messageSent': 'تم إرسال الرسالة (تجريبي)',
        'showCertificate': 'عرض الشهادة',
      
      // Modal
        'notice': 'إشعار',
        'importantNotice': 'إشعار مهم:',
        'websiteInDevelopment': 'هذا الموقع قيد التطوير حالياً. المعلومات المعروضة هنا ليست حقيقية وسيتم تحديثها عند اكتمال المشروع.',
        'thankYou': 'شكراً لتفهمك! 🚧',
        'iUnderstand': 'فهمت',
      
      // About Me
        'aboutMe': 'نبذة عني',
        'aboutDescription1': 'أحببت البرمجة والتطوير منذ الطفولة، وعملت دائماً بجد لتنمية وتحسين هذه المهارة.',
        'aboutDescription2': 'لدي خبرة في تلبية متطلبات العمل وحل المشاكل بأسرع وقت ممكن. كما أنني ماهر في العمل الجماعي والتنظيم.',
        'aboutDescription3': 'أنا مطور شغوف بالتكنولوجيا منذ الطفولة. أستمتع بتحويل الأفكار إلى تطبيقات عملية ومفيدة. أركز على كتابة كود نظيف وقابل للصيانة وأولي اهتماماً كبيراً لتجربة المستخدم وأداء التطبيقات.',
        'aboutDescription4': 'أعمل بشكل أساسي مع HTML و CSS و JavaScript و Angular. لدي خبرة في بناء واجهات مستخدم تفاعلية وتنظيم المشاريع والتعاون ضمن فرق صغيرة وكبيرة.',
        'aboutDescription5': 'أحب التحديات وحل المشاكل، وأسعى باستمرار لتعلم تقنيات جديدة وتحسين مهاراتي. هدفي هو تطوير حلول تقنية تعزز تجربة المستخدم وتساعد في تحقيق أهداف المشروع.',
        'basicInfo': 'المعلومات الأساسية',
        'birthdate': 'تاريخ الميلاد',
        'location': 'الموقع',
        'copyright': '© 2025 عبدالله. جميع الحقوق محفوظة.'
    }
  };

  setLanguage(lang: 'EN' | 'العربية') {
    this.currentLanguage.set(lang);
    localStorage.setItem('preferredLanguage', lang);
  }

  getCurrentLanguage() {
    return this.currentLanguage();
  }

  translate(key: string): string {
    const lang = this.currentLanguage() as keyof typeof this.translations;
    return this.translations[lang]?.[key as keyof typeof this.translations[typeof lang]] || key;
  }

  isArabic(): boolean {
    return this.currentLanguage() === 'العربية';
  }
}