// export const dynamic = "force-dynamic"; //dynamic ta front end theke control korbo
// এই API by default cache হয়ে হয়ে থাকে এর জন্য রেসপন্স পাঠানোর সময় update value না পাঠিয়ে cache value পাঠায়।
// backend থেকে যদি এটি কনট্রল করতে হয় "force-dynamic" ব্যবহার করে।
export async function GET() {
  return Response.json({
    currentTime: new Date().toLocaleTimeString(),
  });
}
