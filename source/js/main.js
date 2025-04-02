// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

// Tabs

const priceTabs = document.querySelectorAll('.price__tabs-control');
const priceTabsContent = document.querySelectorAll('.price__tabs-element');

function hidePriceTabsContent() {
  if (priceTabsContent > 0 || priceTabs.length > 0) {
    priceTabsContent.forEach((item) => {
      item.classList.remove('price__tabs-element-is-active');
    });

    priceTabs.forEach((item) => {
      item.classList.remove('price__tabs-is-active');
    });
  }
}

function showPriceTabContent(i = 0) {
  if (priceTabsContent > 0 || priceTabs.length > 0) {
    priceTabsContent[i].classList.add('price__tabs-element-is-active');
    priceTabs[i].classList.add('price__tabs-is-active');
  }
}

hidePriceTabsContent();
showPriceTabContent();

priceTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    hidePriceTabsContent();
    showPriceTabContent(index);
  });
});

const faqTabs = document.querySelectorAll('.faq__tabs-control');
const faqTabsContent = document.querySelectorAll('.faq__tabs-wrapper');

function hideFaqTabContent() {
  if (faqTabsContent.length > 0 || faqTabs.length > 0) {
    faqTabsContent.forEach((item) => {
      item.classList.remove('faq__tabs-wrapper--active');
    });

    faqTabs.forEach((item) => {
      item.classList.remove('faq__tabs-control--active');
    });
  }
}

function showFaqTabContent(i = 0) {
  if (faqTabsContent.length > 0 || faqTabs.length > 0) {
    faqTabsContent[i].classList.add('faq__tabs-wrapper--active');
    faqTabs[i].classList.add('faq__tabs-control--active');
  }
}

hideFaqTabContent();
showFaqTabContent();

faqTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    hideFaqTabContent();
    showFaqTabContent(index);
  });
});
