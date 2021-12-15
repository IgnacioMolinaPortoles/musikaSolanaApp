import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { getVideoInfo } from '../utils'

const Song = (props) => {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    getInfo()
  }, [props.image.videoLink])
  
  const getInfo = async () => {
    let info = await getVideoInfo(props.image.videoLink)
    console.log(props)
    setInfo(info)
  }

  if (info === null) {
    return <div></div>
  }

    return (
        <div className="gif-item" key={info.thumbnail}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <img src={info.thumbnail} alt={info.title} />
                  <div style={{ alignContent: "center" }}>
                    <p
                      style={{
                        textAlign: "start",
                        height: 60,
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        fontSize: 17,
                        fontWeight: 700,
                        marginLeft:40
                      }}
                    >
                      {info.title}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: -20,
                  }}
                >
                  <p onClick={props.onClick} style={{ fontSize: 25, cursor:"pointer" }}>👍</p>
                  <p style={{ color: "white", fontSize: 15 }}>1</p>
                </div>
              </div>
    )
}

export default Song
