function main() {
	const container = document.querySelector(".container");

	const top = document.querySelector("#top")

	const bottom = document.querySelector("#bottom")

	let valueTop = 0;
	let valueBottom = 0;

	function handleValuesTop(value) {
		top.textContent = `valor ${value} top`
	}

	function handleValuesBottom(value) {
		bottom.textContent = `valor ${value} bottom`
	}

	handleValuesBottom(valueBottom)
	handleValuesTop(valueTop)

	container.addEventListener("click", function (e) {

		if (e.target.closest(".content__top")) {
			if (e.target.classList.contains("btn--add")) {
				valueTop++;
				handleValuesTop(valueTop)
			}

			if (e.target.classList.contains("btn--rest")) {
				if (valueTop === 0) return
				valueTop--;
				handleValuesTop(valueTop)
			}
		}

		if (e.target.closest(".content__bottom")) {
			if (e.target.classList.contains("btn--add")) {
				valueBottom++;
				handleValuesBottom(valueBottom)
			}

			if (e.target.classList.contains("btn--rest")) {
				if (valueBottom === 0) return
				valueBottom--;
				handleValuesBottom(valueBottom)
			}

		}
	})
}

window.addEventListener("load", main);


