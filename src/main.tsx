import { createServer } from 'miragejs';
import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';

import './index.css';

const container = document.getElementById('root');

createServer({
	routes() {
		this.namespace = 'api';
		this.timing = 2000; // 2000ms (2 seconds)

		this.get('/users/victorbadaro', () => ({
			login: 'victorbadaro',
			id: 9096344,
			avatar_url: 'https://avatars.githubusercontent.com/u/9096344?v=4',
			html_url: 'https://github.com/victorbadaro',
			name: 'Victor Badaró',
			bio: 'Full Stack developer (Frontend focused) and new technologies lover. The following technologies are part of my day to day usage (in different levels): Node JS, J',
			public_repos: 155,
			public_gists: 2,
			followers: 133,
			following: 265
		}));
	}
});

createRoot(container!).render(<App />);
