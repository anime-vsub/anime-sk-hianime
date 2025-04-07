import { load$ } from "./load-$.ts"

export async function getListEpisodes(anime_id: string) {
  const $ = await load$(
    `https://hianime.to/ajax/v2/episode/list/${anime_id.match(/\d+$/)![0]}`
  )

  return $("a.ep-item")
    .toArray()
    .map((anchor) => {
      const $a = $(anchor)

      const id = $a.attr("data-id")
      const order = $a.attr("data-number")
      const name = $a.text().trim().replace(/\s+/g, " ")
      const title = $a.attr("title")

      if (id === undefined || order === undefined) return null

      return { id: `${anime_id}$episode$${id}`, order, name, title }
    })
    .filter(Boolean)
}
