const articles = [
    {
        imageURL: "./images/image-currency.jpg",
        author: "Claire Robinson",
        title: "Receive money in any currency with no fees",
        content: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
    },
    {
        imageURL: "./images/image-restaurant.jpg",
        author: "Wilson Hutton",
        title: "Treat yourself without worrying about money",
        content: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
    },
    {
        imageURL: "./images/image-plane.jpg",
        author: "Wilson Huttonn",
        title: "Take your Easybank card wherever you go",
        content: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
    },
    {
        imageURL: "./images/image-confetti.jpg",
        author: "Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        content: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
    }  
]

const image = document.querySelectorAll(".card__container__image")
const auth = document.querySelectorAll(".card__container__author")
const title = document.querySelectorAll(".card__container__title")
const content = document.querySelectorAll(".card__container__text")

for (let i = 0; i < articles.length; i++) {
    image[i].src = articles[i].imageURL
    auth[i].textContent = `By ${articles[i].author}`
    title[i].textContent = articles[i].title
    content[i].textContent = articles[i].content
}

const hambu = document.querySelector(".nav__container__hambuger")
const menu_bg = document.querySelector(".nav__menu")
const menu_con = document.querySelector(".nav__menu__container")
let menuOpen = false
hambu.addEventListener("click", () => {
    if (menuOpen == false) {
        hambu.classList.add("open")
        menu_bg.style.display = "flex";
        setTimeout(() => {menu_bg.style.opacity = 1}, 10)
        setTimeout(() => {menu_con.style.display = "flex"}, 200)
        setTimeout(() => {menu_con.style.opacity = 1}, 230)
        menuOpen = true
    } else {
        hambu.classList.remove("open")
        menu_con.style.opacity = null
        setTimeout(() => {menu_con.style.display = null}, 200)
        setTimeout(() => {menu_bg.style.opacity = null}, 210)
        setTimeout(() => {menu_bg.style.display = null}, 410)
        menuOpen = false
    }
})