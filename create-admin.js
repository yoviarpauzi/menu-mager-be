import bcrypt from "bcrypt";
import prismaClient from "./src/application/database.js";

const createAdmin = async() => {
    const payload = {
        name: "admin",
        email: "admin@gmail.com",
        role: "admin",
        password: await bcrypt.hash("adminmenumager", 10),
        avatar: "https://ui-avatars.com/api/?name=John+Doe"
    }

    await prismaClient.user.create({
        data: payload
    })
}

createAdmin().then(() => console.log("success"))