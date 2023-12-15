const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const number = document.querySelector("#number").value;

  if (number <= 100 && number >= 80) {
    document.getElementById(
      "result"
    ).innerHTML = `Your result is "A+" \n মিষ্টি খাওয়াবেন নাকি খাবেন?`;
  } else if (number < 80 && number >= 70) {
    document.getElementById(
      "result"
    ).innerHTML = `Your result is "A" \n আর একটু কষ্ট করতে হতো`;
  } else if (number < 70 && number >= 60) {
    document.getElementById(
      "result"
    ).innerHTML = `Your result is "A-" \nআর আফসোস করে কি হবে।`;
  } else if (number < 60 && number >= 50) {
    document.getElementById(
      "result"
    ).innerHTML = `Your result is "B" \n পড়ার থেকে আড্ডার পরিমান বেশি ছিল।`;
  } else if (number < 50 && number >= 40) {
    document.getElementById(
      "result"
    ).innerHTML = `Your result is "C" \n আড্ডার পরিমান বেশি ছিল।`;
  } else if (number < 40 && number >= 33) {
    document.getElementById(
      "result"
    ).innerHTML = `Your result is "D" \n ফাঁকির পরিমান বেশি ছিল।`;
  } else if (number < 33 && number >= 0) {
    document.getElementById(
      "result"
    ).innerHTML = `Your result is "F" \n বাবা তোমার কর্মের ফল। আর এক বার চেষ্টা কর।`;
  } else {
    document.getElementById("result").innerHTML =
      number + " your number is wrong";
  }
  result.style.display = "block";
});
