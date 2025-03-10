
import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      <h1>name:</h1>
      {user?.username}
      <br />
      <h1>Password</h1>
      {user?.password}
    </div>
  );
}
