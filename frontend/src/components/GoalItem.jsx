function GoalItem({goal}) {
  return (
    <div className="goal">
        <div>
            {new Date(goal.createdAt).toLocaleString('en-US')}
        </div>
    </div>
  )
}

export default GoalItem