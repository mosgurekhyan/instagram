import { memo } from "react"

function Comments({id, text, username}) {
  return (
    <p key={id} className="description"><span>{username}</span>{text}</p>
  )
}

export default memo(Comments)