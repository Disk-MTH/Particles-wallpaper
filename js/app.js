particlesJS('particles-js', 
	{
	  "particles": {
		"number": {
		  "value": 75,
		  "density": {
			"enable": false,
			"value_area": 800
		  }
		},
		"color": {
		  "value": "#ffffff"
		},
		"shape": {
		  "type": "circle",
		  "stroke": {
			"width": 0,
			"color": "#000000"
		  },
		  "polygon": {
			"nb_sides": 10
		  },
		  "image": {
			"src": "img/github.svg",
			"width": 100,
			"height": 100
		  }
		},
		"opacity": {
		  "value": 0.5,
		  "random": false,
		  "anim": {
			"enable": false,
			"speed": 1,
			"opacity_min": 0.1,
			"sync": false
		  }
		},
		"size": {
		  "value": 5,
		  "random": false,
		  "anim": {
			"enable": false,
			"speed": 80,
			"size_min": 0.1,
			"sync": false
		  }
		},
		"line_linked": {
		  "enable": true,
		  "distance": 300,
		  "color": "#ffffff",
		  "opacity": 0.4,
		  "width": 2
		},
		"move": {
		  "enable": true,
		  "speed": 10,
		  "direction": "none",
		  "random": true,
		  "straight": false,
		  "out_mode": "out",
		  "bounce": false,
		  "attract": {
			"enable": false,
			"rotateX": 600,
			"rotateY": 1200
		  }
		}
	  },
	  "interactivity": {
		"detect_on": "canvas",
		"events": {
		  "onhover": {
			"enable": true,
			"mode": "grab"
		  },
		  "onclick": {
			"enable": true,
			"mode": "repulse"
		  },
		  "resize": true
		},
		"modes": {
		  "grab": {
			"distance": 500,
			"line_linked": {
			  "opacity": 0.5
			}
		  },
		  "bubble": {
			"distance": 800,
			"size": 80,
			"duration": 2,
			"opacity": 0.8,
			"speed": 3
		  },
		  "repulse": {
			"distance": 250,
			"duration": 2
		  },
		  "push": {
			"particles_nb": 4
		  },
		  "remove": {
			"particles_nb": 2
		  }
		}
	  },
	  "retina_detect": true
	}
);