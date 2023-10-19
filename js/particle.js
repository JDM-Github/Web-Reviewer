particlesJS("particles-js", {
	particles: {
		number: {
			value: 40,
		},
		size: {
			value: 40,
			random: true,
		},
		color: {
			value: "#ffffff"
		},
		opacity: {
			value: 0.1,
			random: true,
		},
		shape: {
			type: "circle"
		},
		line_linked: {
			enable: false,
			distance: 300,
			color: "#ffffff",
			opacity: 0.1,
			width: 1
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: false
			},
			onclick: {
				enable: false
			},
			resize: false
		}
	}
});