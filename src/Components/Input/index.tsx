import React, { FC, useState } from "react"

import InputForm from "../InputForm"
import "./Input.scss"
interface Iinput {
	children?: React.ReactNode | React.ReactChild
	name: string
	username: string
	email: string
	street: string
	city: string
	zipcode: string
	phone: string
	website: string
	active: boolean
}

const Index: FC<Iinput> = ({
	name,
	username,
	email,
	street,
	city,
	zipcode,
	phone,
	website,
	active,
}) => {
	return (
		<>
			<form className={active ? `input_container` : "input_container disabled"}>
				<InputForm
					name={name}
					username={username}
					email={email}
					street={street}
					city={city}
					zipcode={zipcode}
					phone={phone}
					website={website}></InputForm>
			</form>
		</>
	)
}

export default Index
