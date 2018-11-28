export async function fetchPost(slug) {
  let response = await fetch('/wp/wp-json/wp/v2/posts?slug=' + slug, {cache: "force-cache"});
  return response.json();
}
