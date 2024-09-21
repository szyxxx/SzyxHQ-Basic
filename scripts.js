const articles = {
    "C": {
        title: "First Programming Language: C Language",
        content: "My journey in Computer Engineering began with a fascination for the digital world.  I was drawn to the endless possibilities and the power of problem-solving that programming offered. My first steps into this exciting field were with the C language. Learning C provided a strong foundation in computer science fundamentals, helping me understand the building blocks of programming. From there, I continued to explore other languages and technologies,  each expanding my horizons and deepening my passion for software development."
    },
    "Python": {
        title: "Python Programming: A Game Changer",
        content: "Python was a pivotal language in my Computer Engineering journey. Its readability and versatility made programming enjoyable and accessible. Through Python, I developed strong problem-solving skills and a solid foundation for exploring other languages like JavaScript, Kotlin, and C++. This experience ignited my passion for software development and opened up countless opportunities."
    },
    "Arduino": {
        title: "Arduino: Foundation of Electronics",
        content: "Arduino was my first hands-on experience with microprocessors, providing a tangible way to understand the interplay of hardware and software. It was incredibly rewarding to see how digital system design principles could be applied to control physical components. I delved into the world of control systems and basic mechanics, learning how to create interactive projects and automate tasks using Arduino. This experience ignited my passion for electronics and solidified my understanding of the fundamental concepts that drive the digital world."
    },
    "Kotlin": {
        title: "Kotlin: Mobile Development's Rising Star",
        content: "Kotlin was a new language I ventured into, drawn to its reputation for being modern and expressive. While Android Studio, its primary development environment, can be resource-intensive, I found Kotlin itself to be a refreshing change. Its concise syntax and features like null safety made development more enjoyable and less error-prone. The satisfaction of creating a functional Android app using Kotlin was a testament to its power and versatility."
    },
    "Laravel": {
        title: "Building Backends with Laravel",
        content: 'Laravel introduced me to the world of PHP frameworks during my database design course. Its intuitive syntax and extensive community made learning a breeze. The abundance of pre-built packages and tools, often likened to a "drag-and-drop" experience, streamlined the development process. Its no wonder Laravel is considered one of the fastest ways to build web applications.'
    }
};

const icons = document.querySelectorAll('.icon');
const langTitle = document.getElementById('language-title');
const articleContent = document.getElementById('article-content');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const lang = icon.getAttribute('data-lang');
        langTitle.textContent = articles[lang].title;
        articleContent.textContent = articles[lang].content;
        icons.forEach(i => i.classList.remove('active'));
        icon.classList.add('active');
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}
