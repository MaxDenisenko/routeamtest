export default async function getData (subject) {
    return await fetch(`https://api.github.com/search/repositories?q=${subject}`).then(response => response.json())
}