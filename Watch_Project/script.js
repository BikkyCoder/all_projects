function scrollLeft() {
  let scrollableDiv = document.getElementById("scrollable");
  
  // Debugging: Check current scroll position
  console.log("Before Scroll Left:", scrollableDiv.scrollLeft);
  
  // Scroll left only if possible
  if (scrollableDiv.scrollLeft > 0) {
    scrollableDiv.scrollBy({
      left: -100, // Adjust scroll speed
      behavior: "smooth"
    });
  }
}

function scrollRight() {
  let scrollableDiv = document.getElementById("scrollable");
  
  // Debugging: Check current scroll position
  console.log("Before Scroll Right:", scrollableDiv.scrollLeft);
  
  scrollableDiv.scrollBy({
    left: 100, // Adjust scroll speed
    behavior: "smooth"
  });
}


















// const scrollContainer = document.getElementById("dragScroll");

// let isDown = false;
// let startX;
// let scrollLeft;

// scrollContainer.addEventListener("mousedown", (e) => {
//   isDown = true;
//   scrollContainer.classList.add("active");
//   startX = e.pageX - scrollContainer.offsetLeft;
//   scrollLeft = scrollContainer.scrollLeft;
// });

// scrollContainer.addEventListener("mouseleave", () => {
//   isDown = false;
// });

// scrollContainer.addEventListener("mouseup", () => {
//   isDown = false;
// });

// scrollContainer.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - scrollContainer.offsetLeft;
//   const walk = (x - startX) * 2; // Adjust speed
//   scrollContainer.scrollLeft = scrollLeft - walk;
// });
