import test, {expect}from "playwright/test"


test.skip("API GET Method", async ({ request }) => {
const response = await request.get("http://localhost:3000/1");
expect(response.status()).toBe(200);
const jsonResponse = await response.json();
expect(jsonResponse).toHaveProperty("name");
expect(jsonResponse.name).toBe("Ervin Howell");

console.log(jsonResponse);

}
)