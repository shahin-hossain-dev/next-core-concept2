import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
  try {
    const db = await connectDB(); //database কে connect করা হলো।
    const userCollection = db.collection("users"); //user collection
    const newUser = request.json(); //request theke je user ke pawa gelo
    const result = await userCollection.insertOne(newUser); //database e insert kora holo
    return Response.json({ message: "New User Created" });
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
};
