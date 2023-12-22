// "use script";

// const firstBatch = ["Tom", "Shah", "Aidina"];
// const secondBatch = [
// 	"Meka",
// 	"Aida",
// 	"Aigerim",
// 	"Azim",
// 	"Tima",
// 	"Dastan",
// 	"Erkinai",
// ];

// const allStudents = [...firstBatch, ...secondBatch, "Janara"];

// console.log(allStudents);

// const studentOne = {
// 	name: "Tom",
// 	age: 38,
// 	isMarried: true,
// 	isEmployed: true,
// 	kids: ["Joe", "Ashley"],
// };

// const studentTwo = { ...studentOne, name: "Meka" };

// console.log(studentTwo);

const getname = document.getElementById("name");

const img = document.querySelector("img");
const h1 = document.getElementById("name");
const percent = document.querySelector("p");
img.src =
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpYHoTd6JR72my-kK3zdvUL9EY_nDzJVWTQ&usqp=CAU";
let genderName;

const onReveralHandler = async () => {
	try {
		const res = await fetch(`https://api.genderize.io?name=${genderName}
`);
		const data = await res.json();
		// console.log(data());
		//paint

		if (data.gender === "female") {
			img.src =
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqVbCXO-Zvxxx3AFpgsnE3KyDH3gVnzSRtg&usqp=CAU";
			percent.textContent = data.probability;

			console.log(img);
		} else {
			img.src =
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pm_mm8oPe-juRte223HnmqldnGFBl5rXxw&usqp=CAU";
			percent.textContent = data.probability;
		}

		h1.textContent = genderName;
	} catch (error) {
		console.log(error);
	}
};

const onChangeHandler = (e) => {
	genderName = e.target.value;
};
