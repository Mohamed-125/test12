const servicesGrid = document.querySelector(".services-grid");
const servicesSlider = document.querySelector(".swiper-wrapper");


const servicesArray = [
  {
    img: `https://i.im.ge/2023/08/10/jAgp7c.image.png`,
    title: `حفلات الزواج والخطوبة`,
    desc: `
    يمكننا التخطيط لكل التفاصيل من ( الديكور والكوش وتنسيق الورود وغيرها ) والتنفيذ بالشكل المناسب
    
    `,
  },

  {
    img: `https://i.im.ge/2023/08/10/jAgUZy.image.png`,
    title: `حفلات أعياد الميلاد  `,
    desc: `
     يمكننا توفير حزمة حفلات كاملة و شاملة لاحتفالات أعياد الميلاد والتي تكون من اختياركم,
  `,
  },
  {
    img: `https://i.im.ge/2023/08/10/jAL9X0.image.png`,
    title: `حفلات تخرج`,
    desc: `
    يمكننا توفير حزمة حفلات كاملة و شاملة لحفلات التخرج  والتي تكون من اختياركم,
  `,
  },

  {
    img: `https://i.im.ge/2023/08/10/jAL9X0.image.png`,
    title: `تنسيق مأدبة  `,
    desc: `
    يمكننا تنظيم وتخطيط قائمة الطعام وخيارات التقديم وتصميم الطاولات 
    `,
  },

  {
    img: `https://i.im.ge/2023/08/10/jARdPG.image.png`,
    title: `التصوير الفوتوغرافي والفيديو  `,
    desc: `
    لدينا مصورون محترفون ومصورو فيديو يلتقطون جميع اللحظات الرائعة والمميزة,
  `,
  },
  {
    img: `https://i.im.ge/2023/08/10/jA8Y5y.image.png`,
    title: `الفرق الفنية  `,
    desc: `
    
    يتوفر لدينا تعهد وإدارة أعمال الفنانين والفنانات وأيضاً لدينا فرق شعبية وفرق أستعراضية 
    
    `,
  },
];

servicesArray.map((service) => {
  const template = document.createElement("template");
  template.innerHTML = `
    <div class="service-div swiper-slide">
      <div>
        <img src="${service.img}" />
      </div>
      <div>
        <p class='service-title' >${service.title}</p>
        <p>${service.desc}</p>
      <a   
  href="https://wa.me/966503300942?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B+%0D%0A%D8%A3%D8%AA%D9%88%D8%A7%D8%B5%D9%84+%D9%85%D8%B9%D9%83%D9%85+%D9%84%D9%84%D8%A3%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1+%D8%B9%D9%86+%D8%AE%D8%AF%D9%85%D8%A9+%3A+%0D%0A${service.title}"
      target="_blank"
      >   
        <button>تواصل معنا</button>
      </a>
     </div>
    </div>
  `.trim();
  servicesSlider.append(template.content.firstElementChild);
});

servicesArray.map((service) => {
  const template = document.createElement("template");
  template.innerHTML = `
    <div class="service-div swiper-slide">
      <div>
        <img src="${service.img}" />
      </div>
      <div>
        <p class='service-title' >${service.title}</p>
        <p>${service.desc}</p>
      <a   
  href="https://wa.me/966503300942?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B+%0D%0A%D8%A3%D8%AA%D9%88%D8%A7%D8%B5%D9%84+%D9%85%D8%B9%D9%83%D9%85+%D9%84%D9%84%D8%A3%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1+%D8%B9%D9%86+%D8%AE%D8%AF%D9%85%D8%A9+%3A+%0D%0A${service.title}"
      target="_blank"
      >   
        <button>تواصل معنا</button>
      </a>
     </div>
    </div>
  `.trim();
  servicesGrid.append(template.content.firstElementChild);
});



const servicesDiv = document.querySelector(".services-select");
const servicesSelectActive = false;
const servicesDivInput = document.querySelector(".services-div-selected");
let selectedNumber = 0;

const openSelectDiv = () => {
  document.querySelector("form button").style.visibility = "hidden";
  document.querySelector(".services-div-input span").style.rotate = "-90deg";
  servicesDiv.style.display = "flex";
};

const closeSelectDiv = () => {
  document.querySelector("form button").style.visibility = "visible";
  document.querySelector(".services-div-input  span").style.rotate = "90deg";
  servicesDiv.style.display = "none";
};

const toggleSelectDiv = (e) => {
  console.log(e);
  if (e.target.classList.contains("fa-xmark")) {
    return;
  } else {
    if (servicesDiv.style.display === "flex") {
      closeSelectDiv();
    } else {
      openSelectDiv();
    }
  }
};

document
  .querySelector(".services-div-input")
  .addEventListener("click", toggleSelectDiv);

// ===========◘
// add selected function
// ===========◘
// export
let items = [];
let options = [];

servicesArray.forEach((service) => options.push(service.title.trim()));

// export
const addToSelected = (e) => {
  const value = e.target.textContent.trim();
  options = options.filter((o) => o !== value);
  if (e.target?.remove) {
    e.target.remove();
  }

  selectedNumber += 1;

  console.log(selectedNumber);
  document.querySelector(
    ".services-div-input > div > div:last-child p"
  ).textContent = "تم تحديد : ";

  servicesDivInput.innerHTML = "";

  if (!items.includes(`${value}`)) {
    items.push(value);
  }

  const arranged = items.sort((a, b) => {
    return b.length - a.length;
  });

  arranged.forEach((arr) => {
    servicesDivInput.innerHTML += `
       <div class="selected-div">
            ${arr}
            <i class="fa-solid fa-xmark" onclick={removeSelected(this)}></i>
        </div>
     `.trim();
  });

  console.log(
    "selectedNum",
    selectedNumber,
    "arrayLength",

    servicesArray.length,
    servicesArray
  );
  if (selectedNumber === servicesArray.length) {
    closeSelectDiv();
  }
};

// ===========◘
// add all to selected funtion
// ===========◘

const addAllSelected = (e) => {
  if (selectedNumber === servicesArray.length) {
    return false;
  } else {
    const allOptions = [...document.querySelectorAll(".select-option")];

    allOptions.forEach((option) => {
      if (option.textContent.trim() === "الكل") {
        return false;
      } else {
        option.remove();
      }
    });

    document.querySelector(
      ".services-div-input > div:last-child p"
    ).textContent = "  تم تحديد : ";

    allOptions.forEach((option) => {
      addToSelected({ target: { textContent: option.textContent.trim() } });
    });
  }
};
document.querySelector(".all-btn").addEventListener("click", addAllSelected);

// ===========◘
// add to options funtion
// ===========◘

const addToOptions = (e) => {
  options.push(e);
  items = items.filter((item) => !options.includes(item));

  servicesDiv.innerHTML = `
       <div class="service-select-div">
                  <div class="all-btn" onclick="{addAllSelected(event)}">
                    الكل
                  </div>
                </div>`;

  options
    .sort((a, b) => {
      return b.length - a.length;
    })
    .forEach((arr) => {
      servicesDiv.innerHTML += `
       <div class="select-option" onclick={addToSelected(event)}>
                ${arr}
        </div>`;
    });
};

// add all to options

servicesArray
  .sort((a, b) => {
    return b.title.length - a.title.length;
  })
  .map((service) => {
    const template = document.createElement("template");
    template.innerHTML = `
    <div class="select-option" onclick={addToSelected(event)}>
              ${service.title}
            </div>
  `.trim();
    console.log("add all options : ", selectedNumber);
    servicesDiv.append(template.content.firstElementChild);
  });

// ===========◘
// remove selected function
// ===========◘

const removeSelected = (e) => {
  const value = e.parentElement.textContent.trim();
  e.parentElement.remove();
  selectedNumber -= 1;
  console.log("remove selected number is : ", selectedNumber);
  addToOptions(value);

  if (selectedNumber === 0) {
    toggleSelectDiv();
    document.querySelector(
      ".services-div-input > div:last-child p"
    ).textContent = " نوع الخدمه : ";
  }
};
