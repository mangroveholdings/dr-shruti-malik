const preloader_: () => void = () => {
  let isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
  let preloader: HTMLElement | null = document.getElementById("preloader");

  if (preloader) {
    if (!isMobile) {
      setTimeout(function () {
        preloader?.classList.add("preloaded");
      }, 800);
      setTimeout(function () {
        preloader?.remove();
      }, 2000);
    } else {
      preloader.remove();
    }
  }
};

export const wowJsAnimation = (): void => {
  setTimeout(() => {
    if (typeof window !== "undefined") {
      (window as any).WOW = require("wowjs");
    }
    new (window as any).WOW.WOW().init();
  }, 500);
};

export const customCursor = (): void => {
  const myCursor = document.querySelectorAll(".mouse-cursor");
  const hamburger = document.querySelector(".hamburger");
  const kura_tm_topbar = document.querySelector(".kura_tm_topbar ") as HTMLElement | null;
  const pointer = document.querySelector(".cursor-pointer") as HTMLElement | null;
  const e = document.querySelector(".cursor-inner") as HTMLElement | null;
  const t = document.querySelector(".cursor-outer") as HTMLElement | null;

  if (!e || !t) {
    console.error("Cursor elements not found.");
    return;
  }

  function mouseEvent(element: HTMLElement): void {
    element.addEventListener("mouseenter", () => {
      e?.classList.add("cursor-hover");
      t?.classList.add("cursor-hover");
    });
    element.addEventListener("mouseleave", () => {
      e?.classList.remove("cursor-hover");
      t?.classList.remove("cursor-hover");
    });
  }

  if (myCursor.length) {
    if (document.body) {
      let n: number,
        i: number = 0,
        o: boolean = false;

      window.onmousemove = function (s) {
        if (!o) {
          t.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
        }
        e.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
        n = s.clientY;
        i = s.clientX;
      };

      document.body.addEventListener("mouseenter", () => {
        const a = document.querySelectorAll("a");
        e.classList.add("cursor-inner");
        t.classList.add("cursor-outer");

        a.forEach((element) => {
          mouseEvent(element as HTMLElement);
        });

        if (hamburger) {
          mouseEvent(hamburger as HTMLElement);
        }
        if (kura_tm_topbar) {
          mouseEvent(kura_tm_topbar);
        }
        if (pointer) {
          mouseEvent(pointer);
        }
      });

      e.style.visibility = "visible";
      t.style.visibility = "visible";
    }
  }
};

export const preloader = (): void => {
  preloader_();
  setTimeout(() => {
    const body = document.querySelector("body");
    if (body) {
      body.classList.add("opened");
    }
  }, 3000);
};

// Data Image
export const dataImage = (): void => {
  const d = document.querySelectorAll("[data-img-url]");
  for (let i = 0; i < d.length; i++) {
    const element = d[i] as HTMLElement;
    const imgUrl = element.getAttribute("data-img-url");
    if (imgUrl) {
      element.style.backgroundImage = `url(${imgUrl})`;
    }
  }
};

export const scroll_ = (): void => {
  const sections = document.querySelectorAll(".dizme_tm_section");
  const navLi = document.querySelectorAll(".anchor_nav li");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = (section as HTMLElement).offsetTop;
    const sectionHeight = (section as HTMLElement).clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = (section as HTMLElement).getAttribute("id") || "";
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("current");
    const anchorLink = li.getElementsByTagName("a")[0];
    if (anchorLink.getAttribute("href") === `#${current}`) {
      li.classList.add("current");
    }
  });
};

export const stickyNav = (): void => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".dizme_tm_header");
  stickys.forEach((sticky) => {
    if (sticky instanceof HTMLElement) {
      if (offset > 100) {
        sticky.classList.add("animate");
      } else {
        sticky.classList.remove("animate");
      }
    }
  });
};

export const scrollTop = (): void => {
  const bar = document.querySelector(".progressbar") as HTMLElement | null;
  const line = document.querySelector(".progressbar .line") as HTMLElement | null;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const winScroll = window.scrollY;
  const value = (winScroll / (documentHeight - windowHeight)) * 100;
  const position = value;

  if (bar && line) {
    if (winScroll > 100) {
      bar.classList.add("animate");
      line.style.height = position + "%";
    } else {
      bar.classList.remove("animate");
    }
  }
};

export const portfolioHover = (): void => {
  const dizme_tm_portfolio_animation_wrap = document.querySelectorAll(".dizme_tm_portfolio_animation_wrap");
  const dizme_tm_portfolio_titles = document.querySelector(".dizme_tm_portfolio_titles") as HTMLElement | null;

  dizme_tm_portfolio_animation_wrap.forEach((element) => {
    element.addEventListener("mousemove", () => {
      const title = element.getAttribute("data-title");
      const category = element.getAttribute("data-category");

      if (dizme_tm_portfolio_titles && title) {
        dizme_tm_portfolio_titles.classList.add("visible");
        dizme_tm_portfolio_titles.innerHTML = title + '<span class="work__cat">' + category + "</span>";
      }

      document.addEventListener("mousemove", (e) => {
        if (dizme_tm_portfolio_titles) {
          dizme_tm_portfolio_titles.style.left = `${e.clientX - 10}px`;
          dizme_tm_portfolio_titles.style.top = `${e.clientY + 25}px`;
        }
      });
    });

    element.addEventListener("mouseleave", () => {
      if (dizme_tm_portfolio_titles) {
        dizme_tm_portfolio_titles.classList.remove("visible");
      }
    });
  });
};
