import React, { useState, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"
import axios from "axios"

import Home from "./Pages/Home"
import UserProfile from "./Pages/UserProfile"

import Button from "./Components/Button"
import Loading from "./Components/Loading"

import { usersDB } from "./db"

import "./index.scss"

function App() {
	const [userData, setUserData] = useState([])
	const [isLoaded, setIsLoaded] = useState<boolean>(false)

	const fetchAPI = async () => {
		await axios.get(usersDB).then(({ data }) => {
			setUserData(data)
			setIsLoaded(true)
		})
	}

	useEffect(() => {
		fetchAPI()
	}, [])

	const citySort = () => {
		const copyData = userData.concat()
		const sortData = copyData.sort((a: any, b: any) =>
			a.address.city > b.address.city ? 1 : -1
		)
		setUserData(sortData)
	}

	const companySort = () => {
		const copyData = userData.concat()
		const sortData = copyData.sort((a: any, b: any) =>
			a.company.name > b.company.name ? 1 : -1
		)
		setUserData(sortData)
	}

	return (
		<div className='container'>
			<div className='sidebar'>
				<div className='sidebar_wrapper'>
					<Link to='/'>
						<h2>Сортировка</h2>
						<Button onClick={citySort}>По городу</Button>
						<Button onClick={companySort}>По компании</Button>
					</Link>
				</div>
			</div>
			<div className='contentbar'>
				{isLoaded ? (
					<Routes>
						<Route path='*' element={<h1> Страница не найдена</h1>} />
						<Route path='/' element={<Home userData={userData} />} />
						<Route path='/users/:id' element={<UserProfile />} />
					</Routes>
				) : (
					<Loading />
				)}
			</div>
		</div>
	)
}

export default App
