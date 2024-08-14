export function getConfServer(server_id: string): Promise<{
  type: "iframe"
  link: string
}> {
  return fetch(`https://hianime.to/ajax/v2/episode/sources?id=${server_id}`).then(
    (res) => res.json()
  )
}

