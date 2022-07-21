class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    this.items.forEach((item) => item.classList.remove('active'));
    this.items[index].classList.add('active');
    this.thumbItems.forEach((item) => item.classList.remove('active'));
    this.thumbItems[index].classList.add('active');
    this.autoSlide();
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavigation() {
    const nextBtn = this.slide.querySelector('.slide-next');
    const prevBtn = this.slide.querySelector('.slide-prev');
    nextBtn.addEventListener('click', this.next);
    prevBtn.addEventListener('click', this.prev);
  }

  addThumbItems() {
    this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
    this.thumbItems = Array.from(this.thumb.children);
  }

  autoSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 3000);
  }

  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = this.slide.querySelectorAll('.slide-items > *');
    this.thumb = this.slide.querySelector('.slide-thumb');
    this.addThumbItems();
    this.activeSlide(0);
    this.addNavigation();
  }
}

new SlideStories('slide');
/////////////////////////////////////////////////////////////////////////////////////////

class SlideStories1 {
  constructor(id) {
    this.slide1 = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }

  activeSlide1(index) {
    this.active = index;
    this.items1.forEach((item) => item.classList.remove('active'));
    this.items1[index].classList.add('active');
    this.thumbItems1.forEach((item) => item.classList.remove('active'));
    this.thumbItems1[index].classList.add('active');
    this.autoSlide1();
  }

  prev1() {
    if (this.active > 0) {
      this.activeSlide1(this.active - 1);
    } else {
      this.activeSlide1(this.items1.length - 1);
    }
  }

  next1() {
    if (this.active < this.items1.length - 1) {
      this.activeSlide1(this.active + 1);
    } else {
      this.activeSlide1(0);
    }
  }

  addNavigation1() {
    const nextBtn = this.slide1.querySelector('.slide-next1');
    const prevBtn = this.slide1.querySelector('.slide-prev1');
    nextBtn.addEventListener('click', this.next1);
    prevBtn.addEventListener('click', this.prev1);
  }

  addThumbItems1() {
    this.items1.forEach(() => (this.thumb1.innerHTML += `<span></span>`));
    this.thumbItems1 = Array.from(this.thumb1.children);
  }

  autoSlide1() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next1, 3000);
  }

  init() {
    this.next1 = this.next1.bind(this);
    this.prev1 = this.prev1.bind(this);
    this.items1 = this.slide1.querySelectorAll('.slide-items1 > *');
    this.thumb1 = this.slide1.querySelector('.slide-thumb1');
    this.addThumbItems1();
    this.activeSlide1(0);
    this.addNavigation1();
  }
}

new SlideStories1('slide1');
