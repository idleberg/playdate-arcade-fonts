import React from "react"
import YAMLData from "../meta.yaml"
import './index.scss'

const YAMLbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>{YAMLData.title}</h1>

    {YAMLData.content.map((data, index) => {
      return data.public && (
        <section key={index}>
          <h1>{data.name}</h1>
          <a href={`https://github.com/idleberg/playdate-arcade-fonts/blob/main/fonts/${encodeURIComponent(data.category)}/${encodeURIComponent(data.name)}.fnt`} target="_blank">
            <img
              src={`https://raw.githubusercontent.com/idleberg/playdate-arcade-fonts/main/preview/${encodeURIComponent(data.category)}/${encodeURIComponent(data.name)}.png`}
              alt={`Preview showing characters of the ${data.name} bitmap font.`}
              loading="lazy"
              fetchpriority={data.index < 10 ? 'high' : 'auto'}
            />
          </a>
        </section>
      )
    })}
  </div>
)
export default YAMLbuildtime