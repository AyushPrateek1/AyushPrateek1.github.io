const blog = document.getElementsByClassName('blog');
const news = document.getElementsByClassName('news');
const titles = document.getElementsByClassName('title');
const dates = document.getElementsByClassName('date');
const types = document.getElementsByClassName('type');
const themes = document.getElementsByClassName('theme');

const icons = document.getElementsByClassName('icon');
const sideHeadings = document.getElementsByClassName('sideContentTitle');
const sideDates = document.getElementsByClassName('sideContentDate');

const contentBox = document.getElementById('blog-box');
const closeBtn = document.getElementById('close-btn');
const boxHeading = document.getElementById('box-heading');
const boxContent = document.getElementById('box-content');

const addDataToBox = (heading, content) => {
  boxHeading.innerText = heading;
  boxContent.innerText = content;
  contentBox.style.display = "flex";
}

const main = async () => {
  contentBox.style.display = "none";

  const data = await fetch('https://coding-week-2024-api.onrender.com/api/data');
  const res = await data.json();
  console.log(res);

  for (let i=0; i<4; i++) {
    blog[i].style.backgroundImage = `url(${res[i].image})`;

    titles[i].innerText = res[i].headline;
    types[i].innerText = res[i].type;
    dates[i].innerText = res[i].date;

    blog[i].onclick = () => {
      console.log('click');
      addDataToBox(res[i].headline, res[i].content);
    }
  }

  for (let i=0; i<6; i++) {
    icons[i].src = res[i+4].image;

    sideHeadings[i].innerText = res[i+4].headline;
    sideDates[i].innerText = res[i+4].date;

    news[i].onclick = () => {
      console.log('click');
      addDataToBox(res[i+4].headline, res[i+4].content);
    }
  }

  closeBtn.onclick = () => {
    contentBox.style.display = "none";
  }
}

main();