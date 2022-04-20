import React, {FC} from "react"
import { Link } from "react-router-dom"
import "./UserCart.scss"

interface IUsers {
	username: string
	city: string
	company: string
	id: number
}

const UserCart: FC<IUsers> = ({ username, company, city, id }) => {
	return (
		<div className='usercart'>
			<div className='usercart_inner'>
				<p>
					Фио: <span>{username}</span>
				</p>{" "}
				<p>
					Город: <span>{city}</span>
				</p>{" "}
				<p>
					Компания: <span>{company}</span>
				</p>{" "}
			</div>
			<Link to={`/users/${id}`}>Подробнее</Link>
		</div>
	)
}

export default UserCart
