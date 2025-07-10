export async function getSource(server_id: string): Promise<{
  sources: string
  tracks: {
    file: string
    label: string
    kind: "captions" | "thumbnails"
    default?: true
  }[]
  encrypted: boolean
  intro: {
    start: number
    end: number
  }
  outro: {
    start: number
    end: number
  }
  server: number
}> {
  const data = await fetch(
    `https://megacloud.blog/embed-2/v2/e-1/getSources?id=${server_id}`
  ).then((res) => res.json())

  return data
  // console.log(data)

  // return {
  //   intro: data.intro,
  //   outro: data.outro,
  //   sources: data.sources[0]?.url,
  //   encrypted: false,
  //   tracks: data.subtitles.map((subtitle: { url: string; lang: string }) => {
  //     return {
  //       file: subtitle.url,
  //       label: subtitle.lang,
  //       kind: subtitle.lang === "thumbnails" ? "thumbnails" : "captions"
  //     }
  //   }),
  //   server: 0
  // }
}
