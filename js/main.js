window.addEventListener("load", () => {
  //Masonry 레이아웃(Isotope 플러그인 이용)
  const iso = new Isotope("section", {
    // options
    itemSelector: "article",
  });

  const filterBtn = document.querySelectorAll(".btns>li"); //.btn>li들을 변수에

  for (let el of filterBtn) {
    //배열 filterBtn 의 아이템(갯수) 만큼 반복
    el.addEventListener("click", (e) => {
      e.preventDefault();

      //클릭을 할때 각 아이템(버튼)에 반복, on클라스 없애줌
      for (let el of filterBtn) {
        el.classList.remove("on");
      }

      //클릭한 버튼에 클라스 넣어줌
      e.currentTarget.classList.add("on");

      //클릭한 버튼에 있는 a태그 안의 속성 href의 value값을 가져온다
      const filering = e.currentTarget.querySelector("a").getAttribute("href");

      iso.arrange({ filter: filering }); //버튼을 누르면 필터링 작동(플러그인)
    });
  }

  // 각 article 을 클릭하면 팝업창이 뜨게 만들기

  const items = document.querySelectorAll("article"); // 각 article 들을 변수에 (배열)
  // article 이 여러개이기 때문에 querySelectorAll
  const pop = document.querySelector("#popup");

  for (const aa of items) {
    aa.addEventListener("click", (e) => {
      // 화면 너비 구하기
      const winWidth = document.body.clientWidth;
      console.log(winWidth);

      if (winWidth > 767) {
        // 화면 너비가 767px 보다 컸을 때만 작동
        // 클릭한  article img의 src 값, h2, p를 변수에 저장
        const img = e.currentTarget.querySelector("img").getAttribute("src");
        const title = e.currentTarget.querySelector("h2").innerText;
        const desc = e.currentTarget.querySelector("p").innerText;

        // pop 에 위의 변수를 적용
        pop.querySelector("img").setAttribute("src", img);
        pop.querySelector("h2").innerText = title;
        pop.querySelector("p").innerText = desc;

        pop.classList.add("on");
      }
    });
  }

  // popup 창을 클릭하면 popup 사라짐
  pop.addEventListener("click", () => {
    pop.classList.remove("on");
  });
});
