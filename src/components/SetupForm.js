import React from "react"
import { useGlobalContext } from "../utils/context"

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()

  return (
    <main>
      <section className="quiz quiz-small">
        <h2>Quiz Setup:</h2>
        <form className="setup-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="amount">Number of questions: </label>
            <input
              type="number"
              name="amount"
              id="amount"
              min={1}
              max={50}
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Choose a Category: </label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="videogames">Videogames</option>
              <option value="film">Film</option>
              <option value="animeManga">Anime & Manga</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">Choose a difficulty: </label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              Cannot generate questions, please try different options
            </p>
          )}
          <button type="submit" className="submit-btn">
            Start the Quiz!
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm
