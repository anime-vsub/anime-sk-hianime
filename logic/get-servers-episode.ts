import { load$ } from "./load-$.ts"

export async function getServersEpisode(ep_id: string) {
  const $ = await load$(
    `https://hianime.to/ajax/v2/episode/servers?episodeId=${ep_id}`
  )

  return $(".server-item")
    .toArray()
    .map((div) => {
      const $div = $(div)

      const id = $div.attr("data-id")!
      const name = $div.text().trim()

      return { id, name }
    })
}
