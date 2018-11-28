export async function fetchPosts() {
  const url = '/wp/wp-json/wp/v2/posts';
  let response = await fetch(url);
  return response.json();
}