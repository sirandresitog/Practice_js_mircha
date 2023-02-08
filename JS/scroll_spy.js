const d = document;
export default function scrollspy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]"),
    cb = (entries) => {
     // console.log("entries", entries);
      entries.forEach((entry) => {
        //console.log("entry");
        const id = entry.target.getAttribute("id");
        //console.log(id);
        if (entry.isIntersecting) {
          d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
            "active"
          );
        } else {
          d.querySelector(
            `a[data-scroll-spy][href="#${id}"]`
          ).classList.remove("active");
        }
      });
    },
    observer = new IntersectionObserver(cb, {
      //root
      //rootMargin:"-250px"
      threshold:[0.5,0.75]
    });
  //console.log("observer", observer);
  $sections.forEach((el) => observer.observe(el));
}
