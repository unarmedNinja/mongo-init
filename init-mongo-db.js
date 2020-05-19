db.createUser(
	{
		user: "admin",
		pwd: "admpasswd",
		roles: [
		{
			role: "readWrite",
			db: "finance-dev"
		}
		]
	}
)

