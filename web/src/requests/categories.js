export async function fetchCategories() {
  let response = await fetch('/wp/wp-json/wp/v2/categories');
  return response.json();
}