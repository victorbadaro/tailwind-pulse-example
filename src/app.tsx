import { useEffect, useState } from 'react';

type User = {
	login: string;
	id: number;
	avatar_url: string;
	html_url: string;
	name: string;
	bio: string;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
};

export function App() {
	const [user, setUser] = useState<User>({} as User);

	useEffect(() => {
		(async () => {
			const response = await fetch('http://localhost:3000/profile');
			const data = await response.json();

			setUser(data);
		})();
	}, []);

	return (
		<div className="flex items-center justify-center min-h-screen bg-zinc-950 text-zinc-50">
			{user ? (
				<>
					<h1>
						Hello,{' '}
						<a href={user.html_url} target="_blank" rel="noopener noreferrer">
							{user.name}
						</a>
						!
					</h1>
					<p>{user.bio}</p>
				</>
			) : (
				<h1>Hello, World!</h1>
			)}
		</div>
	);
}
