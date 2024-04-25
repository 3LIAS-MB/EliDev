export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const hadnleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={hadnleClick} className={className}>
      {children}
    </div>
  )
}
