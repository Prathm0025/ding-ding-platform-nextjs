import { redirect } from "next/navigation";
import { config } from "./config";
import { getCookie } from "./util";

export const login = async (data: any) => {
  try {
    const response = await fetch(
      `${config.server}/api/users/login?origin=platform`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.name,
          password: data.password,
        }),
      }
    );
    if (!response.ok) {
      const error = await response.json();
      return { error: error.message };
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log("error:", error);
  }
};

export const getUserDetails = async () => {
  const token = await getCookie();
  try {
    const response = await fetch(`${config.server}/api/users`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: `userToken=${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    redirect("/logout");
  }
};

export async function fetchGames(category: string = "all") {
  const token = await getCookie();
  const platform = "milkyway";
  try {
    const res = await fetch(
      `${config.server}/api/games?platform=${platform}&category=${category}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: `userToken=${token}`,
        },
      }
    );
    if (!res.ok) {
      const error = await res.json();
      throw new Error(`Failed to fetch games: ${error.message}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    redirect("/logout");
  }
}
