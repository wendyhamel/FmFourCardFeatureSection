tailwind.config = {
	theme: {
		fontFamily: {
			'sans': ['Poppins', 'sans-serif']
		},
		extend: {
			colors: {
				'red': 'hsl(0, 78%, 62%)',
				'cyan': 'hsl(180, 62%, 55%)',
				'orange': 'hsl(34, 97%, 64%)',
				'blue': 'hsl(212, 86%, 64%)',
				'blue-dark': 'hsl(234, 12%, 34%)',
				'blue-gray': 'hsl(229, 6%, 66%)',
				'gray-light': 'hsl(0, 0%, 98%)',
			},
			fontSize: {
				'small': '0.9375rem'
			},
			boxShadow: {
				'around': '0 20px 25px 2px rgb(0 0 0 / 0.1), 0 8px 10px 3px rgb(0 0 0 / 0.1)'
			}
		}
	}
}