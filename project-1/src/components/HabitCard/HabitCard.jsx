import { useState } from "react"
import "./HabitCard.css"
import close from "../../svg/close.svg"
import check from "../../svg/check.svg"

function HabitCard({ habit, setHabits, habits }) {
  const [complete, setComplete] = useState(false)

  return (
    <div
      className="HabitCard"
      onClick={() => {
        let newHabits = habits.map((updatedHabit) => {
          if (updatedHabit.id === habit.id) {
            return {
              ...habit,
              completed: !habit.completed,
            }
          } else return updatedHabit
        })
        setHabits(newHabits)
      }}
    >
      <div className="HabitCard__completion-container">
        <img
          className="HabitCard__completion-icon"
          src={habit.completed ? check : close}
        />
      </div>
      <div className="HabitCard__habit-container">{habit.habit}</div>
    </div>
  )
}

export default HabitCard
