import { nanoid } from "@reduxjs/toolkit"

export function PostAdded(title, content) {
  let payload = {
    id: nanoid(),
    title,
    content,
  }
  return {
    type: 'POSTADDED',
    payload
  }
}

export function PostUpdated(action) {
    return {
        type: 'POSTUPDATED',
        action
      }
}
