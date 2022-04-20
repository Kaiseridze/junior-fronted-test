import React from "react"
import { useForm, Controller } from "react-hook-form"

function Index({
	name,
	username,
	email,
	street,
	city,
	zipcode,
	phone,
	website,
}: any) {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm()
		const onSubmit = (data: any) => {
			const dataJSON = JSON.stringify(data)
			console.table(JSON.parse(dataJSON))
		}
	return (
		<>
			<label htmlFor='name'>Name</label>
			<input
				id='name'
				defaultValue={name}
				{...register("name", { required: true })}
			/>
			{errors.name && (
				<span style={{ color: "red" }}>
					Это поле обязательно для заполнения
				</span>
			)}
			<label htmlFor='username'>Username</label>
			<input
				id='username'
				defaultValue={username}
				{...register("username", { required: true })}
			/>
			{errors.username && (
				<span style={{ color: "red" }}>
					Это поле обязательно для заполнения
				</span>
			)}
			<label htmlFor='email'>Email</label>
			<input
				id='email'
				defaultValue={email}
				{...register("email", { required: true })}
			/>
			{errors.email && (
				<span style={{ color: "red" }}>
					Это поле обязательно для заполнения
				</span>
			)}{" "}
			<label htmlFor='street'>Street</label>
			<input
				id='street'
				defaultValue={street}
				{...register("street", { required: true })}
			/>
			{errors.street && (
				<span style={{ color: "red" }}>
					Это поле обязательно для заполнения
				</span>
			)}
			<label htmlFor='city'>City</label>
			<input
				id='city'
				defaultValue={city}
				{...register("city", { required: true })}
			/>
			{errors.city && (
				<span style={{ color: "red" }}>
					Это поле обязательно для заполнения
				</span>
			)}
			<label htmlFor='zipcode'>Zipcode</label>
			<input
				id='zipcode'
				defaultValue={zipcode}
				{...register("zipcode", { required: true })}
			/>
			{errors.zipcode && (
				<span style={{ color: "red" }}>
					Это поле обязательно для заполнения
				</span>
			)}
			<label htmlFor='phone'>Phone</label>
			<input
				id='phone'
				defaultValue={phone}
				{...register("phone", { required: true })}
			/>
			{errors.phone && (
				<span style={{ color: "red" }}>
					Это поле обязательно для заполнения
				</span>
			)}
			<label htmlFor='website'>Website</label>
			<input
				id='website'
				defaultValue={website}
				{...register("website", { required: true })}
			/>
			{errors.website && (
				<span style={{ color: "red" }}>
					Это поле обязательно для заполнения
				</span>
			)}
			<label htmlFor='textarea'>Comment</label>
			<textarea
				id='textarea'
				{...register("textarea", { required: false })}
				cols={20}
				rows={20}></textarea>
			<div className='submit'>
				<input
					onClick={handleSubmit(onSubmit)}
					className='submit_btn'
					type='submit'
				/>
			</div>
		</>
	)
}

export default Index
