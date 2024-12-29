export async function fetchApi(url) {
  try {
    const fetchURL = await fetch(url);
    if (!fetchURL.ok) throw new Error("Something Went Wrong !!");
    return await fetchURL.json();
  } catch (error) {
    console.log(error);
  }
}
