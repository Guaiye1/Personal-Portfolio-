let bio = document.getElementById("Bio");
let accomplishment = document.getElementById("Accomplishment");
let habit = document.getElementById("Habits");
let habit_context = document.querySelector(".Habit_context")
let accomplishment_context =document.querySelector(".Accomplishment_context")
let bio_context = document.querySelector(".bio_context")
let sub_habits = document.getElementsByClassName("sub_habit")
let sub_accos = document.getElementsByClassName("sub_acco")


function bio_func(e) {
    e.preventDefault();
    accomplishment_context.style.display = "none";
    habit_context.style.display = "none";
    bio_context.style.display = "block"
}

function acco_func(e) {
    e.preventDefault();
    bio_context.style.display = "none";
    habit_context.style.display = "none";
    accomplishment_context.style.display = "block"
    sub_accos.style.display = "block"
    sub_habits.style.display = "none"
}

function habit_func(e) {
    e.preventDefault();
    accomplishment_context.style.display = "none";
    bio_context.style.display = "none";
    habit_context.style.display = "block"
    sub_accos.style.display = "none"
    sub_habits.style.display = "block"
}

bio.addEventListener("click", bio_func)
accomplishment.addEventListener("click", acco_func)
habit.addEventListener("click", habit_func)

