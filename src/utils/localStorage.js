export const loadUserCourse = (userId) => {

  const users = JSON.parse(localStorage.getItem("devpath_users"))

  if (!users) return undefined

  return users[userId]

}



export const saveUserCourse = (userId, courseState) => {

  const users =
    JSON.parse(localStorage.getItem("devpath_users")) || {}

  users[userId] = courseState;

  localStorage.setItem(
    "devpath_users",
    JSON.stringify(users)
  )

}


export const initializeTopics = (topics) => {
  return topics.map((t) => ({
    ...t,
    completed: false
  }))
}