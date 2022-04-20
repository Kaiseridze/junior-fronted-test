import React from "react"
import UserCart from "../Components/UserCart"

interface IUserData {
	userData: Array<any>
}

function Home({ userData }: IUserData) {
	return (
		<>
			<h1>Cписок пользователей</h1>
			{userData.map((user) => (
				<UserCart
					key={user.id}
					company={user.company.name}
					city={user.address.city}
					username={user.name}
					id={user.id}
				/>
			))}
			<h2>Найдено {userData.length} пользователей</h2>
		</>
	)
}

export default Home
