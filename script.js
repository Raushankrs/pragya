const openBtn = document.getElementById('openBookBtn');
const overlay = document.getElementById('bookOverlay');
const closeBtn = document.getElementById('closeBookBtn');
const book = document.getElementById('book');
const bookContent = document.getElementById('bookContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageIndicator = document.getElementById('pageIndicator');
const bookNav = document.getElementById('bookNav');
const heartBtn = document.getElementById('heartBtn');

const pages = [
  {
    img: "https://images.pexels.com/photos/8556118/pexels-photo-8556118.jpeg",
    title: "🎉🎂 Happy Birthday, mera pyaara sa bacha! 🥰🎈",
    quote: "🎉🎂 Meri cutie pie, aaj mere baby ka birthday hai 💖🥳 aur hum isse lekar aaj bahut zyada khush hain! 😍🎈 Tum meri jaan ho, hamesha muskurati raho! 🌸💕"
  },
  {
    img: "https://images.pexels.com/photos/1534633/pexels-photo-1534633.jpeg",
    title: "✨ Best part of you, my baby girl, is just you 💕🥰",
    quote: "Naya kuchh hai nahi saari baatein batay hua hai, but one best part 😍 you are not my stress baby 😌 you are the reason of my happiness 😊❤️, thu thu 😚👋 kisi ki najar na lage 🧿 mere bauaa ko 🥰."
  },
  {
    img: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    title: "Ho kya aap aayein? 😯✨💫",
    quote: "Mera kabhi na khatam hone wala khushi hai aap 😊💫, mera pyar ho aap ❤️, mera bauaa ho aap 🥰, meri beauty queen ho aap 👸✨, my sweetheart 😘💖 I love you ❤️😍."
  },
  {
    img: "https://images.pexels.com/photos/2055232/pexels-photo-2055232.jpeg",
    title: "Read how you made my day every day? 📖✨😊❤️🌞",
    quote: "Daily subah uthte hi mere chehre pe smile 😊 la dete ho aap, itna dur hone k bawjood bhi 🌍❤️. Subah uthte hi jaise hi Good Morning ☀️📲 dekhte hain, aisa lagta hai jaise ki pyar se 💕 Good Morning bol ke jagane aaye hain 😴➡️😊. And I love that 😘❤️. "
  },
  {
    img: "https://images.pexels.com/photos/3365555/pexels-photo-3365555.jpeg",
    title: "Sab to thik hai party mat bhuliyega! 🎉🥳",
    quote: "Iska description pta nahi kya hi likhe samajh nahi aa raha hai🤷‍♀️💭... bas party de dijiyega 🎉🍰🥂 samjhe na 😌😉❤️ "
  },
  {
    img: "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg",
    title: "Ho gaya ye last hai 😌🫶✨",
    quote: "Ho gaya na ab jyada der nahi lenge 😅⏳ nahi to aap abbhi gussa rahe honge mere pe na 😔😤 ki call nahi kar rahe hai, apne kaam me busy hai 🧑‍💻📚 but hamko laga ki as a engineer boyfriend 👨‍🔧❤️ hamko aise hi wish karna chahiye 🥰 that's why I tried this 💖 Happy Birthday my baby girl 🎂🎉💖 — Er. Raushan Kumar will always be there for Dr Pragya Pandey 🫶🌍❤️"
  }
];

let currentPage = 0;

function renderPage() {
  const page = pages[currentPage];
  let extraBtn = "";
  if (currentPage === 4) {
    extraBtn = `<button class="special-next-btn" id="specialNextBtn">Go to Next Page T &rarr;</button>`;
  }
  bookContent.innerHTML = `
    <img src="${page.img}" alt="Love Image" id="pageImg"/>
    <h2>${page.title}</h2>
    <p>${page.quote}</p>
    ${extraBtn}
  `;
  pageIndicator.textContent = `${currentPage + 1} / ${pages.length}`;
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
  bookNav.style.display = currentPage === 5 ? "none" : "flex";
  if (currentPage === 4) {
    document.getElementById('specialNextBtn').onclick = () => changePage(5);
  }
}

function changePage(newPage) {
  bookContent.classList.remove('fade-in');
  bookContent.classList.add('fade-out');
  setTimeout(() => {
    currentPage = newPage;
    renderPage();
    bookContent.classList.remove('fade-out');
    bookContent.classList.add('fade-in');
  }, 400);
}

openBtn.onclick = () => {
  overlay.classList.add('active');
  setTimeout(() => book.classList.add('active'), 100);
  currentPage = 0;
  renderPage();
  bookContent.classList.add('fade-in');
};

closeBtn.onclick = () => {
  book.classList.remove('active');
  setTimeout(() => overlay.classList.remove('active'), 600);
};

prevBtn.onclick = () => {
  if (currentPage > 0) {
    changePage(currentPage - 1);
  }
};

nextBtn.onclick = () => {
  if (currentPage < pages.length - 1) {
    changePage(currentPage + 1);
  }
};

heartBtn.onclick = () => {
  heartBtn.style.transform = "scale(1.3) rotate(-10deg)";
  setTimeout(() => {
    heartBtn.style.transform = "";
  }, 300);
};