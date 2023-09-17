const cities = [
  "Ha Noi",
  "London",
  "Tokyo",
  "Paris",
  "Sydney",
  "Beijing",
  "Cairo",
  "Mumbai",
  "Rio de Janeiro",
  "Los Angeles",
];

const cityInput = document.getElementById("cityInput");
const resultsList = document.getElementById("resultsList");

let isHovered = false;

cityInput.addEventListener("click", () => {
  isHovered = true;
});

cityInput.addEventListener("blur", () => {
  isHovered = false;
  setTimeout(() => {
    resultsList.innerHTML = "";
  }, 200); // Khoảng thời gian đợi trước khi xóa danh sách (để cho phép người dùng nhấp vào danh sách nếu muốn)
});

cityInput.addEventListener("input", (event) => {
  if (!isHovered) return; // Nếu không hover vào ô, không hiển thị danh sách

  const searchString = event.target.value.toLowerCase();
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchString)
  );

  showResults(filteredCities);
});

function showResults(results) {
  resultsList.innerHTML = "";
  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result;
    resultsList.appendChild(li);
  });
}
