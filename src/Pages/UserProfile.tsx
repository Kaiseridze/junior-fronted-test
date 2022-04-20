import React, { useState, useEffect } from "react"
import axios from "axios"
import Button from "../Components/Button"
import "./UserProfile.scss"
import Input from "../Components/Input"
import { useParams } from "react-router-dom"
import { usersDB } from "../db"
import Loading from "../Components/Loading"

const UserProfile = () => {
	const [currentId, setCurrenId] = useState<any>([])
	const [isLoaded, setIsLoaded] = useState<boolean>(false)
	const [active, setActive] = useState<boolean>(false)
	const { id } = useParams()

	const fetchAPI = async () => {
		await axios.get(`${usersDB}/${id}`).then(({ data }) => {
			setCurrenId(data)
			setIsLoaded(true)
		})
	}

	useEffect(() => {
		fetchAPI()
	}, [id])
	return (
		<>
			{isLoaded ? (
				<>
					{" "}
					<div className='header'>
						<h1>Профиль пользователя</h1>
						<Button onClick={() => setActive(!active)}>Редактировать</Button>
					</div>
					<div>
						{currentId && (
							<Input
								active={active}
								key={currentId.id}
								street={currentId.address?.street}
								city={currentId.address?.city}
								zipcode={currentId.address?.zipcode}
								{...currentId}
							/>
						)}
					</div>{" "}
				</>
			) : (
				<Loading />
			)}
		</>
	)
}

export default UserProfile
